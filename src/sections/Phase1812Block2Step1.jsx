/* eslint-disable no-unused-vars */
// Updated Phase1812Block2Step1.jsx with lively text animations
import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaPlane, FaSatelliteDish } from "react-icons/fa";

export default function Phase1812Block2Step1({ onNext }) {
  const usStrategies = [
    {
      icon: FaSatelliteDish,
      number: "01",
      title: "Mục tiêu thám dò",
      desc: "Thu thập thông tin về vị trí radar, tần số liên lạc, và khả năng phản ứng của hệ thống phòng không Việt Nam",
    },
    {
      icon: FaPlane,
      number: "02",
      title: "Áp lực có kiểm soát",
      desc: "Tạo áp lực vừa phải để đối phương phải phản ứng, nhưng chưa bộc lộ toàn bộ năng lực chiến đấu",
    },
    {
      icon: FaChartLine,
      number: "03",
      title: "Chuẩn bị đợt sau",
      desc: "Dữ liệu thu thập sẽ là cơ sở để lập kế hoạch tấn công toàn diện trong các đêm tiếp theo",
    },
  ];

  return (
    <section className="relative w-full bg-slate-100 text-slate-900 py-24 border-t border-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              <FaPlane className="text-blue-600 h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">
              Chiến lược Mỹ trong đòn mở đầu — không phải tấn công tất tay
            </h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
            Đêm 18/12, mục tiêu đầu tiên của Mỹ không phải là huỷ diệt ngay Hà
            Nội, mà là <strong>dò phản ứng phòng thủ</strong>. Họ muốn xem Việt
            Nam sẽ bộc lộ hệ thống radar, tên lửa, tần số liên lạc... ở mức độ
            nào.
          </p>
        </motion.div>

        {/* Analogy box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12"
        >
          <p className="text-lg text-blue-900 italic">
            💡 Đòn này giống như <strong>"gõ cửa trận địa"</strong> — nếu ta nôn
            nóng đáp trả mạnh ngay, Mỹ sẽ lập tức khóa mục tiêu ở bước sau.
          </p>
        </motion.div>

        {/* Strategy cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {usStrategies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <span className="text-4xl font-black text-slate-200">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={onNext}
            className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-lg flex items-center gap-2 mx-auto"
          >
            Xem phản ứng của Việt Nam
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
