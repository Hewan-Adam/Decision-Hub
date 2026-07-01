import { SiteShell } from '../components/site-shell';
import { DecisionCard } from '../components/decision-card';

const decisions = [
  {
    id: '1',
    title: 'Which laptop should I buy?',
    description: 'Comparing portability, battery life, repairability, and performance for a new remote work setup.',
    category: 'Technology',
    votes: 184,
    comments: 31,
  },
  {
    id: '2',
    title: 'Should I pursue a career change this year?',
    description: 'Looking for thoughtful input from founders, career coaches, and people who made the switch.',
    category: 'Career',
    votes: 122,
    comments: 17,
  },
  {
    id: '3',
    title: 'Best city for a startup launch?',
    description: 'We want the best mix of talent, cost, and networking opportunities.',
    category: 'Business',
    votes: 98,
    comments: 12,
  },
];

export default function HomeFeedPage() {
  return (
    <SiteShell>
      <div className="space-y-6">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm text-cyan-300">Latest decisions</p>
              <h1 className="text-3xl font-semibold">Explore what the community is talking about</h1>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Trending • Most discussed • Newest
            </div>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {decisions.map((decision) => (
            <DecisionCard key={decision.id} {...decision} />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
