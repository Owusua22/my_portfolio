"use client";

import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Owusua22",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarah-nkansah",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sarahnkansah",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "mailto:sarah@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <div className="divider mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sarah Nkansah. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center 
                         text-muted-foreground hover:text-foreground hover:bg-muted
                         transition-all duration-200"
              aria-label={link.name}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}