import { motion } from 'framer-motion'

const PLANS = [
  {
    tier: 'Free',
    price: '$0',
    period: 'forever',
    accent: 'neutral',
    badge: null,
    features: [
      'Trade journal (limited)',
      'Basic analytics',
      'Strategy Hub',
      '1 MT account',
    ],
    cta: 'Download Free',
  },
  {
    tier: 'Pro',
    price: '$14.99',
    period: '/mo · or $99.99/yr — save 44%',
    accent: 'primary',
    badge: 'Most Popular',
    features: [
      'Unlimited trade logging',
      'Full analytics + PDF exports',
      'Prop Firm Readiness score',
      '$100K challenge simulation',
      'AI coaching screens',
      'CSV import',
      '1 MT account',
    ],
    cta: 'Get Pro',
  },
  {
    tier: 'Pro Plus',
    price: '$29.99',
    period: '/mo · or $199.99/yr — save 44%',
    accent: 'gold',
    badge: 'Multi-Account',
    features: [
      'Everything in Pro',
      'Unlimited MT4/MT5 accounts',
      'For multi-funded prop traders',
      'Priority support',
      'Early access to new features',
    ],
    cta: 'Get Pro Plus',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-3">Plans</p>
          <h2 className="text-4xl font-black text-white">Start free. Upgrade when you're ready.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => {
            const isPrimary = plan.accent === 'primary'
            const isGold = plan.accent === 'gold'
            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className={`relative rounded-2xl p-7 border ${
                  isPrimary
                    ? 'bg-[#162d25] border-primary'
                    : isGold
                    ? 'bg-[#1f1a0e] border-gold'
                    : 'bg-card border-white/[0.07]'
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-6 text-[11px] font-bold px-3 py-1 rounded-full ${
                      isPrimary ? 'bg-primary text-background' : 'bg-gold text-background'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <p
                  className={`text-[11px] font-bold tracking-[2px] uppercase mb-3 ${
                    isPrimary ? 'text-primary' : isGold ? 'text-gold' : 'text-slate-400'
                  }`}
                >
                  {plan.tier}
                </p>

                <p className="text-4xl font-black text-white mb-1">
                  {plan.price}
                  {plan.tier !== 'Free' && (
                    <span className="text-base font-normal text-slate-400">/mo</span>
                  )}
                </p>
                <p className="text-xs text-slate-400 mb-7">{plan.period}</p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span
                        className={`mt-0.5 shrink-0 ${
                          isPrimary ? 'text-primary' : isGold ? 'text-gold' : 'text-slate-500'
                        }`}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 ${
                    isPrimary
                      ? 'bg-primary text-background'
                      : isGold
                      ? 'bg-gold text-background'
                      : 'bg-white/[0.08] text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
