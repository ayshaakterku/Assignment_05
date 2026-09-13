import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import logo from "../assets/logo-text.png"

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6" />
          )}
        </button>

        {/* Logo */}
        <img
          src={logo}
          alt="Development Stack"
          className="h-auto w-32"
        />

        {/* Desktop navigation */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                i === 0
                  ? "text-sm font-medium text-[#DB2777]"
                  : "text-sm font-medium text-slate-600 transition hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-[#475569] hover:text-slate-900">
            Sign In
          </button>

          <button className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-pink-200 transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={
                i === 0
                  ? "text-sm font-medium text-[#DB2777]"
                  : "text-sm font-medium text-slate-600 transition hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}