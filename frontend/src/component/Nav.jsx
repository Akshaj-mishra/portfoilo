import React from "react";
import { assets } from "../assets/assets";
import {House,GraduationCap,FileUser,Mail,Download,} from "lucide-react";

const SidebarButton = ({ label, icon }) => (
  <button className="w-48 py-2 px-4 flex items-center gap-4 rounded-lg bg-gray-800 hover:bg-blue-500 transition duration-300 ">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Nav = () => {
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
        <SidebarButton label="Home" icon={<House size={20} />} />
        <SidebarButton label="Education" icon={<GraduationCap size={20} />} />
        <SidebarButton label="Resume" icon={<FileUser size={20} />} />
        <SidebarButton label="Contact Us" icon={<Mail size={20} />} />
        <SidebarButton label="Download CV" icon={<Download size={20} />} />
      </nav>
    </div>
  );
};

export default Nav;
