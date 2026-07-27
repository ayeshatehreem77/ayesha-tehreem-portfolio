import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });

      // Reset form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or reach out directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8 sm:p-10 rounded-3xl bg-[#17171D]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Radial Soft Lighting Behind Form */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#D16A8A]/20 via-transparent to-[#A93A5B]/20 blur-2xl pointer-events-none -z-10" />

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Full Name Field */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full bg-[#0C0C0F]/90 text-[#F7F2EC] text-sm px-4 pt-6 pb-2 rounded-xl border ${errors.name ? 'border-red-500/70' : 'border-white/10 focus:border-[#D16A8A]'
              } focus:ring-1 focus:ring-[#D16A8A] focus:outline-none transition-all duration-300 disabled:opacity-50`}
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-[11px] font-mono tracking-wider text-[#F7F2EC]/40 uppercase transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-[#F7F2EC]/40 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#D16A8A] peer-focus:uppercase"
          >
            Full Name
          </label>
          {errors.name && (
            <span className="text-[10px] font-mono text-red-400 mt-1 block px-1">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Address Field */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full bg-[#0C0C0F]/90 text-[#F7F2EC] text-sm px-4 pt-6 pb-2 rounded-xl border ${errors.email ? 'border-red-500/70' : 'border-white/10 focus:border-[#D16A8A]'
              } focus:ring-1 focus:ring-[#D16A8A] focus:outline-none transition-all duration-300 disabled:opacity-50`}
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-[11px] font-mono tracking-wider text-[#F7F2EC]/40 uppercase transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-[#F7F2EC]/40 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#D16A8A] peer-focus:uppercase"
          >
            Email Address
          </label>
          {errors.email && (
            <span className="text-[10px] font-mono text-red-400 mt-1 block px-1">
              {errors.email}
            </span>
          )}
        </div>

        {/* Subject Field */}
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            required
            disabled={isSubmitting}
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full bg-[#0C0C0F]/90 text-[#F7F2EC] text-sm px-4 pt-6 pb-2 rounded-xl border ${errors.subject ? 'border-red-500/70' : 'border-white/10 focus:border-[#D16A8A]'
              } focus:ring-1 focus:ring-[#D16A8A] focus:outline-none transition-all duration-300 disabled:opacity-50`}
          />
          <label
            htmlFor="subject"
            className="absolute left-4 top-2 text-[11px] font-mono tracking-wider text-[#F7F2EC]/40 uppercase transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-[#F7F2EC]/40 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#D16A8A] peer-focus:uppercase"
          >
            Subject
          </label>
          {errors.subject && (
            <span className="text-[10px] font-mono text-red-400 mt-1 block px-1">
              {errors.subject}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            disabled={isSubmitting}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full bg-[#0C0C0F]/90 text-[#F7F2EC] text-sm px-4 pt-6 pb-2 rounded-xl border ${errors.message ? 'border-red-500/70' : 'border-white/10 focus:border-[#D16A8A]'
              } focus:ring-1 focus:ring-[#D16A8A] focus:outline-none transition-all duration-300 resize-none disabled:opacity-50`}
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-[11px] font-mono tracking-wider text-[#F7F2EC]/40 uppercase transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-[#F7F2EC]/40 peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#D16A8A] peer-focus:uppercase"
          >
            Your Message
          </label>
          {errors.message && (
            <span className="text-[10px] font-mono text-red-400 mt-1 block px-1">
              {errors.message}
            </span>
          )}
        </div>

        {/* Status Notification Toast */}
        {/* Status Notification Toast */}
        <AnimatePresence>
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`p-4 rounded-xl border text-xs font-mono flex items-center gap-3 transition-all ${status.type === 'success'
                ? 'bg-[#17171D] border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                : 'bg-[#17171D] border-red-500/50 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 animate-pulse ${status.type === 'success' ? 'bg-emerald-400' : 'bg-red-500'
                  }`}
              />
              <span>{status.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full py-4 rounded-xl font-medium text-xs font-mono uppercase tracking-widest text-[#F7F2EC] overflow-hidden transition-all duration-500 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {/* Button Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#A93A5B] via-[#D16A8A] to-[#A93A5B] bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right" />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

          {/* Button Text */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && (
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </span>
        </button>

        {/* Extra Note */}
        <p className="text-center text-[11px] font-mono text-[#F7F2EC]/40 pt-1">
          Usually replies within 24 hours.
        </p>
      </form>
    </motion.div>
  );
};