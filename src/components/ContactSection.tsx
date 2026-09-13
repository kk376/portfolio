import React, { useState } from 'react';
import { Mail, Check, Copy, Send, MessageSquare, MapPin, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (web3FormsKey) {
      setSubmitStatus('submitting');
      setErrorMessage('');
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || `Portfolio inquiry from ${formData.name.trim() || 'Visitor'}`,
            message: formData.message.trim(),
            botcheck: '',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setErrorMessage(data.message || 'Failed to deliver message. Please use direct email.');
          setSubmitStatus('error');
        }
      } catch {
        setErrorMessage('Network connection error. Please use direct email below.');
        setSubmitStatus('error');
      }
    } else {
      const subject = encodeURIComponent(
        formData.subject.trim() || `Portfolio inquiry from ${formData.name.trim() || 'Visitor'}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader
        title="Get In Touch"
        subtitle="Interested to collaborate, discuss web development opportunities, or share feedback? Feel free to reach out"
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
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Open to Junior Roles &amp; Collaborations</div>
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

            {submitStatus === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Thank you for reaching out! I will review your message and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-2 inline-flex items-center text-xs font-semibold text-[#FF4C60] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                    <div className="space-y-1">
                      <p className="font-semibold">{errorMessage || 'Something went wrong.'}</p>
                      <p>
                        You can also email directly at{' '}
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold">
                          {PERSONAL_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

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
                  disabled={submitStatus === 'submitting'}
                  className={`btn-coral w-full py-3.5 flex items-center justify-center gap-2 ${
                    submitStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  {import.meta.env.VITE_WEB3FORMS_KEY
                    ? 'Delivered directly to inbox with spam protection'
                    : `Pre-fills your message in your default email client addressed to ${PERSONAL_INFO.email}`}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
