import { SiteShell } from '../../components/site-shell';

const decision = {
  title: 'Which laptop should I buy?',
  description: 'I need a machine that balances battery, portability, repairability, and long-term value.',
  options: ['MacBook Air M3', 'ThinkPad', 'Dell XPS'],
  comments: ['Great for portability', 'The ThinkPad is easier to repair'],
};

export default function DecisionDetailPage() {
  return (
    <SiteShell>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-sm text-cyan-300">Decision details</p>
          <h1 className="mt-2 text-3xl font-semibold">{decision.title}</h1>
          <p className="mt-3 text-sm text-slate-400">{decision.description}</p>
          <div className="mt-6 space-y-3">
            {decision.options.map((option) => (
              <div key={option} className="rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  <span className="text-cyan-300">44%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold">Discussion</h2>
          <div className="mt-4 space-y-3">
            {decision.comments.map((comment) => (
              <div key={comment} className="rounded-2xl border border-white/10 bg-slate-800/70 p-3 text-sm text-slate-300">
                {comment}
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
