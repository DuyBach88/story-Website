/* eslint-disable no-unused-vars */
// src/sections/PhaseAnalysisBlock1.jsx
import React from "react";
import { motion } from "framer-motion";
export default function PhaseAnalysisBlock1({ onNext }) {
  return (
    <motion.section
      id="phase-mindmap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-50 text-slate-800 py-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Cột nội dung text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="tracking-[0.2em] uppercase text-xs text-blue-600 font-semibold mb-3">
            Góc nhìn chiến lược — Tầm nhìn
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Vì sao Bác Hồ nói trước được:
            <br />
            <span className="text-blue-700">
              “Mỹ chỉ chịu thua khi thua trên bầu trời Hà Nội”?
            </span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-700">
            <p>
              Dự đoán này{" "}
              <strong className="text-slate-900">
                không phải là một câu nói mang tính tinh thần
              </strong>
              , mà là một phân tích sắc bén. Nó xuất phát từ sự thấu hiểu rằng
              học thuyết quân sự của Mỹ phụ thuộc hoàn toàn vào{" "}
              <strong>ưu thế tuyệt đối của không quân</strong>.
            </p>
            <p>
              Nếu ưu thế đó bị bẻ gãy tại Hà Nội — trung tâm đầu não — thì Mỹ
              không chỉ thua một trận đánh, mà{" "}
              <strong className="text-slate-900">
                thua cả tính chính danh chiến lược của toàn cuộc chiến
              </strong>
              .
            </p>
          </div>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              Tiếp tục: Sai lầm của Mỹ →
            </motion.button>
          </div>
        </motion.div>

        {/* Cột hình ảnh minh họa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://noibo.kiengiang.dcs.vn/uploads/news/2024_04/anh-1.png"
            alt="Chủ tịch Hồ Chí Minh đang phân tích chiến lược"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
