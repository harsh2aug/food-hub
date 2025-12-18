import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 shadow-sm py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-700">
          Created with 💗 by{" "}
          <span className="font-semibold text-slate-800">Harsh Bamaniya</span> ©
          2025
        </p>

        <div className="text-xl font-extrabold text-slate-800 tracking-tight">
          Food<span className="text-amber-600">Hub</span>
        </div>

        <div className="flex gap-6 text-amber-600 text-lg">
          <a
            href="https://github.com/harsh2aug"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-amber-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-bamaniya-b2b81b218/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-amber-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-amber-700 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
