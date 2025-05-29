import React, { useState } from "react";

const HoverRevealComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Основной элемент */}
      <div
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-600 whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Наведи на меня
      </div>

      {/* Выезжающий элемент справа */}
      <div
        className={`
          absolute left-full top-0 bg-green-500 z-10 text-white px-4 py-2 rounded-lg ml-2
          transition-all duration-300
          ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}
          whitespace-nowrap
          z-10
        `}
        style={{ minWidth: "max-content" }}
      >
        Я появился справа с анимацией!
      </div>
    </div>
  );
};

export default HoverRevealComponent;