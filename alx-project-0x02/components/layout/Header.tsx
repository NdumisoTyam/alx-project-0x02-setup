const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-center">
    <h1 className="text-2xl font-bold">Welcome to ALX Project 2</h1>
  </header>
);

export default Header;

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
