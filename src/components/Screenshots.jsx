import { motion } from 'framer-motion'

const SCREENS = [
  {
    src: '/screenshots/analytics.jpeg',
    label: 'Performance Deep-Dive',
    desc: 'Prop firm readiness & equity tracking',
    rotate: -4,
    translateY: 24,
  },
  {
    src: '/screenshots/coach.jpeg',
    label: 'Guided Execution',
    desc: 'Step-by-step strategy coaching',
    rotate: 0,
    translateY: 0,
  },
  {
    src: '/screenshots/ai-coach.jpeg',
    label: 'AI Trade Coach',
    desc: 'Quality-to-outcome correlation',
    rotate: 4,
    translateY: 24,
  },
]

export default function Screenshots() {
  return (
    <section className="py-24 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-3">The App</p>
          <h2 className="text-4xl font-black text-white">See it in action</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 justify-center items-end pb-8">
          {SCREENS.map((s, i) => (
            <div
              key={s.label}
              className="sm:flex-1 max-w-[200px] mx-auto sm:mx-0"
              style={{ transform: `rotate(${s.rotate}deg) translateY(${s.translateY}px)` }}
            >
            <motion.div
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: 'easeOut' }}
              className="flex flex-col items-center gap-5"
            >
              {/* Phone */}
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-primary/[0.06] rounded-[52px] blur-2xl" />
                <div
                  className="relative bg-card border-2 border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
                  style={{ aspectRatio: '9 / 19.5' }}
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-sm font-bold text-white">{s.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
              </div>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
