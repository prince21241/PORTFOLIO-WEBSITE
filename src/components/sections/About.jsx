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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with experience in building scalable web
              applications and delivering innovative solutions that solve
              real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border mt-8 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <p className="text-gray-300 mb-2">
              Associate in Science (in progress) — Sandhills Community College
            </p>
            <p className="text-gray-300 mb-2">
              TripleTen — Software Engineering Program (Completed)
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
