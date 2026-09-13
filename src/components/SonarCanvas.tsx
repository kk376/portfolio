import React, { useEffect, useRef, useState } from 'react';
import { Radio, Crosshair, Zap } from 'lucide-react';

interface Blip {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  pulseSpeed: number;
  label: string;
}

export const SonarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [interactivePings, setInteractivePings] = useState<number>(0);
  const [radarSpeed, setRadarSpeed] = useState<number>(1.2);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // Fixed tactical blips on the radar
    const blips: Blip[] = [
      { x: 0.3, y: -0.4, radius: 4, alpha: 0.8, pulseSpeed: 0.02, label: 'PR #214 [CESIUM]' },
      { x: -0.5, y: 0.25, radius: 3.5, alpha: 0.7, pulseSpeed: 0.015, label: 'FEDORA [v5.5.7]' },
      { x: 0.6, y: 0.45, radius: 3, alpha: 0.9, pulseSpeed: 0.03, label: 'KKFETCH [RUST]' },
      { x: -0.25, y: -0.6, radius: 3, alpha: 0.6, pulseSpeed: 0.02, label: 'KKPDF [ZED]' },
    ];

    interface Ripple {
      x: number;
      y: number;
      r: number;
      maxR: number;
      alpha: number;
    }
    const ripples: Ripple[] = [];

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      ripples.push({
        x: clickX,
        y: clickY,
        r: 5,
        maxR: 120,
        alpha: 0.9,
      });
      setInteractivePings((prev) => prev + 1);
    };

    canvas.addEventListener('click', handleCanvasClick);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.44;

      ctx.clearRect(0, 0, width, height);

      // Draw background tactical dark fill
      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, width, height);

      if (showGrid) {
        // Draw acoustic concentric range rings
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)';
        ctx.lineWidth = 1;

        const ringSteps = [0.25, 0.5, 0.75, 1.0];
        ringSteps.forEach((step, idx) => {
          const r = maxRadius * step;
          ctx.beginPath();
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.stroke();

          // Range ring text distance
          ctx.fillStyle = 'rgba(34, 211, 238, 0.35)';
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.fillText(`${(idx + 1) * 50} NM`, centerX + 6, centerY - r + 12);
        });

        // Crosshairs and axis marks
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.18)';
        ctx.beginPath();
        ctx.moveTo(centerX - maxRadius - 15, centerY);
        ctx.lineTo(centerX + maxRadius + 15, centerY);
        ctx.moveTo(centerX, centerY - maxRadius - 15);
        ctx.lineTo(centerX, centerY + maxRadius + 15);
        ctx.stroke();

        // 45 degree diagonal index lines
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.06)';
        ctx.beginPath();
        const diagDist = maxRadius * 0.95;
        const cos45 = Math.cos(Math.PI / 4);
        ctx.moveTo(centerX - diagDist * cos45, centerY - diagDist * cos45);
        ctx.lineTo(centerX + diagDist * cos45, centerY + diagDist * cos45);
        ctx.moveTo(centerX + diagDist * cos45, centerY - diagDist * cos45);
        ctx.lineTo(centerX - diagDist * cos45, centerY + diagDist * cos45);
        ctx.stroke();

        // Compass degree markers
        const bearings = [
          { label: '000° N', x: centerX, y: centerY - maxRadius - 10, align: 'center' as CanvasTextAlign },
          { label: '090° E', x: centerX + maxRadius + 15, y: centerY + 3, align: 'left' as CanvasTextAlign },
          { label: '180° S', x: centerX, y: centerY + maxRadius + 20, align: 'center' as CanvasTextAlign },
          { label: '270° W', x: centerX - maxRadius - 15, y: centerY + 3, align: 'right' as CanvasTextAlign },
        ];
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = 'rgba(52, 211, 153, 0.6)';
        bearings.forEach((b) => {
          ctx.textAlign = b.align;
          ctx.fillText(b.label, b.x, b.y);
        });
      }

      // Draw active acoustic ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.r += 2.2;
        ripple.alpha -= 0.015;

        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(34, 211, 238, ${ripple.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw radar sweep beam
      angle = (angle + (0.015 * radarSpeed)) % (Math.PI * 2);

      const sweepGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        5,
        centerX,
        centerY,
        maxRadius
      );
      sweepGradient.addColorStop(0, 'rgba(52, 211, 153, 0.5)');
      sweepGradient.addColorStop(0.8, 'rgba(34, 211, 238, 0.15)');
      sweepGradient.addColorStop(1, 'rgba(34, 211, 238, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      // Sweep sector (tail trail)
      ctx.arc(centerX, centerY, maxRadius, angle - 0.45, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Sharp beam line at leading edge
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * maxRadius,
        centerY + Math.sin(angle) * maxRadius
      );
      ctx.stroke();
      ctx.restore();

      // Draw contacts and detect if sweep is hitting them
      blips.forEach((blip) => {
        const bx = centerX + blip.x * maxRadius;
        const by = centerY + blip.y * maxRadius;
        const blipAngle = (Math.atan2(by - centerY, bx - centerX) + Math.PI * 2) % (Math.PI * 2);

        // Check angular difference with radar sweep
        let diff = (angle - blipAngle + Math.PI * 2) % (Math.PI * 2);
        const isLit = diff < 0.5;

        const currentAlpha = isLit ? 1.0 : Math.max(0.2, blip.alpha * 0.5);

        // Blip outer glow
        ctx.fillStyle = isLit ? 'rgba(52, 211, 153, 0.4)' : 'rgba(34, 211, 238, 0.15)';
        ctx.beginPath();
        ctx.arc(bx, by, blip.radius * (isLit ? 2.5 : 1.5), 0, Math.PI * 2);
        ctx.fill();

        // Blip core
        ctx.fillStyle = isLit ? '#34d399' : `rgba(34, 211, 238, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(bx, by, blip.radius, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = '9px JetBrains Mono, monospace';
        ctx.fillStyle = isLit ? '#34d399' : 'rgba(148, 163, 184, 0.6)';
        ctx.textAlign = 'left';
        ctx.fillText(blip.label, bx + 8, by + 3);
      });

      // Center emitter ring
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [radarSpeed, showGrid]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden hud-border bg-obsidian-900/90 backdrop-blur-md p-4 sm:p-6 my-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-obsidian-700/60 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs tracking-wider uppercase text-emerald-400 font-semibold">
            PR #214 Live Sonar Engine
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Acoustic Sweep Simulation (Cesium Visual Style)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setRadarSpeed((s) => (s === 1.2 ? 2.2 : s === 2.2 ? 0.6 : 1.2))}
            className="px-2.5 py-1 rounded bg-obsidian-800 hover:bg-obsidian-700 text-slate-300 border border-obsidian-600 transition-colors flex items-center gap-1.5"
            title="Toggle Sweep Rate"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Speed: {radarSpeed}x</span>
          </button>
          <button
            onClick={() => setShowGrid((g) => !g)}
            className="px-2.5 py-1 rounded bg-obsidian-800 hover:bg-obsidian-700 text-slate-300 border border-obsidian-600 transition-colors flex items-center gap-1.5"
            title="Toggle HUD Grid"
          >
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>Grid: {showGrid ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden cursor-crosshair group">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute bottom-3 right-3 pointer-events-none font-mono text-[11px] text-slate-400 bg-obsidian-950/80 px-2.5 py-1 rounded border border-obsidian-700/60 flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Interactive: Click canvas to emit acoustic ping ({interactivePings})</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-2 pt-2 border-t border-obsidian-700/40">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">Target Contacts:</span>
          <span className="text-slate-300">4 Active Nodes</span>
        </div>
        <div className="text-emerald-400/90">
          Derived from Kushagra's upstream contribution to God's Eye View (PR #214)
        </div>
      </div>
    </div>
  );
};
