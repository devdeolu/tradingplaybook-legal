import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Legal', href: '/privacy.html' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-white text-[15px] hidden sm:block">Trading Playbook</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#download"
            className="hidden md:block bg-primary text-background text-sm font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Download App
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-slate-400 flex flex-col gap-1.5"
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/96 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-2xl font-bold text-slate-200 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              className="bg-primary text-background font-bold px-10 py-3.5 rounded-xl text-lg mt-2"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
