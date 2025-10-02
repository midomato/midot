import React from "react";
import { getPostBySlug, getPostSlugs, Post } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  return (
    <article className="prose mx-auto py-8">
      <h1>{post.meta.title ?? slug}</h1>
      {post.meta.date && (
        <time>{new Date(post.meta.date).toLocaleDateString()}</time>
      )}
      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
