export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-center py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-center space-x-8 mb-8 flex-wrap">
          <a
            href="#privacy"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
          >
            プライバシーポリシー
          </a>
          <a
            href="#terms"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
          >
            利用規約
          </a>
          <a
            href="#support"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
          >
            サポート
          </a>
          <a
            href="#blog"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
          >
            ブログ
          </a>
        </div>
        <p>&copy; 2025 icon-box. All rights reserved.</p>
      </div>
    </footer>
  );
}
