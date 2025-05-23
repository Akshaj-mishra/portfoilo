import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { House, GraduationCap, FileUser, Mail, Download } from "lucide-react";

// Make sure this is defined before the Nav component
const SidebarButton = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-48 py-2 px-4 flex items-center gap-4 rounded-lg transition duration-300 
      ${isActive ? "bg-blue-500 shadow-lg" : "bg-gray-800 hover:bg-blue-500"}
    `}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const sections = [
  { id: "hero", label: "Home", icon: <House size={20} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
  { id: "resume", label: "Resume", icon: <FileUser size={20} /> },
  { id: "contact", label: "Contact Us", icon: <Mail size={20} /> },
  { id: "download", label: "Download CV", icon: <Download size={20} /> },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed h-screen w-64 bg-gray-900 text-white flex flex-col items-center py-6 shadow-lg z-50">
      <img
        src={assets.personal_assets.mypic}
        alt="Profile"
        className="w-38 h-38 rounded-full border-4 border-white mb-4 object-cover"
      />
      <div className="mb-6">
        <p className="text-lg font-semibold">{assets.personal_assets.myname}</p>
      </div>
      <nav className="flex flex-col gap-4 w-full items-center">
        {sections.map(({ id, label, icon }) => (
          <SidebarButton
            key={id}
            label={label}
            icon={icon}
            isActive={activeSection === id}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </nav>
    </div>
  );
};

export default Nav;
