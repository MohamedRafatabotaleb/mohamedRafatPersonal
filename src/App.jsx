// src/App.jsx
import React from "react";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0f172a] font-sans text-white">
      {/* Profile Image */}
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/100" // Replace with the actual image URL
          alt="Profile"
          className="border-gray-200 h-24 w-24 rounded-full border-2"
        />
      </div>

      {/* Name and Description */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold">مهندس كهرباء فلسطيني من غزة</h1>
        <p className="text-sm mt-2">
          هوايتي المنتجات والتصاميم، خاصة <br />
          تصاميم السوشيال ميديا، أهلاً وسهلاً بك
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-4 flex gap-4">
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
          { text: "Contact me on Gmail", href: "mailto:example@gmail.com" },
          { text: "Instagram", href: "#" },
          { text: "WhatsApp", href: "#" },
          { text: "Facebook", href: "#" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mt-4 block w-full rounded-xl bg-[#1e293b] py-3 text-center text-white hover:bg-[#334155]"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
