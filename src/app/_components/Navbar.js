"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/service", label: "Service" },
    { href: "/home-builders", label: "Home Builders" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 px-6 transition-colors transition-shadow duration-300 ${
    isScrolled
      ? "bg-white text-[#093630] shadow-[0_4px_12px_0_rgba(9,54,48,0.2)]"
      : "bg-[#093630] text-white shadow-none"
  }`;
  

  const linkStyle = `hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <Image
          src={isScrolled ? "/white_bg_logo.png":"/logo.png"}
          alt="Garage Door"
          width={80}
          height={40}
          className="rounded-md"
          style={{ filter: isScrolled ? "drop-shadow(2px 4px 6px #093630)" : "" }}

        />

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${linkStyle} ${
                router.pathname === item.href ? "font-bold" : "font-semibold text-sm"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/cart"
          className={`hidden md:flex gap-2 items-center ${linkStyle} ${
            router.pathname === "/cart" ? "font-bold" : "font-semibold text-sm"
          }`}
        >
          <div className={` rounded-full h-[40px] w-[40px] flex items-center justify-center ${isScrolled? "bg-[#093630]":"bg-white"}`}>
            <FaShoppingCart className={isScrolled ? "fill-[#FFF]":"fill-[#093630]"} />
          </div>
          <span>Cart</span>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 mt-4 space-y-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${linkStyle} block ${
                router.pathname === item.href ? "font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/cart"
            className={`flex items-center gap-2 ${linkStyle}`}
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
