import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-white text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          Created with <span className="text-red-500">❤</span> by{" "}
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            Harsh Bamaniya
          </span>{" "}
          © 2025
        </p>

        <div className="text-2xl font-extrabold tracking-tight">
          Food
          <span className="text-amber-600">Hub</span>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/harsh2aug"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-bamaniya-b2b81b218/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
