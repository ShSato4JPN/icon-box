import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full top-0 z-50 bg-blue-900/95 backdrop-blur-sm text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link href="/">
          <div className="text-xl sm:text-2xl font-bold bg-white bg-clip-text text-transparent">
            icon-box
          </div>
        </Link>
      </nav>
    </header>
  );
}
