"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
          >
            <span className="block sm:inline">SNSアイコンを</span>
            <span className="block sm:inline bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              もっと楽しく✨
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            すべてのSNSアイコンを一括管理！面倒な作業はもうおしまい。
            <br className="hidden sm:block" />
            お気に入りの画像一つで、全プラットフォームを一瞬で統一できます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-yellow-300 text-gray-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-yellow-200 hover:-translate-y-1 hover:shadow-2xl shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
            >
              今すぐ無料で試す🎉
            </button>

            <button
              onClick={() => scrollToSection("features")}
              className="w-full sm:w-auto border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              機能を見る
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 sm:mt-16 lg:mt-20"
          >
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              対応プラットフォーム
            </p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
              {["Twitter", "Instagram", "Facebook", "TikTok", "LinkedIn"].map(
                (platform, index) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border border-white/20"
                  >
                    {platform}
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
