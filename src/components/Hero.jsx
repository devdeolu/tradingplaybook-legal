import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.07] via-background to-background" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(126,184,164,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(126,184,164,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: text */}
        <div>
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-5">
            For Serious Traders
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl lg:text-[62px] font-black leading-[1.04] mb-5 text-white">
            Trade smarter.<br />
            <span className="text-primary">Journal better.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-[16px] text-slate-400 leading-relaxed mb-9 max-w-[400px]">
            Track every trade, follow proven ICT strategies, and get AI-powered coaching — built for prop firm candidates and serious retail traders.
          </motion.p>

          {/* Store buttons */}
          <motion.div {...fadeUp(0.3)} className="flex gap-3 flex-wrap">
            <a
              href="#download"
              className="group flex items-center gap-3 bg-white/[0.05] border border-white/[0.12] hover:border-primary/40 hover:bg-white/[0.08] px-5 py-3 rounded-xl transition-all duration-200"
            >
              <span className="text-2xl">🍎</span>
              <div>
                <p className="text-[10px] text-slate-500 leading-none mb-0.5 uppercase tracking-wide">Download on the</p>
                <p className="text-[14px] font-bold text-white leading-none">App Store</p>
              </div>
            </a>
            <a
              href="#download"
              className="group flex items-center gap-3 bg-white/[0.05] border border-white/[0.12] hover:border-primary/40 hover:bg-white/[0.08] px-5 py-3 rounded-xl transition-all duration-200"
            >
              <span className="text-2xl">▶</span>
              <div>
                <p className="text-[10px] text-slate-500 leading-none mb-0.5 uppercase tracking-wide">Get it on</p>
                <p className="text-[14px] font-bold text-white leading-none">Google Play</p>
              </div>
            </a>
          </motion.div>

          {/* Social proof pill */}
          <motion.div {...fadeUp(0.4)} className="mt-6 inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.07] rounded-full px-4 py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-[13px] leading-none">★</span>
              ))}
            </div>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-[12px] text-slate-400">Loved by serious traders</span>
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 lg:w-[340px]">
            <div className="absolute -inset-8 bg-primary/[0.07] rounded-[60px] blur-3xl" />
            <div
              className="relative bg-card border-2 border-white/10 rounded-[44px] overflow-hidden shadow-2xl"
              style={{ aspectRatio: '9 / 19.5' }}
            >
              <img
                src="/screenshots/journal.jpeg"
                alt="Trading Playbook Journal"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
