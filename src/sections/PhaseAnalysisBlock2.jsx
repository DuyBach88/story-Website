// src/sections/PhaseAnalysisBlock2.jsx

import React from "react";
import { motion } from "framer-motion";

export default function PhaseAnalysisBlock2({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-50 text-slate-800 py-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Cột hình ảnh minh họa (đảo vị trí) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-xl overflow-hidden shadow-2xl order-last md:order-first"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Boeing_B-52_dropping_bombs.jpg"
            alt="Máy bay B-52 của Mỹ"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Cột nội dung text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="tracking-[0.2em] uppercase text-xs text-red-600 font-semibold mb-3">
            Góc nhìn chiến lược — Điểm mù
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Mỹ tưởng rằng{" "}
            <span className="text-red-700">sức mạnh là đủ để chiến thắng</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-700">
            <p>
              Đối với Mỹ, <strong>sức mạnh hủy diệt từ trên không</strong> là
              "vũ khí tuyệt đối" để nghiền nát ý chí đối phương. Họ tin rằng chỉ
              cần trút đủ bom, Hà Nội sẽ phải khuất phục.
            </p>
            <p>
              Nhưng họ đã bước vào một cuộc chiến mà chiến thắng không đo bằng
              hỏa lực. Đây là cuộc chiến về{" "}
              <strong>
                ý chí, sự thông minh trong tổ chức và năng lực thích ứng
              </strong>{" "}
              — những yếu tố mà B-52 không thể hủy diệt được.
            </p>
          </div>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors"
            >
              Tiếp tục: Đòn đáp trả →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
