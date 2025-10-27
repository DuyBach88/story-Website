/* eslint-disable no-unused-vars */
// Updated Phase1812Block2Step2.jsx with enhanced list/item animations and minimap pulse, and added details about SAM S-75
import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBullseye,
  FaBroadcastTower,
  FaSatelliteDish,
} from "react-icons/fa";

export default function Phase1812Block2Step2({ onNext }) {
  const vnTactics = [
    {
      icon: FaBullseye,
      title: "Giữ bí mật hệ thống",
      desc: "Hạn chế phát xạ radar chủ động để tránh bị Mỹ khóa mục tiêu và thu thập tần số",
    },
    {
      icon: FaBroadcastTower,
      title: "Kéo đối phương vào tầm bắn SAM",
      desc: "Cho phép Mỹ lộ dần phương thức hoạt động, sau đó phản kích có hiệu quả tại thời điểm thích hợp",
    },
    {
      icon: FaShieldAlt,
      title: "Luân chuyển lực lượng dự trữ",
      desc: "Giữ các trận địa chính yếu và lực lượng SAM cho thời điểm quyết định ở các đêm sau",
    },
  ];

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <FaShieldAlt className="text-red-600 h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">
              Phản ứng có chủ đích của Việt Nam — không bắn vội, chỉ bẫy
            </h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
            Thay vì đáp trả bằng mọi giá, các chỉ huy phòng không chọn{" "}
            <strong>kiềm chế có tính toán</strong>. Mục tiêu: không để lộ hoàn
            toàn vị trí và tần số tác chiến, giữ lực lượng dự trữ, và để đối
            phương lộ bài trong các đợt tiếp theo.
          </p>
        </motion.div>

        {/* Tactics list */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 text-slate-800">
            3 chiến thuật chủ chốt:
          </h4>
          <div className="space-y-4 mb-8">
            {vnTactics.map((tactic, idx) => {
              const Icon = tactic.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex items-start gap-4 bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-red-300 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-red-600 h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-slate-900">
                      {tactic.title}
                    </h5>
                    <p className="text-slate-600 leading-relaxed">
                      {tactic.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Historical Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* SAM System Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg border border-slate-300 bg-white"
          >
            <div className="w-full h-64 bg-slate-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://www.1999.co.jp/itbig06/10061686t.jpg"
                alt="Hệ thống tên lửa SAM-2 của Việt Nam"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                <strong>Hệ thống SAM:</strong> Tên lửa phòng không S-75 (SAM-2)
                sẵn sàng chiến đấu
              </p>
            </div>
          </motion.div>

          {/* B-52 Wreckage Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg border border-slate-300 bg-white"
          >
            <div className="w-full h-64 bg-slate-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn-i.vtcnews.vn/resize/th/upload/2022/12/15/may-bay-b52-20341883.jpg"
                alt="Mảnh vỡ B-52 bị bắn rơi"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                <strong>Chiến công lịch sử:</strong> Mảnh vỡ B-52 bị tên lửa
                SAM-2 bắn rơi trên bầu trời Hà Nội
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tactical Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-slate-100 rounded-xl p-6 border border-slate-300 mb-12"
        >
          <p className="text-sm text-slate-500 mb-4">
            Bản đồ chiến thuật (minh họa):
          </p>
          <div className="rounded-lg overflow-hidden bg-white">
            <img
              src="https://theplayersaid.com/wp-content/uploads/2022/12/linebacker-ii-aviation-chart-map.gif?w=688"
              alt="Bản đồ chiến thuật Hà Nội 1972"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-xs text-slate-500 italic mt-3">
            Lưu ý: Đồ họa là minh họa tư liệu — mục tiêu là làm rõ logic chiến
            thuật, không phải tái hiện chi tiết tác chiến.
          </p>
        </motion.div>

        {/* SAM S-75 Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <FaSatelliteDish className="h-8 w-8 text-amber-700" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2 text-amber-900">
                Hệ thống SAM S-75 (Dvina)
              </h4>
              <p className="text-sm text-amber-700 mb-4">
                NATO code: SA-2 Guideline
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  "Tầm bắn: 8-48 km (tùy phiên bản)",
                  "Tốc độ: Mach 3.5 (~4.200 km/h)",
                  "Đầu đạn: 130-197 kg",
                  "Độ cao: Lên đến 25-30 km",
                  "Vai trò: Bắn hạ nhiều B-52, U-2",
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <p className="text-slate-700">{spec}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-100 border-l-4 border-amber-500 rounded-r p-4">
                <p className="text-sm text-amber-900">
                  <strong>Cung cấp từ Liên Xô:</strong> 95 hệ thống, 7.658 tên
                  lửa (6.806 được sử dụng hoặc loại bỏ trong chiến tranh)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900 text-slate-100 rounded-xl p-8 mb-8"
        >
          <p className="text-lg leading-relaxed italic">
            "Kết hợp những hành động này — giữ bí mật, dẫn dụ, tập trung hỏa lực
            tại thời điểm quyết định — đã tạo ra cơ hội để các hệ thống SAM đạt
            hiệu quả cao hơn trong các đợt sau đó."
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={onNext}
            className="px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-full hover:bg-amber-400 transition-all hover:shadow-lg flex items-center gap-2"
          >
            Tiếp: Các mốc tiếp theo
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
          <button
            onClick={() => {
              document
                .getElementById("phase-2")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-amber-400/40 text-amber-300 rounded-full 
             hover:bg-amber-400/20 hover:border-amber-400 transition 
             backdrop-blur-sm"
          >
            ← Quay lại danh sách mốc
          </button>
        </div>
      </div>
    </section>
  );
}
