import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SafeSpace AI",
    description:
      "Anonymous AI-powered platform to report harassment and discrimination, supporting secure evidence upload and AI-generated incident reports.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Flask",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/shivanshanand/GNEC-Hackathon",
  },
  {
    title: "FuelFundr (Working)",
    description:
      "MERN-based crowdfunding app with campaign tracking, user updates, and backend-first architecture for seamless donations.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
    github:
      "https://github.com/kalviumcommunity/S66_Shivansh_Anand_Capstone_FuelFundr",
  },
  {
    title: "Movie Recommender System",
    description:
      "An AI-powered movie recommender web app using content-based filtering. Built with Python and Streamlit, it suggests similar movies based on user input. Deployed on Heroku with Git LFS support for handling large files.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Pickle"],
    github: "https://github.com/shivanshanand/Movie-recommender-system",
    demo: "https://ks5iza5dqj23mt954kchqc.streamlit.app/",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-base-100 text-base-content px-6 md:px-16 pt-20 pb-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center drop-shadow-sm">
        Projects
      </h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-step w-full max-w-5xl min-h-[320px] mx-auto bg-base-200/50 backdrop-blur-md border border-primary/10 rounded-2xl p-8 md:p-10 space-y-6 shadow-md"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-content">
              {project.title}
            </h3>

            <p className="text-base-content/70 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>

            <div>
              <h4 className="text-primary font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub and live demo button*/}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-black font-semibold px-4 py-2 rounded hover:bg-primary/90 transition"
                  >
                    View on GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
