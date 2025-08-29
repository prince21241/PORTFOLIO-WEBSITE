
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden bg-[#0b0f14] text-white"
    >
      {/* Ambient radial glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_30%,rgba(34,197,94,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_70%,rgba(59,130,246,0.10),transparent_70%)]" />
      </div>

      {/* Floating blobs */}
      <div className="pointer-events-none absolute top-[16%] left-[20%] w-44 h-44 rounded-full blur-2xl bg-green-500/10 animate-[float_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[18%] right-[16%] w-56 h-56 rounded-full blur-2xl bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-1/2 right-[32%] w-32 h-32 rounded-full blur-2xl bg-cyan-500/10 animate-[float_9s_ease-in-out_infinite] [animation-delay:0.5s]" />

      <RevealOnScroll direction="scale" delay={0.2}>
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <RevealOnScroll direction="down" delay={0.4}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
            {/* Project Cards */}
            {[...projectData].map((project, index) => (
              <RevealOnScroll 
                key={index}
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.6 + (index * 0.2)}
              >
                <div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:animate-glow hover:shadow-xl"
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
                        className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:animate-pulse-gentle
                        ${
                          project.color === "blue"
                            ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                            : project.color === "green"
                            ? "bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.3)]"
                            : project.color === "purple"
                            ? "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.3)]"
                            : "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(234,179,8,0.3)]"
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
                        className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-all duration-300 hover:scale-105 hover:animate-pulse-gentle"
                      >
                        {link.label}
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
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
  {
    title: "DevLink",
    icon: "🔗",
    description:
      "A full-stack social networking platform for developers. Features include JWT authentication, user profiles, posts, and connections. Built with a clean React + Node.js architecture and deployed on Vercel + Render.",
    tech: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "TailwindCSS",
      "Cloudinary (Image Uploads)",
      "Vercel (Frontend)",
      "Render (Backend)"
    ],
    color: "blue",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/prince21241/devlink-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/prince21241/devlink-backend",
      },
      {
        label: "Live Demo",
        url: "https://devlink-frontend-1.onrender.com/",
      },
    ],
  },
  
];
