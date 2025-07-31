export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-blue-900 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">icon-box</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <button className="hover:text-yellow-300 transition-colors duration-300">
              ホーム
            </button>
          </li>
          <li>
            <button className="hover:text-yellow-300 transition-colors duration-300">
              機能
            </button>
          </li>
          <li>
            <button className="hover:text-yellow-300 transition-colors duration-300">
              料金
            </button>
          </li>
          <li>
            <button className="hover:text-yellow-300 transition-colors duration-300">
              お問い合わせ
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
