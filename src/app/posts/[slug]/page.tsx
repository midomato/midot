import React from "react";
import { getPostBySlug, getPostSlugs, Post } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./blog.css";

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
  console.log(post);

  return (
    <article className="prose mx-auto max-w-xl py-8">
      <div className="font-bold text-5xl">{post.meta.title ?? slug}</div>
      {post.meta.date && (
        <time className="text-gray-600">
          {new Date(post.meta.date).toLocaleDateString()}
        </time>
      )}
      <div className="mt-10">
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
