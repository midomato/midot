import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

export type PostMeta = {
  title?: string;
  date?: string;
  tags?: string[];
  draft?: boolean;
  [key: string]: any;
};

export type Post = {
  slug: string;
  content: string;
  meta: PostMeta;
};

export async function getPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPathMd = path.join(POSTS_DIR, `${slug}.md`);
  const fullPathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
  let fullPath = fullPathMd;
  try {
    await fs.access(fullPathMd);
  } catch {
    fullPath = fullPathMdx;
  }
  const raw = await fs.readFile(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    meta: data as PostMeta,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)));
  // 日付でソート
  posts.sort((a, b) => {
    const da = a.meta.date ? new Date(a.meta.date).getTime() : 0;
    const db = b.meta.date ? new Date(b.meta.date).getTime() : 0;
    return db - da;
  });
  return posts;
}
