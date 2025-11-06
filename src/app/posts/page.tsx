import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function PostsIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-none mx-auto py-12 px-4 bg-blue-900 text-white">
      <h1 className="text-3xl font-bold mb-6">技術ブログ</h1>

      <ul className="space-y-6">
        {posts.map((post) => {
          if (post.meta.draft) return null;

          return (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/posts/${post.slug}`} className="no-underline">
                <h2 className="text-xl font-semibold hover:underline">
                  {post.meta.title ?? post.slug}
                </h2>
              </Link>
              {post.meta.date && (
                <time className="text-sm text-gray-400">
                  {new Date(post.meta.date).toLocaleDateString()}
                </time>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
