// Tạo file mới: src/sections/ConclusionSection.jsx

import React from "react";
import { motion } from "framer-motion";

export default function ConclusionSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center text-center w-full bg-slate-950 text-slate-100 py-24"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6">
          Kết Luận: “Chịu Thua{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Sau Khi Thua Trên Bầu Trời Hà Nội
          </span>
          ”
        </h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Câu chuyện 12 ngày đêm là minh chứng cho bản lĩnh chiến tranh nhân dân
          và nghệ thuật tác chiến đỉnh cao. Chính tại Hà Nội, nơi B-52 bị hạ,
          đường bay đổi hướng, và cuối cùng là dừng tập kích, lời căn dặn lịch
          sử năm 1967 đã ứng nghiệm một cách hiển minh.
        </p>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg"
        >
          Quay về đầu trang
        </motion.button>
      </div>
    </motion.section>
  );
}
