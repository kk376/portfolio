import React, { useState } from 'react';
import { Mail, Check, Copy, Send, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="Get In Touch"
        subtitle="Interested to collaborate, discuss apprentice frontend roles, or share feedback? Feel free to reach out"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="greg-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Let's talk about everything!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Don't like web forms? Send me an email directly or connect on GitHub and LinkedIn.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FF4C60]/10 flex items-center justify-center text-[#FF4C60] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6C6CE5]/10 flex items-center justify-center text-[#6C6CE5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Jaipur, Rajasthan, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD15C]/15 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Availability</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Open to Apprentice &amp; Junior Roles</div>
                </div>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="mt-6 w-full btn-secondary text-xs py-2.5 flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                  <span>Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="greg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold text-lg">
              <MessageSquare className="w-5 h-5 text-[#FF4C60]" />
              <span>Send Me a Message</span>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Thank you for reaching out! I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Insert your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#FF4C60] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Insert your email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#FF4C60] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Insert your subject"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#FF4C60] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#FF4C60] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-coral w-full py-3.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
