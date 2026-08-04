import { memo } from "react";

/**
 * BackgroundEffects - Lightweight static gradient background.
 * Particles and heavy animations removed for better performance.
 */
function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient orbs - opacity-only pulse, no scale transform */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]"
        style={{ animation: "bgPulse 6s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[120px]"
        style={{ animation: "bgPulse 6s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/6 rounded-full blur-[100px]"
        style={{ animation: "bgPulse 6s ease-in-out infinite 4s" }}
      />

      {/* Subtle grid — static, no animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <style>{`
        @keyframes bgPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

export default memo(BackgroundEffects);
