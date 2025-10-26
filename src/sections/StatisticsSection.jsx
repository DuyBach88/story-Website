import React from "react";
import { motion } from "framer-motion";
import { FaPlane, FaHome, FaUsers } from "react-icons/fa";

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
            Cuộc tập kích đường không lớn nhất trong lịch sử chiến tranh hiện
            đại — và Hà Nội là nơi đứng thẳng giữa tâm bão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cột trái: Mỹ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border"
          >
            {/* Ảnh Polaroid */}
            <div className="bg-white rounded-lg shadow-sm border mb-6 p-2">
              <img
                src="https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980d94490e877d71d796f695a6dee03aa70b914a42b9a8cb8fed1aa89504bd47a823e12487b858470f9416368c638ac0211/ban-nhau-4761-6050.jpg"
                alt="Đội hình B-52 của Mỹ"
                className="w-full aspect-square object-cover rounded"
              />
              <p className="text-center text-xs text-slate-500 mt-2">
                Đội hình B-52 tham chiến tại Đông Dương (ảnh tư liệu phục dựng).
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-blue-700">
              Quy mô huy động của Mỹ
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaPlane className="text-blue-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">193/400 B-52</p>
                  <p className="text-slate-600">
                    Gần một nửa tổng số B-52 chiến lược của Mỹ đã được huy động.
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
                    Bao gồm gây nhiễu, hộ tống, trinh sát và tấn công bổ sung.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cột phải: Hà Nội */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border"
          >
            <div className="bg-white rounded-lg shadow-sm border mb-6 p-2">
              <img
                src="https://vanhoavaphattrien.vn/zoom-share/1200x630/uploads/images/2021/12/27/hn1972-1640582431.jpg"
                alt="Phố Khâm Thiên sau bom"
                className="w-full aspect-square object-cover rounded"
              />
              <p className="text-center text-xs text-slate-500 mt-2">
                Hà Nội – Phố Khâm Thiên sau trận bom 1972 (ảnh tư liệu phục
                dựng).
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-red-700">
              Gánh nặng Hà Nội gánh chịu
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaHome className="text-red-500 text-3xl mt-1" />
                <div>
                  <p className="font-bold text-xl">5.480 nhà sập</p>
                  <p className="text-slate-600">
                    Khoảng 10.000 tấn bom được trút xuống chỉ riêng Hà Nội.
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
                    Phần lớn là dân thường – trong đó có trẻ em, phụ nữ, bệnh
                    viện, khu dân cư.
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
