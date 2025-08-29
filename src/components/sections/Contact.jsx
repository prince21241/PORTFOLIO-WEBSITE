import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = "service_oe6w2cy";
  const TEMPLATE_ID = "template_dk7beag";
  const PUBLIC_KEY = "oPfX6CfxMgcq9lwkX";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0b0f14] text-white"
    >
      {/* Ambient radial glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_80%,rgba(6,182,212,0.10),transparent_70%)]" />
      </div>
      
      {/* Floating blobs */}
      <div className="pointer-events-none absolute top-[25%] left-[25%] w-32 h-32 rounded-full blur-2xl bg-blue-500/10 animate-[float_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[25%] right-[25%] w-48 h-48 rounded-full blur-2xl bg-cyan-500/10 animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/2 right-[33%] w-24 h-24 rounded-full blur-2xl bg-purple-500/10 animate-[float_9s_ease-in-out_infinite] [animation-delay:1s]" />
      <div className="pointer-events-none absolute bottom-[33%] left-[33%] w-40 h-40 rounded-full blur-2xl bg-green-500/10 animate-[float_8s_ease-in-out_infinite] [animation-delay:0.5s]" />

      <RevealOnScroll direction="scale" delay={0.2}>
        <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          {/* Header */}
          <RevealOnScroll direction="down" delay={0.4}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>
          </RevealOnScroll>

          {/* Form Container */}
          <RevealOnScroll direction="up" delay={0.6}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl animate-glow">
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                {/* Name Input */}
                <RevealOnScroll direction="left" delay={0.8}>
                  <div className="group">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        className="w-full bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:shadow-lg focus:shadow-blue-500/20 peer hover:animate-pulse-gentle"
                        placeholder="Your Name"
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Email Input */}
                <RevealOnScroll direction="right" delay={1.0}>
                  <div className="group">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        className="w-full bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:shadow-lg focus:shadow-blue-500/20 peer hover:animate-pulse-gentle"
                        placeholder="your.email@example.com"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Message Input */}
                <RevealOnScroll direction="left" delay={1.2}>
                  <div className="group">
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        className="w-full bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:shadow-lg focus:shadow-blue-500/20 resize-none peer hover:animate-pulse-gentle"
                        placeholder="Tell me about your project or just say hello..."
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                  </div>
                </RevealOnScroll>

              {/* Submit Button */}
              <RevealOnScroll direction="up" delay={1.4}>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 sm:py-5 px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group animate-pulse-gentle"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </RevealOnScroll>

              {/* Status Messages */}
              {submitStatus && (
                <div className={`text-center p-4 rounded-xl transition-all duration-300 animate-bounce-in ${
                  submitStatus === "success" 
                    ? "bg-green-500/20 border border-green-500/30 text-green-300" 
                    : "bg-red-500/20 border border-red-500/30 text-red-300"
                }`}>
                  {submitStatus === "success" ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Something went wrong. Please try again.
                    </div>
                  )}
                </div>
              )}
              </form>
            </div>
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll direction="up" delay={1.6}>
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                Or reach out directly
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <RevealOnScroll direction="left" delay={1.8}>
                  <a
                    href="mailto:princeraval36955@gmail.com"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group hover:animate-pulse-gentle"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    princeraval36955@gmail.com
                  </a>
                </RevealOnScroll>
                <RevealOnScroll direction="right" delay={2.0}>
                  <a
                    href="https://www.linkedin.com/in/princeravaltech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group hover:animate-pulse-gentle"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      {/* Reduced motion fix */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-[float_7s_ease-in-out_infinite],
          .animate-[float_8s_ease-in-out_infinite],
          .animate-[float_9s_ease-in-out_infinite] { animation: none !important; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
        }
      `}</style>
    </section>
  );
};
