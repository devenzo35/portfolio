"use client";

import First from "../../posts/first.mdx";
import Second from "../../posts/second.mdx";

type Props = {
  params: { slug: string };
};

export default function Post({ params }: Props) {
  const { slug } = params;

  return (
    <div className="w-full min-h-screen mx-auto p-4 bg-gruvbox_gray-soft text-gruvbox_yellow">
      <p className="text-gray-500 mb-6"></p>
      {slug == "first" ? <First /> : <Second />}
    </div>
  );
}
