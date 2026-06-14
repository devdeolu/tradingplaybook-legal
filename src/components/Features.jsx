import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '📓',
    title: 'Trade Journal',
    desc: 'Log every trade with pair, direction, entry, SL, TP, R:R and outcome. Syncs automatically from MT4/MT5.',
  },
  {
    icon: '🧠',
    title: 'AI Coaching',
    desc: 'ICT strategy walkthroughs, London Breakout Coach, and Dynamic Coach — step-by-step guidance on every execution.',
  },
  {
    icon: '📊',
    title: 'Performance Deep-Dive',
    desc: 'Prop Firm Readiness score, equity growth chart, strategy win rates, and pair breakdown — all from your real trades.',
  },
  {
    icon: '🔗',
    title: 'MT4 / MT5 Auto-Sync',
    desc: 'Connect your funded accounts directly. Trades import automatically. Pro Plus unlocks unlimited accounts.',
  },
  {
    icon: '🤖',
    title: 'AI Trade Coach',
    desc: 'Quality-to-outcome correlation analysis. Find out if your checklist compliance is actually driving your win rate.',
  },
  {
    icon: '📥',
    title: 'CSV Import',
    desc: 'Bulk-upload trade history from any broker. Get instant analytics on your historical data in seconds.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-3">What's Inside</p>
          <h2 className="text-4xl font-black text-white">Everything a serious trader needs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="bg-card border border-white/[0.07] rounded-2xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-[15px] font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
