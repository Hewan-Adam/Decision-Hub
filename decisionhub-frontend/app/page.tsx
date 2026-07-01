import Link from 'next/link';

const categories = ['Technology', 'Education', 'Career', 'Finance', 'Lifestyle'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_35%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-10 text-slate-100 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-wrap items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
          <div className="text-lg font-semibold tracking-wide">DecisionHub</div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="/home" className="transition hover:text-white">Explore</Link>
            <Link href="/auth/login" className="transition hover:text-white">Login</Link>
            <Link href="/auth/register" className="rounded-full bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">Join now</Link>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Built for better community decisions</span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Make big choices with the wisdom of your community.</h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Create a poll, gather opinions, compare trade-offs, and turn discussion into clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/auth/register" className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Start a decision</Link>
              <Link href="/home" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10">Browse live polls</Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Trending now</p>
                <h2 className="text-xl font-semibold">Which laptop should I buy?</h2>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">Hot</span>
            </div>
            <div className="space-y-3">
              {['MacBook Air M3', 'ThinkPad', 'Dell XPS'].map((option) => (
                <div key={option} className="rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{option}</span>
                    <span className="text-cyan-300">42%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-[42%] rounded-full bg-cyan-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Popular categories</p>
              <h3 className="text-xl font-semibold">Find the right space for your next question</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
