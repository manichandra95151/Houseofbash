import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface py-20 border-t border-primary/5">
      <div className="flex flex-col items-center gap-2 px-5 md:px-6 max-w-[1280px] mx-auto text-center">
        <div className="font-display text-2xl text-primary mb-2">House of Bash</div>
        <p className="font-body text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-8">
          Private Theatre Celebrations · Sangareddy
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10 mb-10">
          {[
            { href: '/addons', label: 'Pricing & Add-ons' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/enquire', label: 'Enquire Now' },
            { href: '#', label: 'Privacy Policy' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-[12px] tracking-[0.12em] font-bold uppercase text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-16 h-px bg-secondary/40 mb-8" />

        {/* Instagram only — no YouTube */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-primary/10 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 mb-8"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <p className="font-body text-sm text-on-surface-variant opacity-60">
          © 2024 House of Bash. Architectural Minimalist Luxury.
        </p>
      </div>
    </footer>
  )
}