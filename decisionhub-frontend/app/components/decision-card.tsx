import Link from 'next/link';

type DecisionCardProps = {
  title: string;
  description: string;
  category: string;
  votes: number;
  comments: number;
  id: string;
};

export function DecisionCard({ title, description, category, votes, comments, id }: DecisionCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-200">{category}</span>
        <span className="text-sm text-slate-400">{votes} votes</span>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
        <span>{comments} comments</span>
        <Link href={`/decisions/${id}`} className="font-medium text-cyan-300 transition hover:text-cyan-200">
          View discussion →
        </Link>
      </div>
    </article>
  );
}
