import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f14] text-white"
    >
      {/* Ambient radial glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(0,140,255,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_70%,rgba(0,255,200,0.10),transparent_70%)]" />
      </div>

      {/* Floating blobs */}
      <div className="pointer-events-none absolute top-[22%] left-[16%] w-40 h-40 rounded-full blur-2xl bg-blue-500/10 animate-[float_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[30%] right-[20%] w-60 h-60 rounded-full blur-2xl bg-cyan-400/10 animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/2 right-[25%] w-32 h-32 rounded-full blur-2xl bg-purple-400/10 animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[22%] left-[32%] w-48 h-48 rounded-full blur-2xl bg-green-400/10 animate-[float_8s_ease-in-out_infinite] [animation-delay:1.2s]" />

      {/* Main Content */}
      <RevealOnScroll direction="scale" delay={0.2}>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <RevealOnScroll direction="down" delay={0.4}>
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Hi, I&apos;m Prince Raval
              </span>
            </h1>
          </RevealOnScroll>

          {/* Subtitle */}
          <RevealOnScroll direction="up" delay={0.6}>
            <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-white/70">
              I&apos;m a Full-stack developer who loves to make clean web applications.
              My goal is to build solutions that offer excellent performance and
              wonderful user experience.
            </p>
          </RevealOnScroll>

          {/* Buttons */}
          <RevealOnScroll direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Projects Button */}
              <RevealOnScroll direction="left" delay={1.0}>
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3 text-lg font-semibold text-white 
                             bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 
                             transition-transform duration-200 hover:scale-[1.04] focus:scale-[1.02]
                             shadow-lg shadow-blue-700/25 hover:shadow-blue-500/35
                             focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>View Projects</span>
                  <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </RevealOnScroll>

              {/* Contact Button */}
              <RevealOnScroll direction="right" delay={1.2}>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3 text-lg font-semibold 
                             text-cyan-200 border border-cyan-400/40 bg-white/5 backdrop-blur 
                             hover:text-white hover:bg-cyan-400/10 hover:border-cyan-300/60
                             transition-transform duration-200 hover:scale-[1.04] focus:scale-[1.02]
                             shadow-lg shadow-cyan-900/10 hover:shadow-cyan-800/20
                             focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Me</span>
                </a>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          {/* Scroll Indicator */}
          <RevealOnScroll direction="up" delay={1.4}>
            <div className="mt-16 flex flex-col items-center">
              <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30">
                <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/60" />
              </div>
              <p className="mt-2 text-sm text-white/50">Scroll Down</p>
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
