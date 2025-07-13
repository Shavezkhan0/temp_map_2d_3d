import { IoMenu } from "react-icons/io5";
import ThemButton from "./ThemButton";
import { darkTheme } from "@/utils/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoEarthSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar, theme, toggleTheme }) {

  const usePath = usePathname();


  return (
    <>
      {/* Menu Icon - always visible */}
      <div className="fixed top-4 left-4  z-[1000]">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 transition duration-200"
        >
          <IoMenu size={24} className="text-blue-700" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full text-black w-64 ${theme.sidebar_bg_color} ${theme.text_color} 
          transform ${!isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-[1001]`}
      >

        {/* Header */}
        <div className={`w-full h-16 px-6 flex items-center justify-between shadow-md bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700`}>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 transition duration-200"
            >
              <IoMenu size={24} className="text-blue-700" />
            </button>
            <h1 className="text-xl text-white font-extrabold tracking-wide">WESEE</h1>
          </div>
        </div>


        {/* Menu */}
        <ul className="p-4 space-y-4">
          <li>
            <Link
              href="/"
              className={clsx(
                "block px-4 py-2 rounded-lg text-lg font-semibold font-mono flex items-center gap-2 transition-colors duration-200",
                usePath === "/" ? theme.select_bg_color : "",
                usePath === "/" ? theme.select_text_color : "",
                "hover:bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700",
                theme.text_color
              )}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/Map_2d"
              className={clsx(
                "block px-4 py-2 rounded-lg text-lg font-semibold font-mono flex items-center gap-2 transition-colors duration-200",
                usePath === "/Map_2d" ? theme.select_bg_color : "",
                usePath === "/Map_2d" ? theme.select_text_color : "",
                "hover:bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700",
                theme.text_color
              )}
              onClick={() => setIsOpen(false)}
            >
             <FaMapMarkedAlt />  2D Map
            </Link>
          </li>

          <li>
            <Link
              href="/Map_3d"
              className={clsx(
                "block px-4 py-2 rounded-lg text-lg font-semibold font-mono flex items-center gap-2 transition-colors duration-200",
                usePath === "/Map_3d" ? theme.select_bg_color : "",
                usePath === "/Map_3d" ? theme.select_text_color : "",
                "hover:bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700",
                theme.text_color
              )}
              onClick={() => setIsOpen(false)}
            >
              <IoEarthSharp /> 3D Map
            </Link>
          </li>

        </ul>


        {/* Theme Toggle Button */}
        <div className="mt-auto px-4 pb-4">
          <ThemButton toggleTheme={toggleTheme} isDark={theme === darkTheme} />
        </div>

      </div>
    </>
  );
}