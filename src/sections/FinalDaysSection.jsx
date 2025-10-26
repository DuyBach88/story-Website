import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function FinalDaysSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-amber-900/30 text-slate-100 py-32 relative"
    >
      {/* cinematic film grain */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          backgroundImage: "url('/images/film-grain.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Các đêm 27–29/12
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Dạt Vòng Ngoài – Dấu Hiệu Nhượng Bộ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Sau những tổn thất nặng nề, đặc biệt trong đêm 26/12, Lầu Năm Góc
              nhận ra việc tiếp tục dồn B-52 vào "vành đai lửa" quanh Hà Nội là
              quá mạo hiểm.
            </p>
            <p>
              Chiến thuật của Mỹ buộc phải thay đổi. Thay vì tập trung vào nội
              đô, các đợt không kích chuyển hướng sang các mục tiêu ở vòng ngoài
              như Thái Nguyên, Lạng Sơn, Vĩnh Phú, và ngoại vi Hải Phòng–Quảng
              Ninh.
            </p>
            <div className="bg-amber-500/10 border-l-4 border-amber-400 rounded-r-lg p-4">
              <p className="italic text-slate-200">
                Sáng 30/12, Tổng thống Nixon ra lệnh chấm dứt hoàn toàn các cuộc
                tập kích từ bắc vĩ tuyến 20 và tuyên bố nối lại đàm phán tại
                Paris.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-amber-500/20 shadow-2xl"
          >
            <h4 className="flex items-center gap-2 font-semibold mb-4 text-amber-400 text-lg">
              <FaMapMarkerAlt /> Lộ trình dịch chuyển mục tiêu
            </h4>
            <div className="relative h-72 rounded overflow-hidden bg-black/30">
              <img
                src="/images/tactical-b52-map.jpg"
                alt="Tactical Map"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-red-500/30 text-red-300 flex items-center justify-center font-bold text-center text-sm border-2 border-red-500/60 animate-pulse">
                  NỘI ĐÔ
                  <br />
                  HÀ NỘI
                </div>
              </div>
              <p className="absolute top-4 left-4 text-sm bg-black/60 px-2 py-1 rounded">
                Thái Nguyên
              </p>
              <p className="absolute top-12 right-4 text-sm bg-black/60 px-2 py-1 rounded">
                Lạng Sơn
              </p>
              <p className="absolute bottom-4 right-6 text-sm bg-black/60 px-2 py-1 rounded">
                Hải Phòng
              </p>
              <p className="absolute bottom-14 left-2 text-sm bg-black/60 px-2 py-1 rounded">
                Vĩnh Phú
              </p>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">
              Đồ họa minh họa việc B-52 chuyển hướng tấn công ra các tỉnh lân
              cận thay vì tập trung vào Hà Nội.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-20">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-amber-500 text-slate-950 font-bold rounded-full text-xl shadow-amber-500/40 shadow-lg hover:bg-amber-400 transition-all"
          >
            Đi đến Mindmap phân tích lời tiên tri của Bác →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
