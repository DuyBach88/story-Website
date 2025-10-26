// Tạo file mới: src/sections/StatisticsSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaPlane, FaUsers, FaHome } from "react-icons/fa";

export default function StatisticsSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-gray-100 text-slate-800 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold leading-tight">
            Phần 5: Những Con Số Biết Nói
          </h2>
          <p className="mt-4 text-slate-600">
            Đây là cuộc tập kích đường không lớn nhất trong lịch sử chiến tranh
            hiện đại, và Hà Nội là nơi gánh chịu sức nặng của nó.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cột 1: Quy mô của Mỹ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-700">
              Quy mô huy động của Mỹ
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaPlane className="text-blue-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">193/400 B-52</p>
                  <p className="text-slate-600">
                    Gần một nửa tổng số B-52 của không quân chiến lược Mỹ đã
                    được huy động.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPlane className="text-blue-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">
                    ~4.000 lượt máy bay chiến thuật
                  </p>
                  <p className="text-slate-600">
                    Các máy bay chiến thuật yểm trợ, gây nhiễu và tấn công bổ
                    sung.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cột 2: Thiệt hại ở Hà Nội */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-700">
              Gánh nặng Hà Nội gánh chịu
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaHome className="text-red-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">5.480 nhà sập</p>
                  <p className="text-slate-600">
                    Khoảng 10.000 tấn bom được ném xuống Hà Nội.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaUsers className="text-red-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">
                    2.368 người chết, 1.355 người bị thương
                  </p>
                  <p className="text-slate-600">
                    Thương vong chủ yếu là dân thường, bao gồm cả ở phố Khâm
                    Thiên và bệnh viện Bạch Mai.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-full"
          >
            Từ trận địa đến bàn đàm phán →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
