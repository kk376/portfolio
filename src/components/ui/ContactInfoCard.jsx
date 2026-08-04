/**
 * ContactInfoCard - Contact information display card
 * @param {object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element
 * @param {string} props.label - Info label
 * @param {string} props.value - Info value
 */
export default function ContactInfoCard({ icon, label, value }) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all">
      <div className="text-gray-400 mb-2">{icon}</div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-sm font-medium text-white">{value}</p>
    </div>
  );
}
