import { motion } from 'framer-motion'

export default function DownloadBanner() {
  return (
    <section id="download" className="py-24 border-t border-white/[0.05] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card border border-white/[0.07] rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent pointer-events-none" />
          <div className="relative">
            <p className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-4">Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to trade with purpose?
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto mb-10">
              Join traders already using Trading Playbook to track, coach, and improve their performance.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="flex items-center gap-3 bg-background border border-primary/30 px-6 py-4 rounded-xl hover:border-primary/60 transition-colors"
              >
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 leading-none mb-1">Download on the</p>
                  <p className="text-[17px] font-bold text-white leading-none">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-background border border-primary/30 px-6 py-4 rounded-xl hover:border-primary/60 transition-colors"
              >
                <span className="text-3xl">▶</span>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 leading-none mb-1">Get it on</p>
                  <p className="text-[17px] font-bold text-white leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
