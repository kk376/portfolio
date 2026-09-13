import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SectionFooter } from './SectionFooter';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0f172a]/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="COLLABORATION & TRANSMISSION"
          heading="Get in touch."
          subHeading="Interested to collaborate, discuss junior frontend opportunities, or share feedback? Feel free to drop me a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Anand-styled Contact Form */}
          <div className="lg:col-span-7 anand-card p-6 sm:p-8 bg-white dark:bg-[#111827]">
            <div className="flex items-center gap-2.5 mb-6 text-slate-900 dark:text-white font-poppins font-bold text-lg">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <span>Send Me a Message</span>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 dark:text-white text-base">
                  Message Sent Successfully!
                </h4>
                <p className="font-sans text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out! I will review your dispatch and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-slate-900 dark:text-white text-sm font-sans placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-slate-900 dark:text-white text-sm font-sans placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the project, opportunity, or feedback..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-slate-900 dark:text-white text-sm font-sans placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl anand-gradient-bg text-white font-poppins font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Email Card */}
            <div className="anand-card p-6 sm:p-7 bg-white dark:bg-[#111827] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                  DIRECT CHANNEL // DISPATCH
                </span>
                <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              </div>

              <div>
                <h4 className="font-poppins font-bold text-lg text-slate-900 dark:text-white">
                  Direct Email
                </h4>
                <p className="font-mono text-xs text-blue-600 dark:text-cyan-400 font-medium break-all mt-1">
                  {PERSONAL_INFO.email}
                </p>
                <p className="font-sans text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Fastest way to reach me for junior frontend discussions or code reviews.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#162032] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-cyan-400 font-poppins text-xs font-semibold shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full py-2.5 rounded-xl anand-gradient-bg text-white font-poppins text-xs font-semibold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="anand-card p-6 sm:p-7 bg-white dark:bg-[#111827] space-y-4">
              <div className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                SOCIAL &amp; REPOSITORIES
              </div>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#162032] hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400" />
                    <div>
                      <div className="font-poppins font-bold text-xs text-slate-900 dark:text-white">
                        GitHub
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        @{PERSONAL_INFO.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#162032] hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                    <div>
                      <div className="font-poppins font-bold text-xs text-slate-900 dark:text-white">
                        LinkedIn
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        kushagra-kumar376
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <SectionFooter
          phrase="Back to "
          link="top."
          toAddress="#home"
        />
      </div>
    </section>
  );
};
