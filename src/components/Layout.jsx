'use client';

import { useState } from "react";
import Sidebar from "./Sidebar";
import { useTheme } from "@/app/Providers/ThemeContext";
import Head from "next/head";

export default function Layout({ children}) {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, darkMode } = useTheme();

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={`flex relative min-h-screen ${theme.bg_color} ${theme.text_color}`}>
                <Sidebar
                    isOpen={isOpen}
                    toggleSidebar={toggleSidebar}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    darkMode={darkMode}
                    setIsOpen={setIsOpen}
                />

                {/* ✅ Title Header */}
                <main className={`transition-transform duration-300 ease-in-out ${!isOpen ? 'ml-64' : 'ml-0'} w-full`}>
                    {children}
                </main>
            </div>
        </>
    );
}
