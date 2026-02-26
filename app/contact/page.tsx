"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Integrate with a backend service (e.g. Resend, Formspree, or a serverless API route)
    // for production form handling. Currently sets local state for UI feedback only.
    setSubmitted(true);
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "General Inquiries",
      value: "hello@404day.com",
      href: "mailto:hello@404day.com",
      color: "#fac355",
    },
    {
      icon: "🤝",
      title: "Sponsorship",
      value: "sponsors@404day.com",
      href: "mailto:sponsors@404day.com",
      color: "#e87851",
    },
    {
      icon: "🎤",
      title: "Press & Media",
      value: "press@404day.com",
      href: "mailto:press@404day.com",
      color: "#9ec367",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Atlanta, Georgia",
      href: "#",
      color: "#f4b59e",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(158,195,103,0.1) 0%, transparent 60%), #1c1c1e",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9ec367]/20 text-[#9ec367] text-xs font-semibold uppercase tracking-wider mb-6">
            Contact Us
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">Get in</span>
            <br />
            <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Questions, ideas, partnerships — we want to hear from you. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="card flex items-start gap-3 group"
            >
              <span className="text-2xl">{method.icon}</span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: method.color }}>
                  {method.title}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {method.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <h2 className="section-title">Send Us a Message</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form and a member of our team will reach out shortly.
            </p>

            {submitted ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(158,195,103,0.1)",
                  border: "1px solid rgba(158,195,103,0.3)",
                }}
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name <span className="text-[#e87851]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#2c2c2e] border border-[#3c3c3e] text-white placeholder-gray-500 focus:outline-none focus:border-[#fac355] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-[#e87851]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#2c2c2e] border border-[#3c3c3e] text-white placeholder-gray-500 focus:outline-none focus:border-[#fac355] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#2c2c2e] border border-[#3c3c3e] text-white focus:outline-none focus:border-[#fac355] transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="tickets">Tickets & Attendance</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="press">Press & Media</option>
                    <option value="artist">Artist / Speaker Submission</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-[#e87851]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#2c2c2e] border border-[#3c3c3e] text-white placeholder-gray-500 focus:outline-none focus:border-[#fac355] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center py-4">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="section-title">Frequently Asked</h2>
            <div className="space-y-4">
              {[
                {
                  q: "When and where is 404day 2026?",
                  a: "April 4th, 2026 at Centennial Olympic Park and venues throughout downtown Atlanta, Georgia.",
                },
                {
                  q: "Are tickets refundable?",
                  a: "All sales are final, but tickets are fully transferable. You can sell or give your ticket to anyone.",
                },
                {
                  q: "Is there an age requirement?",
                  a: "404day is an all-ages event during the day. The after-party is 21+ with valid ID.",
                },
                {
                  q: "How do I apply to speak or perform?",
                  a: "Use the contact form and select 'Artist / Speaker Submission'. Our programming team reviews all submissions.",
                },
                {
                  q: "How can I volunteer?",
                  a: "We love our volunteers! Select 'Volunteer' in the contact form and we'll share details about our program.",
                },
                {
                  q: "Is 404day accessible?",
                  a: "Yes. All venues are ADA accessible. Contact us for specific accommodation requests.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-xl bg-[#2c2c2e] border border-[#3c3c3e]"
                >
                  <h4 className="text-white font-semibold text-sm mb-2">{faq.q}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
