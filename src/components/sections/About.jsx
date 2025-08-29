import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "C/C++",
    "SQL",
    "HTML5",
    "CSS3",
  ];

  const frontendSkills = [
    "React",
    "React Router",
    "Vite",
    "TailwindCSS",
    "Bootstrap",
    "Storybook",
    "Responsive Design",
    "BEM Methodology",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "KeystoneJS",
    "Spring Boot (basic)",
    "REST APIs",
    "GraphQL",
  ];

  const databases = ["MySQL", "PostgreSQL", "MongoDB"];

  const cloudDevOps = [
    "Google Cloud",
    "AWS (EC2, S3)",
    "Docker",
    "Nginx",
    "PM2",
    "Jenkins",
  ];

  const testingTools = [
    "Jest",
    "Postman",
    "JUnit",
    "Selenium (basic)",
    "ESLint",
    "Prettier",
    "Git",
    "GitHub",
    "GitLab",
    "Agile (Scrum)",
  ];

  const PillList = ({ items, colorClasses }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((tech, i) => (
        <span
          key={i}
          className={`${colorClasses.bg} ${colorClasses.text} py-1 px-3 rounded-full text-sm transition ${colorClasses.hoverBg} ${colorClasses.shadow}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="about"
      className="relative isolate min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0b0f14] text-white"
    >
      {/* Ambient radial glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_30%_20%,rgba(168,85,247,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_80%,rgba(59,130,246,0.10),transparent_70%)]" />
      </div>

      {/* Floating blobs */}
      <div className="pointer-events-none absolute top-[18%] right-[16%] w-36 h-36 rounded-full blur-2xl bg-purple-500/10 animate-[float_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[25%] left-[18%] w-52 h-52 rounded-full blur-2xl bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/2 left-[25%] w-28 h-28 rounded-full blur-2xl bg-cyan-500/10 animate-[float_9s_ease-in-out_infinite] [animation-delay:1s]" />

      <RevealOnScroll direction="scale" delay={0.2}>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <RevealOnScroll direction="down" delay={0.4}>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center animate-gradient">
              About Me
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.6}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-all animate-glow">
              <p className="text-gray-300 mb-6 text-center">
                Passionate developer with experience in building scalable web
                applications and delivering innovative solutions that solve
                real-world problems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RevealOnScroll direction="left" delay={0.8}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Languages</h3>
                    <PillList
                      items={languages}
                      colorClasses={{
                        bg: "bg-purple-500/10",
                        text: "text-purple-400",
                        hoverBg: "hover:bg-purple-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={1.0}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <PillList
                      items={frontendSkills}
                      colorClasses={{
                        bg: "bg-blue-500/10",
                        text: "text-blue-400",
                        hoverBg: "hover:bg-blue-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="left" delay={1.2}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Backend & APIs</h3>
                    <PillList
                      items={backendSkills}
                      colorClasses={{
                        bg: "bg-emerald-500/10",
                        text: "text-emerald-400",
                        hoverBg: "hover:bg-emerald-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={1.4}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Databases</h3>
                    <PillList
                      items={databases}
                      colorClasses={{
                        bg: "bg-amber-500/10",
                        text: "text-amber-400",
                        hoverBg: "hover:bg-amber-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(245,158,11,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="left" delay={1.6}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                    <PillList
                      items={cloudDevOps}
                      colorClasses={{
                        bg: "bg-cyan-500/10",
                        text: "text-cyan-400",
                        hoverBg: "hover:bg-cyan-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={1.8}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all hover:animate-pulse-gentle">
                    <h3 className="text-xl font-bold mb-4">Testing & Tools</h3>
                    <PillList
                      items={testingTools}
                      colorClasses={{
                        bg: "bg-rose-500/10",
                        text: "text-rose-400",
                        hoverBg: "hover:bg-rose-500/20",
                        shadow: "hover:shadow-[0_2px_8px_rgba(244,63,94,0.2)]",
                      }}
                    />
                  </div>
                </RevealOnScroll>
              </div>
          </div>

          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={2.0}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 mt-8 hover:-translate-y-1 transition-all animate-glow">
              <h3 className="text-xl font-bold mb-4 text-center">🏫 Education</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-center">
                  <span className="font-semibold text-blue-400">Associate in Science</span> — Sandhills Community College
                </p>
                <p className="text-gray-300 text-center">
                  <span className="font-semibold text-cyan-400">Software Engineering Program</span> — TripleTen
                </p>
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
