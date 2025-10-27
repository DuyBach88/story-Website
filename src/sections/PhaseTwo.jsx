/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaLandmark,
  FaBookOpen,
} from "react-icons/fa";

// Component này cần nhận một hàm onJumpToStep thay vì onSelectDate
export default function PhaseTwo({ onJumpToStep }) {
  const items = [
    {
      key: 1, // Step 1: 18/12
      tag: "Đêm mở màn",
      title: "18/12/1972",
      prompt:
        "Mỹ tung lực lượng B-52 quy mô lớn: cú đòn knockout hay màn thăm dò chiến lược?",
    },
    {
      key: 2, // Step 2: 25/12
      tag: "Tạm ngưng ném bom",
      title: "25/12/1972",
      prompt:
        "Vì sao tạm dừng? Tuyên bố nhân đạo hay điều chỉnh thế trận cho đòn kế tiếp?",
    },
    {
      key: 3, // Step 3: 26/12
      tag: "Ác liệt nhất",
      title: "26/12/1972",
      prompt:
        "Ta đảo chiều hay tiêu hao? Mỹ phạm sai lầm cốt lõi nào trong đêm này?",
    },
    {
      key: 4, // Step 4: 29/12
      tag: "Kết cuộc",
      title: "29/12/1972",
      prompt:
        "Mỹ thất bại vì hỏa lực SAM-2 hay vì chẩn đoán sai bản chất đối thủ và học thuyết chiến tranh?",
    },
  ];

  return (
    <section
      id="phase-2"
      // THAY ĐỔI MÀU NỀN TỪ TỐI SANG SÁNG
      className="relative w-full bg-gray-100 text-slate-900 border-t border-slate-300"
      aria-labelledby="phase2-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Intro block with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          // THAY ĐỔI MÀU NỀN INTRO
          className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-10 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <motion.div
              // THAY ĐỔI MÀU NỀN ICON
              className="mt-1 shrink-0 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaLandmark className="h-6 w-6 text-amber-600" aria-hidden />
            </motion.div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.35em] uppercase text-amber-600">
                Phase 2 • Phân tích chiến lược
              </p>
              <h2
                id="phase2-heading"
                className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-slate-900"
              >
                Trước khi kiểm chứng dự đoán, hãy xác định ý nghĩa chiến lược
                của dự đoán đó
              </h2>
              <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
                Liệu một dự đoán về <em>“thắng–thua trên bầu trời Hà Nội”</em>{" "}
                đang nói về ưu thế hỏa lực, hay về một sự thật sâu hơn:{" "}
                <strong>
                  học thuyết chiến tranh, tổ chức lực lượng, và năng lực thích
                  ứng
                </strong>
                ? Hãy bắt đầu bằng cách soi từng mốc quan trọng của chiến dịch
                và xem các dữ kiện có dẫn ta tới kết luận ấy hay không.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider with pulse animation */}
        <motion.div
          className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Section header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="h-5 w-5 text-amber-600" aria-hidden />
            <h3 className="text-lg font-semibold text-slate-800">
              Chọn mốc thời gian để khảo sát dữ kiện
            </h3>
          </div>
          <div className="text-xs text-slate-600">
            1972 • Chiến dịch 12 ngày đêm
          </div>
        </div>

        {/* Cards grid with enhanced hover and click animations */}
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it, idx) => (
            <motion.button
              key={it.key}
              type="button"
              // GỌI HÀM onJumpToStep VỚI KEY MỚI
              onClick={() => onJumpToStep?.(it.key)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02, // Giảm scale một chút cho tông sáng
                boxShadow: "0 0 15px rgba(251,191,36,0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              // THAY ĐỔI MÀU CARD
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left outline-none ring-amber-500/40 transition focus-visible:ring-2 hover:bg-slate-50 shadow-md"
              aria-describedby={`desc-${it.key}`}
            >
              {/* Enhanced background flare on hover - Giữ nguyên tông Amber */}
              <motion.div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  {/* THAY ĐỔI MÀU TAG */}
                  <span className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                    {it.tag}
                  </span>
                  <h4 className="mt-3 text-2xl font-bold text-slate-900">
                    {it.title}
                  </h4>
                </div>
                <motion.div
                  animate={{ x: [0, 2, 0] }} // Giảm rung nhẹ
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowRight
                    className="mt-2 h-5 w-5 flex-none text-amber-600 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </motion.div>
              </div>

              <p
                id={`desc-${it.key}`}
                className="mt-3 text-slate-600 leading-relaxed"
              >
                {it.prompt}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <FaBookOpen className="h-4 w-4" aria-hidden />
                <span>Nhấn để mở bàn soi chiến lược & dữ kiện lịch sử</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Subtle footer note with fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center text-xs text-slate-500"
        >
          Gợi ý: Sau khi xem từng mốc, hãy tự hỏi — nếu đảo vai, phía Mỹ có thể
          tránh thất bại bằng cách nào?
        </motion.p>
      </div>

      {/* Soft vignette with subtle pulse */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(251,191,36,0.08)_0%,transparent_60%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }} // Giảm độ đậm của vignette
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
