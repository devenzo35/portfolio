"use client";

type PostCardProps = {
  title: string;
  summary?: string;
  date?: string;
  slug?: string;
};

export default function PostCard({
  title,
  summary,
  date,
  slug,
}: PostCardProps) {
  return (
    <div className="p-4 border rounded-2xl shadow-sm hover:shadow-md transition mb-4">
      {slug ? (
        <a href={`/blog/${slug}`} className="block">
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
        </a>
      ) : (
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
      )}
      {date && <p className="text-gray-500 text-sm mb-2">{date}</p>}
      {summary && <p className="text-gray-700">{summary}</p>}
    </div>
  );
}
