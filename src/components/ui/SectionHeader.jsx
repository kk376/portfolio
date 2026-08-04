/**
 * SectionHeader - Consistent section title with icon
 * @param {object} props - Component props
 * @param {string} props.title - Section title text
 * @param {React.ReactNode} props.icon - Icon element
 */
export default function SectionHeader({ title, icon }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
      <span className="p-2 rounded-xl bg-white/5">{icon}</span>
      {title}
    </h2>
  );
}
