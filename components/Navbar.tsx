'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/addons', label: 'ADD-ONS' },
    { href: '/gallery', label: 'GALLERY' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/98 backdrop-blur-xl shadow-[0_4px_60px_rgba(9,20,38,0.08)]'
            : 'bg-surface/95 backdrop-blur-md'
        } border-b border-primary/8`}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-8 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-tight text-primary hover:text-secondary transition-colors duration-300">
            House of Bash
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[12px] tracking-[0.15em] font-bold uppercase transition-all duration-300 relative group ${
                  pathname === link.href
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-primary/70 hover:text-secondary'
                }`}
              >
                {link.label}
                {pathname !== link.href && (
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/enquire"
              className="bg-primary-container text-on-primary px-8 py-3 rounded-sm font-body text-[12px] tracking-[0.15em] font-bold uppercase hover:bg-secondary transition-all duration-500 shadow-sm inline-block"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-4xl text-white hover:text-secondary-fixed transition-all duration-300 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 0.1 + 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            onClick={() => setMenuOpen(false)}
            className="mt-6 border border-secondary-fixed text-secondary-fixed px-10 py-4 font-body text-[12px] tracking-[0.2em] font-bold uppercase hover:bg-secondary-fixed hover:text-primary transition-all duration-300"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </>
  )
}
