"use client";

import { easeOut, motion } from "framer-motion";

export default function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const features = [
    {
      icon: "🚀",
      title: "ワンクリック更新",
      description:
        "お気に入りのアイコンをアップロードするだけ！全てのSNSアカウントに一瞬で反映されます。もうプラットフォームごとに設定する必要はありません。",
    },
    {
      icon: "✨",
      title: "美しい仕上がり",
      description:
        "AIが各SNSに最適な画質とサイズに自動調整。Twitter、Instagram、TikTokなど、どのプラットフォームでも完璧な見た目を実現します。",
    },
    {
      icon: "💫",
      title: "スケジュール投稿",
      description:
        "アイコンの変更も予約可能！イベントやキャンペーンに合わせて、決まった時間に自動でアイコンを切り替えられます。",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-white via-slate-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
        >
          icon-boxの特徴
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3, ease: easeOut },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-10 rounded-3xl text-center shadow-lg border border-gray-200 cursor-pointer"
            >
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-7">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
