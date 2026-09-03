import { ReactNode, useState, MouseEvent } from "react";
import { Copy, Check, AlertCircle } from "lucide-react";

export interface ContactInfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

/**
 * ContactInfoCard - Interactive contact coordinate card with optional copy-to-clipboard functionality.
 *
 * Clipboard handling:
 * - Uses navigator.clipboard.writeText with graceful try/catch for non-secure contexts or denied permissions.
 * - Displays copied success status or explicit failure notification.
 * - Resets status feedback automatically.
 */
export default function ContactInfoCard({
  icon,
  label,
  value,
  href,
  copyable = false,
}: ContactInfoCardProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async (e: MouseEvent) => {
    if (!copyable) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
      setCopied(false);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const cardDetails = (
    <>
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform border border-white/5 shrink-0">
        {icon}
      </div>
      <div className="text-left min-w-0">
        <p className="text-xs text-gray-400 uppercase font-medium tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors truncate">
          {value}
        </p>
      </div>
    </>
  );

  return (
    <div className="p-5 bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group shadow-md">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 flex-1 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
        >
          {cardDetails}
        </a>
      ) : (
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {cardDetails}
        </div>
      )}

      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied
              ? `Copied ${label} to clipboard`
              : copyError
              ? `Failed to copy ${label}`
              : `Copy ${label} to clipboard`
          }
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          title={copyError ? "Failed to copy" : "Click to copy"}
        >
          {copied ? (
            <span
              role="status"
              aria-live="polite"
              className="flex items-center gap-1 text-xs text-emerald-400 font-medium"
            >
              <Check size={14} />
              Copied
            </span>
          ) : copyError ? (
            <span
              role="alert"
              aria-live="assertive"
              className="flex items-center gap-1 text-xs text-red-400 font-medium"
            >
              <AlertCircle size={14} />
              Failed
            </span>
          ) : (
            <Copy size={14} />
          )}
        </button>
      )}
    </div>
  );
}

