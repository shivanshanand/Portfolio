import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content py-10 px-6 md:px-16 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-primary">Shivansh Anand</span>.
          All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/shivanshanand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivansh-anand-%F0%9F%93%88-aa48851b8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="G-mail: shivanshanand962@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
