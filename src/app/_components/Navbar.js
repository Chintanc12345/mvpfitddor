"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/intent", label: "Intent" },
    { href: "/class", label: "Class" },
    { href: "/purchase", label: "Purchase" },
  ];

  return (
    <nav className="bg-[#093630] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Garage Door"
          width={90}
          height={70}
          className="rounded-md"
          style={{ filter: "drop-shadow(2px 4px 6px black)" }}
        />

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors ${
                router.pathname === item.href ? "font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/cart"
          className="hidden md:flex gap-2 items-center hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors"
        >
          <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center">
            <FaShoppingCart className="fill-[#093630]" />
          </div>
          <span>Cart</span>
        </Link>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 mt-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors ${
                router.pathname === item.href ? "font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/cart"
            className="flex items-center gap-2 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center">
              <FaShoppingCart className="fill-[#093630]" />
            </div>
            <span>Cart</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
