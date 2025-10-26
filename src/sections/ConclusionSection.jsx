// Tạo file mới: src/sections/ConclusionSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaTrophy } from "react-icons/fa"; // Thêm icon cúp/chiến thắng

export default function ConclusionSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center w-full bg-gradient-to-br from-red-800 to-red-950 text-slate-100 py-24 overflow-hidden"
    >
      {/* Lớp nền: Vòng nguyệt quế/Huy hiệu chiến thắng mờ */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fcd34d 0%, transparent 70%)",
        }}
      ></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-lighten opacity-5 animate-pulse-slow"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* ICON ĐỈNH */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8 p-4 inline-flex items-center justify-center rounded-full bg-yellow-400 text-red-900 shadow-2xl shadow-yellow-500/50"
        >
          <FaTrophy className="w-12 h-12" />
        </motion.div>

        {/* TIÊU ĐỀ CHÍNH */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-lg">
          KẾT LUẬN
          <span className="block text-4xl md:text-6xl text-yellow-300 mt-4 font-black italic">
            "CHỊU THUA, SAU KHI THUA TRÊN BẦU TRỜI HÀ NỘI"
          </span>
        </h2>

        {/* DÒNG TÓM LƯỢC */}
        <p className="mt-8 text-xl text-yellow-100 font-medium leading-relaxed max-w-3xl mx-auto">
          Chiến thắng **Điện Biên Phủ trên không** không chỉ là một chiến công
          quân sự, mà là minh chứng hùng hồn cho **bản lĩnh Việt Nam**, nghệ
          thuật tác chiến đỉnh cao, và lời tiên tri lịch sử đã ứng nghiệm một
          cách trọn vẹn.
        </p>

        {/* THỐNG KÊ CHIẾN CÔNG (Tăng tính hùng hồn) */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-b border-yellow-500 py-6 max-w-4xl mx-auto">
          <div className="p-4">
            <p className="text-4xl font-extrabold text-yellow-400 drop-shadow-md">
              12
            </p>
            <p className="text-sm uppercase font-semibold text-gray-300 mt-1">
              Ngày đêm
            </p>
          </div>
          <div className="p-4 border-l border-r border-yellow-500">
            <p className="text-4xl font-extrabold text-yellow-400 drop-shadow-md">
              34
            </p>
            <p className="text-sm uppercase font-semibold text-gray-300 mt-1">
              Máy bay B-52 bị bắn hạ
            </p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-extrabold text-yellow-400 drop-shadow-md">
              30
            </p>
            <p className="text-sm uppercase font-semibold text-gray-300 mt-1">
              Năm hòa bình cho đất nước
            </p>
          </div>
        </div>

        {/* NÚT QUAY LẠI */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(253, 224, 71, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 bg-yellow-400 text-red-900 font-bold text-lg rounded-full shadow-xl transition-all flex items-center gap-3 mx-auto"
        >
          <FaArrowUp />
          Khám phá lại hành trình lịch sử
        </motion.button>
      </div>

      {/* FOOTER NGUỒN */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-5 text-xs text-gray-400 z-10"
      >
        Nội dung tham khảo từ Quân đội Nhân dân, TTXVN, VnExpress.
      </motion.p>
    </motion.section>
  );
}
