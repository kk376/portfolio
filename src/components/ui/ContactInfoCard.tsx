import { ReactNode, useState, MouseEvent } from "react";
import { Copy, Check } from "lucide-react";

export interface ContactInfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

export default function ContactInfoCard({
  icon,
  label,
  value,
  href,
  copyable = false,
}: ContactInfoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: MouseEvent) => {
    if (!copyable) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard write failed or permission denied
    }
  };

  const content = (
    <div className="p-5 bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform border border-white/5">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-xs text-gray-500 uppercase font-medium tracking-wider mb-0.5">
            {label}
          </p>
          <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
            {value}
          </p>
        </div>
      </div>

      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label} to clipboard`}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          title="Click to copy"
        >
          {copied ? (
            <span
              role="status"
              aria-live="polite"
              className="flex items-center gap-1 text-xs text-emerald-400"
            >
              <Check size={14} />
              Copied
            </span>
          ) : (
            <Copy size={14} />
          )}
        </button>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
