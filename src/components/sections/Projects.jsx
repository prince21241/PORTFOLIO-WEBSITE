export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white">
              🌍 Around The U.S.
            </h3>
            <p className="text-gray-300 mb-4">
              This project showcases different parts of the U.S. and their
              tourist attractions through a responsive website designed for
              mobile, tablet, and desktop. While it came with challenges, the
              process was enjoyable and helped me grow my skills in creating
              flexible, multi-device web experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "BEM Methodology",
                "Responsive Design",
                "DOM Manipulation",
                "Form Validation",
                "CSS Grid",
                "Flexbox",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://prince21241.github.io/se_project_aroundtheus/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➡️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
