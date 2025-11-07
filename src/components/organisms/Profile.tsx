"use client";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <>
      <div className="h-300">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // 初期値
          whileInView={{ opacity: 1, y: 0 }} // ビューに入った時
          transition={{ duration: 1, ease: "easeOut" }} // アニメーション設定
          viewport={{ once: true, amount: 0.3 }} // once:1回だけ / amount:30%見えたら発火
          className="p-6 text-black font-bold text-4xl"
        >
          Profile
        </motion.div>
      </div>
    </>
  );
}
