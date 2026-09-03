import { Mail, Phone, Globe, ChevronRight, Linkedin } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { ContactInfoCard } from "../ui";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <AnimatedSection>
      <section id="contact" className="relative" aria-labelledby="contact-heading">
        <div className="relative bg-[#0a0a12] border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
            <Mail size={28} />
          </div>

          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-8 text-base md:text-lg leading-relaxed">
            Open to conversations about tech, junior developer / data analyst opportunities,
            or mentorship. Feel free to drop a line!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <Mail size={18} />
              Send an Email
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactInfoCard
              icon={<Mail size={20} />}
              label="Email Address"
              value={PERSONAL_INFO.email}
              href={`mailto:${PERSONAL_INFO.email}`}
              copyable
            />
            <ContactInfoCard
              icon={<Phone size={20} />}
              label="Phone Number"
              value={PERSONAL_INFO.phone}
              href={`tel:${PERSONAL_INFO.phone}`}
              copyable
            />
            <ContactInfoCard
              icon={<Globe size={20} />}
              label="Location"
              value={PERSONAL_INFO.location}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
