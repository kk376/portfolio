import { BookOpen, Award, Terminal, TrendingUp } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { StatCard } from "../ui";
import { STATS_DATA } from "@/data/portfolioData";

const iconMap = {
  book: <BookOpen size={20} />,
  award: <Award size={20} />,
  terminal: <Terminal size={20} />,
  trending: <TrendingUp size={20} />,
};

export default function StatsSection() {
  return (
    <AnimatedSection>
      <section
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        aria-label="Academic & Practice Metrics"
      >
        {STATS_DATA.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={iconMap[stat.iconName]}
            color={stat.color}
            gradient={stat.gradient}
          />
        ))}
      </section>
    </AnimatedSection>
  );
}
