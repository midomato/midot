'use client';

import { Facebook, Mail, } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ShareButtons({ tags }: { tags: string[] }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // クライアントサイドでのみ window.location を使う
    setShareUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-4 gap-4 mb-7">
    {/* タグ（左側） */}
      <div className="flex flex-wrap gap-2">
        {(tags || []).map((tag) => (
          <span
            key={tag}
            className="bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded"
          >
            <Link href={`/posts/tags/${encodeURIComponent(tag)}`} className="no-underline">
                {tag}
            </Link>
          </span>
        ))}
      </div>
    {/* シェアボタン(左側) */}
    <div className="flex items-center gap-4">
        {/* Twitter */}
        <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition"
        >
            <img src="/main/x_share.jpg" alt="X" width={36} height={36} className="rounded-md"/>
        </a>

        {/* Facebook */}
        <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3b5998] text-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition"
        >
            <Facebook className="w-6 h-6" />
        </a>
        {/* LINE */}
        <a
            href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22BA4F] w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition"
        >
            <img src="/main/line_share.webp" alt="LINE" width={32} height={32} className='rounded-md'/>
        </a>
        {/* メール */}
        <a
            href={`mailto:?&body=${encodedUrl}`}
            className="bg-[#dd4b39] text-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition"
        >
            <Mail className="w-6 h-6" />
        </a>
    </div>
    </div>
  );
}
