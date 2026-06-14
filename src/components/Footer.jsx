export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="h-7 w-7 rounded-full" />
            <div>
              <p className="text-sm font-bold text-white">Trading Playbook</p>
              <p className="text-[11px] text-slate-500">For serious traders</p>
            </div>
          </div>

          {/* Legal + support links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <a href="/privacy.html" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            <a href="/risk.html" className="hover:text-slate-300 transition-colors">Risk Disclaimer</a>
            <a href="mailto:support@tradingplaybook.io" className="hover:text-slate-300 transition-colors">Support</a>
          </div>
        </div>

        <p className="mt-8 pt-6 border-t border-white/[0.04] text-center text-[11px] text-slate-600">
          © 2026 Trading Playbook · For educational and journaling purposes only. Not financial advice.
        </p>
      </div>
    </footer>
  )
}
