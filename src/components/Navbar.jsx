import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({

}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80  backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <h1 className="font-bold text-xl">
          Sanchit Shahare
        </h1>

        <div className="flex items-center gap-6">

          <a
            href="#about"
            className="hover:text-blue-500"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-500"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-blue-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-500"
          >
            Contact
          </a>



        </div>
      </div>
    </nav>
  );
}