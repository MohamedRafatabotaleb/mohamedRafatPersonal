// src/App.jsx
import React from "react";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0f172a] font-sans text-white">
      {/* Profile Image */}
      <div className="mt-10">
        <img
          src="/src/icon.png" // Replace with the actual image URL
          alt="Profile"
          className="h-52 w-52 rounded-full border-2"
        />
      </div>

      {/* Name and Description */}
      <div className="mt-4 text-center">
        <h1 className="text-[30px] font-bold">محمد رأفت محمد</h1>
        <p className="mt-2 text-[25px]">مبرمج ومطور تطبيقات ومواقع</p>
        <p className="mt-2 text-[20px]">002 - 01123640791</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="text-xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#" className="text-xl">
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      {/* Links */}
      <div className="mt-8 w-full max-w-md px-4">
        {[
          {
            text: "Contact me on Gmail",
            href: "mailto:mohamedrafat.abotaleb@gmail.com",
          },
          {
            text: "linkedin",
            href: "https://linkedin.com/in/mohamedraafatabotaleb",
          },
          { text: "WhatsApp", href: "https://wa.me/01123640791" },
          {
            text: "Youtube",
            href: "https://www.youtube.com/c/MohamedRafatAbotaleb/playlist",
          },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mt-4 block w-full rounded-xl bg-[#1e293b] py-3 text-center text-white hover:bg-[#334155]"
            target="_blank"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
