import Link from "next/link";
import { getPosts, getPostBySlug } from "../../lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = getPosts();

  console.log(posts);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button>Read more</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
