/* eslint-disable no-unused-vars */
// Tạo file mới: src/sections/ParisAccordsSection.jsx

import React from "react";
import { motion } from "framer-motion";

export default function ParisAccordsSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-slate-900 text-slate-100 py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight">
          Phần 6: Từ Bầu Trời Hà Nội đến Bàn Đàm Phán Paris
        </h2>
        <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Mục tiêu của Linebacker II là ép Hà Nội nhượng bộ. Hệ quả thực tế lại
          ngược lại: thất bại trong ý đồ cưỡng bức đã bẻ gãy ý chí của chính
          Washington.
        </p>

        <div className="mt-12">
          <img
            src="https://image.phunuonline.com.vn/fckeditor/upload/2023/20230129/images/bao-chi-quoc-te-hiep-dinh-_261675008324.jpg"
            alt="Ký kết Hiệp định Paris"
            className="rounded-xl mx-auto shadow-lg border-4 border-slate-700"
          />
        </div>

        <p className="mt-8 text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Sau 12 ngày đêm, Mỹ buộc phải trở lại đàm phán và ký Hiệp định Paris
          vào ngày 27/01/1973, chấm dứt sự dính líu quân sự trực tiếp và mở
          đường rút quân hoàn toàn. Điểm bẻ gãy ý chí của Mỹ, vì thế, đã xảy ra
          trên bầu trời Hà Nội—đúng như lời tiên đoán.
        </p>

        <div className="mt-16">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-full"
          >
            Đọc kết luận cuối cùng →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
