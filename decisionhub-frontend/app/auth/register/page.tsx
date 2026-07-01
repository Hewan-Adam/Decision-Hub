import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_35%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">Join DecisionHub and gather trusted input.</p>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 outline-none ring-0" placeholder="Full name" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 outline-none ring-0" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 outline-none ring-0" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Create account</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-cyan-300">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
