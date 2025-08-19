import fs  from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postPath = path.join(process.cwd(), 'src/app/posts/');

export function getPosts() {
  const filenames = fs.readdirSync(postPath);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.mdx', ''),
      ...data,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postPath, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContents);
  return {
    content,
    meta: {
      ...data,
      slug,
    },
  };
}