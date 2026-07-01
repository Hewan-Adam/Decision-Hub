import { SiteShell } from '../components/site-shell';

export default function ProfilePage() {
  return (
    <SiteShell>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-cyan-300">Profile</p>
            <h1 className="text-3xl font-semibold">Ava Chen</h1>
            <p className="mt-2 text-sm text-slate-400">Product designer helping teams make better decisions.</p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-cyan-200">Reputation 4.9</div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['Decisions', '24'],
            ['Votes', '182'],
            ['Following', '89'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
