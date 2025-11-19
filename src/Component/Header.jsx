import React from "react";

export function Header() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center bg-[#8b4513] px-12 py-4 shadow-lg z-50">
      <h1 className="text-[#f4e4bc] font-bold text-2xl cursor-pointer hover:text-[#d4af37] transition">
        ☕ Brew & Bean
      </h1>

      <ul className="flex gap-10 text-[#f4e4bc] font-medium">
        <li>
          <a href="#Home" className="hover:text-[#d4af37] transition">
            Home
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:text-[#d4af37] transition">
            Menu
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#d4af37] transition">
            About
          </a>
        </li>
        <li>
          <a href="#loc" className="hover:text-[#d4af37] transition">
            Location
          </a>
        </li>
      </ul>
    </div>
  );
}
