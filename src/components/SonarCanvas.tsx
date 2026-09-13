import React, { useEffect, useRef, useState } from 'react';
import { Crosshair, RotateCw } from 'lucide-react';

interface Blip {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  label: string;
}

export const SonarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const blips: Blip[] = [
      { x: 0.35, y: -0.42, radius: 3.5, alpha: 0.8, label: 'CONTACT 01 [BEARING 040°]' },
      { x: -0.48, y: 0.28, radius: 3.0, alpha: 0.7, label: 'CONTACT 02 [BEARING 210°]' },
      { x: 0.52, y: 0.45, radius: 3.2, alpha: 0.85, label: 'CONTACT 03 [BEARING 140°]' },
    ];

    interface Ripple {
      x: number;
      y: number;
      r: number;
      alpha: number;
    }
    const ripples: Ripple[] = [];

    const dimensions = { width: 0, height: 0 };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      dimensions.width = rect.width;
      dimensions.height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
        r: 4,
        alpha: 0.8,
      });
    };

    canvas.addEventListener('click', handleCanvasClick);

    let isVisible = true;
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          const currentlyVisible = entry.isIntersecting;
          if (currentlyVisible && !isVisible) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          } else {
            isVisible = currentlyVisible;
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    const render = () => {
      if (!isVisible) return;

      const width = dimensions.width;
      const height = dimensions.height;
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.42;

      ctx.clearRect(0, 0, width, height);

      // Dark radar screen background
      ctx.fillStyle = '#08090d';
      ctx.fillRect(0, 0, width, height);

      if (showGrid) {
        // Range rings
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;

        const ringSteps = [0.25, 0.5, 0.75, 1.0];
        ringSteps.forEach((step, idx) => {
          const r = maxRadius * step;
          ctx.beginPath();
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
          ctx.font = '9px JetBrains Mono, monospace';
          ctx.fillText(`${(idx + 1) * 50} NM`, centerX + 5, centerY - r + 11);
        });

        // Crosshairs
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
        ctx.beginPath();
        ctx.moveTo(centerX - maxRadius - 10, centerY);
        ctx.lineTo(centerX + maxRadius + 10, centerY);
        ctx.moveTo(centerX, centerY - maxRadius - 10);
        ctx.lineTo(centerX, centerY + maxRadius + 10);
        ctx.stroke();
      }

      // Process ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.r += 2.0;
        ripple.alpha -= 0.015;

        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(56, 189, 248, ${ripple.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Sweep rotation
      angle = (angle + 0.014 * speedMultiplier) % (Math.PI * 2);

      const sweepGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        4,
        centerX,
        centerY,
        maxRadius
      );
      sweepGradient.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      sweepGradient.addColorStop(0.7, 'rgba(56, 189, 248, 0.08)');
      sweepGradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, angle - 0.4, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Sharp beam line
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * maxRadius,
        centerY + Math.sin(angle) * maxRadius
      );
      ctx.stroke();
      ctx.restore();

      // Blips
      blips.forEach((blip) => {
        const bx = centerX + blip.x * maxRadius;
        const by = centerY + blip.y * maxRadius;
        const blipAngle = (Math.atan2(by - centerY, bx - centerX) + Math.PI * 2) % (Math.PI * 2);

        let diff = (angle - blipAngle + Math.PI * 2) % (Math.PI * 2);
        const isLit = diff < 0.45;

        ctx.fillStyle = isLit ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.08)';
        ctx.beginPath();
        ctx.arc(bx, by, blip.radius * (isLit ? 2.2 : 1.3), 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isLit ? '#38bdf8' : 'rgba(148, 163, 184, 0.4)';
        ctx.beginPath();
        ctx.arc(bx, by, blip.radius, 0, Math.PI * 2);
        ctx.fill();

        if (isLit) {
          ctx.font = '9px JetBrains Mono, monospace';
          ctx.fillStyle = '#38bdf8';
          ctx.fillText(blip.label, bx + 7, by + 3);
        }
      });

      // Center emitter
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isVisible = false;
      cancelAnimationFrame(animationFrameId);
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [speedMultiplier, showGrid]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#08090d] p-3 sm:p-4 my-4">
      <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/[0.06] text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-medium text-[11px] uppercase tracking-wider text-cyan-400">
            Cesium GLSL Shader Simulation
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">Click screen to emit ping</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSpeedMultiplier((s) => (s === 1.0 ? 1.8 : s === 1.8 ? 0.6 : 1.0))}
            className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] text-[10px] flex items-center gap-1 transition-colors"
            title="Adjust rotation speed"
          >
            <RotateCw className="w-3 h-3 text-slate-400" />
            <span>{speedMultiplier}x</span>
          </button>
          <button
            onClick={() => setShowGrid((g) => !g)}
            className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] text-[10px] flex items-center gap-1 transition-colors"
            title="Toggle range rings"
          >
            <Crosshair className="w-3 h-3 text-cyan-400" />
            <span>{showGrid ? 'Grid ON' : 'Grid OFF'}</span>
          </button>
        </div>
      </div>

      <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1.5 border-t border-white/[0.04]">
        <span>Polar coordinates: r * exp(-decay * dt)</span>
        <span className="text-slate-400">Derived from bilawalsidhu/gods-eye-view PR #214</span>
      </div>
    </div>
  );
};
