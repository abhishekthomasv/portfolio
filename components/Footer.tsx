"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import IconButton from "./ui/IconButton";

const Footer = () => {
  return (
    <footer className="pt-48 relative footer  bg-base-300 text-base-content  flex justify-around w-full">
      <div className="pb-10 absolute bottom-0 left-0 right-0   bg-grid-white/[0.01]   flex items-center justify-center">
        <nav>
          <div className="grid grid-flow-col gap-4 z-50 ">
            <a
              href="https://www.linkedin.com/in/abhishekthomasv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton text="Linkedin">
                <FaLinkedin size={40} color="#0077b5" />
              </IconButton>
            </a>
            <a
              href="https://www.github.com/abhishekthomasv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton text="Github">
                <FaGithub size={40} />
              </IconButton>
            </a>
            <a
              href="https://www.x.com/abhishekthomasv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton text="Twitter">
                <FaXTwitter size={40} />
              </IconButton>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
