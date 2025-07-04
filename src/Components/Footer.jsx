import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" text-[#aaa6c3] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Simran Arora. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/simmiarora/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/CodeWithSimmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          
        </div>
      </div>
    </footer>
  );
};
