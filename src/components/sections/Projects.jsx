import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
            {/* Project Cards */}
            {[...projectData].map((project, index) => (
              <div
                key={index}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300 bg-white/5"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {project.icon} {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm transition
                      ${
                        project.color === "blue"
                          ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                          : project.color === "green"
                          ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                          : project.color === "purple"
                          ? "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                          : "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, key) => (
                    <a
                      key={key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      {link.label} ➡️
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Sample Project Data (for simplicity in mapping)
const projectData = [
  {
    title: "Around The U.S.",
    icon: "🌍",
    description:
      "A responsive website that showcases U.S. tourist attractions across devices. Built for mobile, tablet, and desktop platforms.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "BEM Methodology",
      "Responsive Design",
      "DOM Manipulation",
      "Form Validation",
      "CSS Grid",
      "Flexbox",
    ],
    color: "blue",
    links: [
      {
        label: "View Project",
        url: "https://prince21241.github.io/se_project_aroundtheus/",
      },
    ],
  },
  {
    title: "What to Wear",
    icon: "🧥",
    description:
      "A full-stack weather-based clothing suggestion app. Users can manage clothing items based on weather conditions.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST API",
      "Responsive Design",
      "Mongoose",
      "Context API",
    ],
    color: "purple",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/prince21241/se_project_react",
      },
      {
        label: "Backend",
        url: "https://github.com/prince21241/se_project_express",
      },
    ],
  },
  {
    title: "Movie Favorites App",
    icon: "🎬",
    description:
      "A responsive app using the IMDb API where users can browse and save their favorite movies to a custom list.",
    tech: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "API Integration",
      "Responsive Design",
      "Hooks",
    ],
    color: "yellow",
    links: [
      {
        label: "View Project",
        url: "https://github.com/prince21241/Final-Project",
      },
    ],
  },
  {
    title: "Coffee Shop",
    icon: "☕",
    description:
      "A stylish landing page for a coffee shop built with semantic HTML and modern CSS techniques.",
    tech: [
      "HTML5",
      "CSS3",
      "BEM",
      "Flexbox",
      "Absolute Positioning",
      "Responsive Design",
      "CSS Animations",
      "Forms",
      "Iframes",
    ],
    color: "green",
    links: [
      {
        label: "View Project",
        url: "https://github.com/prince21241/se_project_coffeeshop",
      },
    ],
  },
  {
    title: "gym 30 day challenge",
    icon: "🏋🏽🔥💪🏼🎧",
    description:
      "A modern, responsive fitness app built with React + Vite for exploring exercises, tracking workouts, and monitoring progress.",
    tech: [
      "React 18",
      "Vite",
      "React Router",
      "JavaScript (ES)",
      "CSS3 / SCSS",
      "Lucide React (icons)",
      "Fetch API / REST API Integration",
      "ExerciseDB API (via RapidAPI)",
      "Local Storage",
      "ESLint",
      "Prettier",
      "Husky (Git hooks)",
    ],
    color: "green",
    links: [
      {
        label: "View Project",
        url: "https://github.com/prince21241/gym-app?tab=readme-ov-file",
      },
      {
        label: "Live Demo",
        url: "https://gym30day.netlify.app/",
      },
    ],
  },
];
