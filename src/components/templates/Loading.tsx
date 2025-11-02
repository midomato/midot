"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // フェードアウト開始
      setTimeout(() => setLoading(false), 1000); // フェードアウト後に削除
    }, 100); // 表示時間
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-[101] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/M.png"
        alt="M"
        width={300}
        height={300}
        priority
        className="z-10"
      />
      <div className="absolute translate-y-[110px] flex gap-20 z-11">
        <div className="w-10 h-10 bg-black rounded-full" />
        <div className="w-7 h-7 bg-black rounded-full" />
      </div>
    </div>
  );
}
