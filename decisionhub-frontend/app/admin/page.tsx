import { SiteShell } from '../components/site-shell';

export default function AdminPage() {
  return (
    <SiteShell>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h1 className="text-3xl font-semibold">Admin dashboard</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {[
            ['Active users', '1.2K'],
            ['New users', '84'],
            ['Total decisions', '420'],
            ['Votes', '9.8K'],
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
