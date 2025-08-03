import dayjs from "dayjs";

export default function Footer() {
  const currentYear = dayjs().year();

  const footerLinks = [
    { label: "プライバシーポリシー", href: "#privacy" },
    { label: "利用規約", href: "#terms" },
    { label: "バグ報告・要望", href: "#feedback" },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} icon-box - 個人開発で頑張ってます 🚀</p>
        </div>
      </div>
    </footer>
  );
}
