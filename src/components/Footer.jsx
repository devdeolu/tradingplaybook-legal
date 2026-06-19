const SOCIALS = [
  {
    label: 'X / Twitter',
    href: 'https://x.com/tradingplaybook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/tradingplaybook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:support@tradingplaybook.io',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 overflow-hidden shrink-0 flex items-center justify-center">
              <img src="/logo.png" alt="Trading Playbook" className="h-16 w-16 object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Trading Playbook</p>
              <p className="text-[11px] text-slate-500">For serious traders</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-full
                           text-slate-500 hover:text-slate-200
                           bg-transparent hover:bg-white/[0.07]
                           border border-transparent hover:border-white/[0.08]
                           transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          <a href="/privacy.html" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="/terms.html" className="hover:text-slate-300 transition-colors">Terms of Use</a>
          <a href="/risk.html" className="hover:text-slate-300 transition-colors">Risk Disclaimer</a>
          <a href="mailto:support@tradingplaybook.io" className="hover:text-slate-300 transition-colors">Support</a>
        </div>

        <p className="mt-6 pt-6 border-t border-white/[0.04] text-center text-[11px] text-slate-600">
          © 2026 Trading Playbook · For educational and journaling purposes only. Not financial advice.
        </p>
      </div>
    </footer>
  )
}
