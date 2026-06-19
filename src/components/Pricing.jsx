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
    period: 'or $99.99/yr — save 44%',
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
    period: 'or $199.99/yr — save 44%',
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
    <section id="pricing" className="py-28 border-t border-white/[0.05] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[3px] text-primary uppercase mb-3">Plans</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">Start free. Upgrade when you're ready.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                  isPrimary
                    ? 'bg-[#162d25] border-primary/60 shadow-[0_0_50px_rgba(126,184,164,0.10)]'
                    : isGold
                    ? 'bg-[#1f1a0e] border-gold/50 shadow-[0_0_50px_rgba(212,168,67,0.07)]'
                    : 'bg-card border-white/[0.07] hover:border-white/15'
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
                    isPrimary ? 'text-primary' : isGold ? 'text-gold' : 'text-slate-500'
                  }`}
                >
                  {plan.tier}
                </p>

                <div className="flex items-end gap-1 mb-1">
                  <p className="text-4xl font-black text-white">{plan.price}</p>
                  {plan.tier !== 'Free' && (
                    <span className="text-base font-normal text-slate-400 mb-1">/mo</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-7">{plan.period}</p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span
                        className={`mt-0.5 shrink-0 font-bold ${
                          isPrimary ? 'text-primary' : isGold ? 'text-gold' : 'text-slate-600'
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
                  className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isPrimary
                      ? 'bg-primary text-background hover:brightness-110'
                      : isGold
                      ? 'bg-gold text-background hover:brightness-110'
                      : 'bg-white/[0.07] text-white hover:bg-white/[0.12] border border-white/[0.08]'
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
