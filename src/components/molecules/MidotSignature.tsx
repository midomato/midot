"use client";
import { motion } from "framer-motion";

export default function MidotSignature() {
  return (
    <motion.svg
      viewBox="0 150 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[400px] h-[600px] z-10"
    >
      <motion.path
        d="M30 90 Q30 10 50 50 T70 60 Q70 10 100 90 
            M120 90 Q120 60 110 50 T120 90
            M150 60 Q140 60 135 64 T137 85 T155 90 Q150 50 145 35 T165 40 T168 80
            M200 80 Q190 80 190 88 T200 98 T210 90 T200 80
            M212 70 Q226 70 240 64 T235 51 T235 90 Q230 90 239 100"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
