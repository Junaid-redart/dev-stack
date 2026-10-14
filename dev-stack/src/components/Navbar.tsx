import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-bold px-2 py-1 rounded-md">
            DS
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Dev <span className="text-pink-600">Stack</span>
          </h1>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-600 hover:text-pink-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-700">
            Sign In
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-5 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-pink-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;