import Link from 'next/link';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/home" className="text-lg font-semibold tracking-wide">
            DecisionHub
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="/home" className="transition hover:text-white">Home</Link>
            <Link href="/create" className="transition hover:text-white">Create</Link>
            <Link href="/notifications" className="transition hover:text-white">Alerts</Link>
            <Link href="/profile" className="rounded-full border border-white/10 px-3 py-2 transition hover:bg-white/10">Profile</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">{children}</main>
    </div>
  );
}
