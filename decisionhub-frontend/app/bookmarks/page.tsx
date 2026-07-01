import { SiteShell } from '../components/site-shell';

export default function BookmarksPage() {
  return (
    <SiteShell>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h1 className="text-3xl font-semibold">Saved decisions</h1>
        <p className="mt-2 text-sm text-slate-400">Keep your favorite polls handy for later review.</p>
      </div>
    </SiteShell>
  );
}
