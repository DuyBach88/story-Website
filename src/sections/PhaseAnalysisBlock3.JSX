import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBook } from "react-icons/fa";

// FULL PAGE JSX — PhaseAnalysisBlock3 (Warm Victory • VintageColor • NoBlur • TopDown)
export default function PhaseAnalysisBlock3({ onNext }) {
  const points = [
    {
      title: "Ưu thế không quân ≠ tất thắng",
      content:
        "B-52 là đỉnh cao sức mạnh oanh tạc. Nhưng khi rơi ngay tại trung tâm phòng không đối phương, thông điệp chiến lược bị đảo chiều: <strong class='text-amber-300'>hỏa lực không còn là 'lá chắn chính danh'</strong>.",
    },
    {
      title: "Tổn thất vật chất = chấn động tinh thần – chính trị",
      content:
        "Tổn thất B-52 không chỉ là kinh tế-quân sự. Nó làm 'mất điểm tựa tâm lý' của phi công, công luận và các bàn đàm phán: chi phí leo thang tăng, lợi ích chính trị giảm.",
    },
    {
      title: "Trúng “điểm rơi” dự đoán của Bác",
      content:
        "“Thua trên bầu trời Hà Nội” không chỉ là mất máy bay mà <strong class='text-amber-300'>mất thế chiến lược</strong>. Ghi bàn mạnh nhất là bẻ gãy ngay trung tâm đối phương, thế trận buộc phải đổi.",
    },
  ];

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-fixed text-slate-100 relative"
      style={{ backgroundImage: "url('/images/hanoi-vintage-1972.jpg')" }}
    >
      {/* TopDown warm overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent" />

      {/* Optional very-light film grain for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{ backgroundImage: "url('/images/film-grain.png')", backgroundSize: 'cover' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Điểm Gãy Chiến Lược
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Khi B-52 rơi, ưu thế tuyệt đối của Mỹ{' '}
            <span className="text-amber-400">bị làm rạn vỡ về chính trị.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main points */}
          <div className="lg:col-span-2 space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-slate-900/70 border border-slate-800/60 rounded-xl p-6 backdrop-blur-[0.5px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                </div>
                <p
                  className="text-slate-200/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: point.content }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Summary & reading */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/70 border border-slate-800/60 rounded-xl p-6 backdrop-blur-[0.5px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaLightbulb className="text-amber-400" />
                <h4 className="font-semibold text-white">Tóm tắt cho người xem</h4>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-200/90">
                <li>Thất bại B-52 = Thất bại về mặt biểu tượng.</li>
                <li>Hỏa lực không thắng được ý chí.</li>
                <li>Chiến thắng phòng không mở đường cho thắng lợi ngoại giao.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-slate-900/70 border border-slate-800/60 rounded-xl p-6 backdrop-blur-[0.5px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaBook className="text-amber-400" />
                <h4 className="font-semibold text-white">Gợi ý đọc thêm</h4>
              </div>
              <p className="text-sm text-slate-200/90">
                Nghiên cứu về học thuyết chiến tranh bất đối xứng và vai trò của tâm lý chiến trong các cuộc xung đột hiện đại.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-amber-500 text-slate-950 font-bold rounded-full text-lg shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all"
          >
            Đi tới Tổng kết / Quiz →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
