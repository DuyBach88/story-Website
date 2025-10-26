// Tạo file mới: src/sections/FinalDaysSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function FinalDaysSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-slate-950 text-slate-100 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Các đêm 27–29/12
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            Dạt Vòng Ngoài – Dấu Hiệu Nhượng Bộ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Sau những tổn thất nặng nề, đặc biệt trong đêm 26/12, Lầu Năm Góc
              nhận ra việc tiếp tục dồn B-52 vào "vành đai lửa" quanh Hà Nội là
              quá mạo hiểm.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Chiến thuật của Mỹ buộc phải thay đổi. Thay vì tập trung vào nội
              đô, các đợt không kích chuyển hướng sang các mục tiêu ở vòng ngoài
              như Thái Nguyên, Lạng Sơn, Vĩnh Phú, và ngoại vi Hải Phòng–Quảng
              Ninh. Đây là một sự thừa nhận gián tiếp rằng hệ thống phòng không
              của ta đã chiến thắng.
            </p>
            <div className="bg-blue-900/40 border-l-4 border-blue-400 rounded-r-lg p-4">
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
            className="bg-slate-900 p-6 rounded-xl border border-slate-800"
          >
            <h4 className="flex items-center gap-2 font-semibold mb-4 text-amber-400">
              <FaMapMarkerAlt /> Lộ trình dịch chuyển mục tiêu
            </h4>
            <div className="relative h-64 bg-dots-pattern rounded">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-center text-sm border-2 border-red-500/50 animate-pulse">
                  NỘI ĐÔ
                  <br />
                  HÀ NỘI
                </div>
              </div>
              <p className="absolute top-4 left-4 text-sm bg-slate-800 px-2 py-1 rounded">
                Thái Nguyên
              </p>
              <p className="absolute top-10 right-4 text-sm bg-slate-800 px-2 py-1 rounded">
                Lạng Sơn
              </p>
              <p className="absolute bottom-4 right-8 text-sm bg-slate-800 px-2 py-1 rounded">
                Hải Phòng
              </p>
              <p className="absolute bottom-12 left-2 text-sm bg-slate-800 px-2 py-1 rounded">
                Vĩnh Phú
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Đồ họa minh họa việc B-52 chuyển hướng tấn công ra các tỉnh lân
              cận thay vì tập trung vào Hà Nội.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full"
          >
            Xem những con số tổng kết →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
