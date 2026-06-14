import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.06] via-background to-background" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(126,184,164,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(126,184,164,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: text */}
        <div>
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-5">
            For Serious Traders
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl lg:text-[58px] font-black leading-[1.05] mb-6 text-white">
            Trade smarter.<br />
            <span className="text-primary">Journal better.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-[17px] text-slate-400 leading-relaxed mb-10 max-w-[420px]">
            Track every trade, follow proven ICT strategies, and get AI-powered coaching — all in one app built for prop firm candidates and serious retail traders.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex gap-3 flex-wrap">
            <a
              href="#download"
              className="flex items-center gap-3 bg-card border border-primary/20 px-5 py-3.5 rounded-xl hover:border-primary/50 transition-colors"
            >
              <span className="text-[26px]">🍎</span>
              <div>
                <p className="text-[10px] text-slate-400 leading-none mb-1">Download on the</p>
                <p className="text-[15px] font-bold text-white leading-none">App Store</p>
              </div>
            </a>
            <a
              href="#download"
              className="flex items-center gap-3 bg-card border border-primary/20 px-5 py-3.5 rounded-xl hover:border-primary/50 transition-colors"
            >
              <span className="text-[26px]">▶</span>
              <div>
                <p className="text-[10px] text-slate-400 leading-none mb-1">Get it on</p>
                <p className="text-[15px] font-bold text-white leading-none">Google Play</p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 lg:w-[280px]">
            {/* Glow behind phone */}
            <div className="absolute -inset-6 bg-primary/[0.08] rounded-[60px] blur-3xl" />
            {/* Phone frame */}
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
