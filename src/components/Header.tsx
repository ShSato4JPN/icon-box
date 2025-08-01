"use client";

import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "ホーム", href: "#home" },
    { label: "機能", href: "#features" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-blue-900/95 backdrop-blur-sm text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
          icon-box
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm xl:text-base hover:text-yellow-300 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 rounded-lg"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col space-y-1 w-6 h-6 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 rounded p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
        >
          <motion.span
            className="w-4 h-0.5 bg-white block transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 4 : 0,
            }}
          />
          <motion.span
            className="w-4 h-0.5 bg-white block transition-all duration-300"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="w-4 h-0.5 bg-white block transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -4 : 0,
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-blue-800/95 backdrop-blur-sm border-t border-blue-700"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-base hover:bg-blue-700/50 hover:text-yellow-300 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
