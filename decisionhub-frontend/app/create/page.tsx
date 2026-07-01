import { SiteShell } from '../components/site-shell';

export default function CreateDecisionPage() {
  return (
    <SiteShell>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-sm text-cyan-300">Create decision</p>
          <h1 className="mt-2 text-3xl font-semibold">Start a thoughtful poll</h1>
          <p className="mt-3 text-sm text-slate-400">Gather evidence, opinions, and trade-offs in one place.</p>
        </section>
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Title" />
            <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Describe the decision" />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Category" />
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Option 1" />
              <input className="rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Option 2" />
            </div>
            <button className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Publish decision</button>
          </form>
        </section>
      </div>
    </SiteShell>
  );
}
