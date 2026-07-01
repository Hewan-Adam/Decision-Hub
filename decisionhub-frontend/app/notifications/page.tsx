import { SiteShell } from '../components/site-shell';

export default function NotificationsPage() {
  return (
    <SiteShell>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h1 className="text-3xl font-semibold">Notifications</h1>
        <div className="mt-6 space-y-3">
          {[
            'Someone commented on your decision',
            'A new vote arrived on your poll',
            'Your profile was followed by a new user',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
