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

        {/* Project 1: Around The U.S. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white">
              🌍 Around The U.S.
            </h3>
            <p className="text-gray-300 mb-4">
              A responsive website that showcases U.S. tourist attractions
              across devices. Built for mobile, tablet, and desktop platforms.
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
            <a
              href="https://prince21241.github.io/se_project_aroundtheus/"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project ➡️
            </a>
          </div>

          {/* Project 2: What to Wear */}
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white">
              🧥 What to Wear
            </h3>
            <p className="text-gray-300 mb-4">
              A full-stack weather-based clothing suggestion app. Users can
              view, add, and manage clothing items based on weather conditions.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT Auth",
                "REST API",
                "Responsive Design",
                "Mongoose",
                "Context API",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/prince21241/se_project_react"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Frontend Github ➡️
            </a>
            <a
              href="https://github.com/prince21241/se_project_express"
              className="text-blue-400 hover:text-blue-300 transition-colors ml-4 inline-block"
            >
              View Backend Github ➡️
            </a>
          </div>
        </div>

        {/* Project 3: Movie Favorites App */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white">
              🎬 Movie Favorites App
            </h3>
            <p className="text-gray-300 mb-4">
              A responsive app using the IMDb API where users can browse and
              save their favorite movies to a custom list.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "API Integration",
                "Responsive Design",
                "Hooks",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/prince21241/Final-Project"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project GitHub ➡️
            </a>
          </div>

          {/* Project 4: Coffee Shop */}
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-white">
              ☕ Coffee Shop
            </h3>
            <p className="text-gray-300 mb-4">
              A stylish landing page designed for a coffee shop. Built using
              semantic HTML and modern CSS layout techniques.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "BEM",
                "Flexbox",
                "Absolute Positioning",
                "Responsive Design",
                "CSS Animations",
                "Forms",
                "Iframes",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/prince21241/se_project_coffeeshop"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project Github ➡️
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
