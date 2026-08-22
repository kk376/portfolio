import { memo } from "react";

/**
 * BackgroundEffects - Hardware-accelerated ambient backdrop.
 *
 * Architectural & Performance Decisions:
 * - Employs pure CSS radial gradients instead of `filter: blur(...)` or Canvas 2D/WebGL buffers.
 *   CSS blur filters trigger expensive software rasterization passes on every scroll event;
 *   pre-computed radial gradients compile directly into GPU composite textures.
 * - Layer isolation via `pointer-events-none` and `fixed inset-0 z-0` prevents hit-testing
 *   overhead and unintended pointer event interception.
 */
function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-left subtle violet glow */}
      <div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 45%, transparent 70%)",
        }}
      />

      {/* Bottom-right subtle cyan glow */}
      <div
        className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 45%, transparent 70%)",
        }}
      />

      {/* Center ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Subtle edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,8,0.7)_100%)]" />
    </div>
  );
}

export default memo(BackgroundEffects);
