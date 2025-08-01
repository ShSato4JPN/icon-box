"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.3,
      },
    },
  };

  const features = [
    {
      icon: "🚀",
      title: "ワンクリック更新",
      description:
        "お気に入りのアイコンをアップロードするだけ！全てのSNSアカウントに一瞬で反映されます。もうプラットフォームごとに設定する必要はありません。",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: "✨",
      title: "美しい仕上がり",
      description:
        "AIが各SNSに最適な画質とサイズに自動調整。Twitter、Instagram、TikTokなど、どのプラットフォームでも完璧な見た目を実現します。",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "💫",
      title: "スケジュール投稿",
      description:
        "アイコンの変更も予約可能！イベントやキャンペーンに合わせて、決まった時間に自動でアイコンを切り替えられます。",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">
            icon-boxの特徴
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            革新的な機能で、SNSアイコン管理を次のレベルへ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl text-center shadow-lg hover:shadow-2xl border border-gray-200/50 cursor-pointer transition-all duration-300"
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <motion.div
                variants={iconVariants}
                className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                {feature.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors duration-300"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>

              {/* Decorative element */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50">
            すべての機能を見る
          </button>
        </motion.div>
      </div>
    </section>
  );
}
