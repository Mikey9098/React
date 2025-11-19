import React from "react";

export function Section_1() {
  return (
    <div
      className="h-screen flex justify-center items-center text-center text-[#f4e4bc] bg-cover bg-center pt-20"
      style={{
        backgroundImage: `linear-gradient(
            rgba(139, 69, 19, 0.7),
            rgba(101, 67, 33, 0.7)
          ),
          url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=2000&q=60')`,
      }}
    >
      <div className="px-6">
        <h1 className="text-5xl md:text-6xl mb-4 font-bold">
          Fresh Coffee, Every Morning
        </h1>

        <p className="max-w-xl mx-auto text-lg mb-8">
          Handcrafted beverages made with love and the finest beans from around
          the world.
        </p>

        <button className="bg-[#d4af37] px-6 py-3 rounded-md text-black font-semibold text-lg hover:bg-yellow-500 hover:scale-105 transition">
          View Our Menu
        </button>
      </div>
    </div>
  );
}
