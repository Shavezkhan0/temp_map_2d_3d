import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemButton({ toggleTheme, isDark }) {
  const [sliding, setSliding] = useState(isDark);

  useEffect(() => {
    setSliding(isDark);
  }, [isDark]);

  const handleClick = () => {
    toggleTheme(); // parent updates `isDark`
  };

  return (
    <button
      onClick={handleClick}
      className="w-40 h-12  bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700 rounded-full flex items-center justify-between transition duration-300 relative overflow-hidden shadow-lg"
    >
      {/* Text: left for night, right for day */}
      <span className={`text-white text-sm font-medium px-4 z-10 w-full text-center pointer-events-none`}>
        {isDark ? "Day Mode" : "Night Mode"}
      </span>

      {/* Sliding Bubble */}
      <div
        className={`absolute top-1 bottom-1 ${
          isDark ? "left-1" : "right-1"
        } bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20`}
      >
        {isDark ? (
          <BsSunFill className="text-yellow-500" />
        ) : (
          <BsMoonStarsFill className="text-blue-900" />
        )}
      </div>
    </button>
  );
}
