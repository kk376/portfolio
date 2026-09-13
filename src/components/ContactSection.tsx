import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { AndrewSectionHeader } from './AndrewSectionHeader';
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
    <section id="contact" className="py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AndrewSectionHeader
          id="contact"
          title="Contact"
          lede="Interested to collaborate, discuss junior frontend opportunities, or share feedback? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 andrew-card p-6 sm:p-8 bg-white dark:bg-[#202230]">
            <div className="flex items-center gap-2.5 mb-6 text-slate-900 dark:text-white font-quicksand font-bold text-xl">
              <MessageSquare className="w-5 h-5 text-[#7148fc] dark:text-[#09d8ff]" />
              <span>Send Me a Message</span>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-quicksand font-bold text-slate-900 dark:text-white text-base">
                  Message Sent Successfully!
                </h4>
                <p className="font-quicksand text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Thank you for reaching out! I will review your dispatch and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-quicksand text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#2d3042] bg-slate-50 dark:bg-[#15161e] text-slate-900 dark:text-white text-sm font-quicksand placeholder:text-slate-400 focus:border-[#7148fc] dark:focus:border-[#09d8ff] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-quicksand text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#2d3042] bg-slate-50 dark:bg-[#15161e] text-slate-900 dark:text-white text-sm font-quicksand placeholder:text-slate-400 focus:border-[#7148fc] dark:focus:border-[#09d8ff] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-quicksand text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the opportunity, project, or review feedback..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#2d3042] bg-slate-50 dark:bg-[#15161e] text-slate-900 dark:text-white text-sm font-quicksand placeholder:text-slate-400 focus:border-[#7148fc] dark:focus:border-[#09d8ff] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#7148fc] hover:bg-[#5d35e0] text-white font-quicksand font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="andrew-card p-6 sm:p-7 bg-white dark:bg-[#202230] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="font-quicksand text-xs font-bold text-[#7148fc] dark:text-[#09d8ff]">
                  DIRECT CHANNEL
                </span>
                <Mail className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
              </div>

              <div>
                <h4 className="font-quicksand font-bold text-lg text-slate-900 dark:text-white">
                  Direct Email
                </h4>
                <p className="font-mono text-xs text-[#7148fc] dark:text-[#09d8ff] font-semibold break-all mt-1">
                  {PERSONAL_INFO.email}
                </p>
                <p className="font-quicksand text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-medium">
                  Fastest route for engineering opportunities or code reviews.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 rounded-full bg-slate-100 dark:bg-[#15161e] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-[#7148fc] font-quicksand text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full py-2.5 rounded-full bg-[#7148fc] hover:bg-[#5d35e0] text-white font-quicksand text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="andrew-card p-6 sm:p-7 bg-white dark:bg-[#202230] space-y-4">
              <div className="font-quicksand text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                PROFILES
              </div>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#15161e] hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/80 dark:border-[#2d3042] text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-[#7148fc] dark:group-hover:text-[#09d8ff]" />
                    <div>
                      <div className="font-quicksand font-bold text-xs text-slate-900 dark:text-white">
                        GitHub
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        @{PERSONAL_INFO.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#7148fc] dark:group-hover:text-[#09d8ff] transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#15161e] hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/80 dark:border-[#2d3042] text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                    <div>
                      <div className="font-quicksand font-bold text-xs text-slate-900 dark:text-white">
                        LinkedIn
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        kushagra-kumar376
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#7148fc] dark:group-hover:text-[#09d8ff] transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
