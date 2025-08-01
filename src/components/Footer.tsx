import dayjs from "dayjs";

export default function Footer() {
  const currentYear = dayjs().year();

  const footerLinks = [
    { label: "プライバシーポリシー", href: "#privacy" },
    { label: "利用規約", href: "#terms" },
    { label: "サポート", href: "#support" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">icon-box</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            SNSアイコンの一括管理で、あなたのデジタルプレゼンスを次のレベルへ。
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} icon-box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
