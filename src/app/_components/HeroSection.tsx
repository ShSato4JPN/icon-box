export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white pt-32 pb-24 text-center"
    >
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          SNSアイコンをもっと楽しく✨
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          すべてのSNSアイコンを一括管理！面倒な作業はもうおしまい。お気に入りの画像一つで、全プラットフォームを一瞬で統一できます。
        </p>
        <button className="inline-block bg-yellow-300 text-gray-800 px-9 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-200 hover:-translate-y-1 hover:shadow-xl shadow-lg">
          今すぐ無料で試す🎉
        </button>
      </div>
    </section>
  );
}
