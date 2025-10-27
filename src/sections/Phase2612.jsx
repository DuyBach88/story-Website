/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Phase2612({ onNextPhaseAnalysis }) {
  const [step, setStep] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const handleNext = (nextStep) => setStep(nextStep);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.section
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-black text-white py-24"
          >
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-6">
                26/12/1972 — Khâm Thiên trong lửa
              </h2>
              <p className="text-lg leading-relaxed mb-10">
                “Tiếng còi báo động vang lên — không ai còn kịp phân biệt hướng
                nào là an toàn. Khói, bụi, tiếng kính vỡ và cả tiếng người gọi
                tên nhau hòa vào thứ âm thanh đặc quánh của địa ngục. Khâm Thiên
                — con phố từng rực sáng đèn hàng quán — giờ chỉ còn đỏ rực bởi
                lửa và bụi bom.”
              </p>
              <button
                onClick={() => handleNext(2)}
                className="px-6 py-3 bg-amber-500 text-black rounded-full"
              >
                Tiếp →
              </button>
            </div>
          </motion.section>
        )}

        {step === 2 && (
          <motion.section
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-white text-slate-900 py-24"
          >
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-6">Toàn cảnh chiến thuật</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Vào đêm 26/12/1972, quy mô cuộc tấn công được đẩy lên một tầm
                cao mới — báo cáo lịch sử ghi nhận Mỹ tăng lên khoảng{" "}
                <strong>120 mục tiêu</strong> trong chiến dịch Linebacker II.
                Không chỉ là những đợt ném bom vào mục tiêu quân sự, các tốp
                B-52 và máy bay chiến thuật còn tấn công sâu vào các khu dân cư:
                Khâm Thiên, Tương Mai, khu vực quanh Bệnh viện Bạch Mai chịu
                thiệt hại nặng. Ban ngày, các máy bay chiến thuật thực hiện
                nhiệm vụ <em>suppression</em> (áp chế) nhằm vô hiệu hóa hoặc dồn
                lực lượng tên lửa phòng không ở những trận địa như Thanh Oai,
                Gia Lâm — mục tiêu là loại bỏ mối đe doạ đối với các đợt ném bom
                ban đêm.
              </p>

              <div className="rounded-lg overflow-hidden mb-6 border border-slate-200">
                <img
                  src="https://theplayersaid.com/wp-content/uploads/2022/12/linebacker-ii-aviation-chart-map.gif?w=688"
                  alt="Bản đồ chiến thuật: trục bay B-52 và vị trí trận địa"
                  className="w-full h-auto"
                />
                <div className="p-3 text-xs text-slate-500">
                  Bản đồ minh họa: trục bay B-52, khu vực áp chế, và vị trí trận
                  địa tên lửa (nguồn minh hoạ).
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed">
                Về mặt chiến lược, Linebacker II là một nỗ lực quy mô nhằm buộc
                Hà Nội trở lại bàn đàm phán — bằng cách phá huỷ cơ sở hạ tầng,
                gây áp lực chính trị và tạo cảm giác rằng cuộc chiến có thể leo
                thang. Tuy nhiên, trong thực địa, các lực lượng phòng không Việt
                Nam chủ động áp dụng một loạt biện pháp:{" "}
                <strong>giữ bí mật phát xạ radar</strong>,{" "}
                <strong>luân chuyển trận địa dự trữ</strong>, và{" "}
                <strong>dẫn dụ máy bay vào tầm bắn SAM</strong>. Chiến thuật này
                không chỉ khiến nhiều phi vụ B-52 tổn thất mà còn buộc đối
                phương phải cân nhắc lại phương thức tiếp cận ở các đợt sau.
              </p>

              <p className="mb-10 text-sm text-slate-600">
                Ghi chú: số liệu và diễn biến tham khảo báo chí và hồ sơ lịch sử
                về chiến dịch Linebacker II; phần minh họa nhằm làm sáng tỏ
                logic tác chiến, không phải mô phỏng chính xác từng tọa độ trận
                địa.
              </p>
              <button
                onClick={() => handleNext(3)}
                className="px-6 py-3 bg-amber-500 text-black rounded-full"
              >
                Moment of Truth →
              </button>
            </div>
          </motion.section>
        )}

        {step === 3 && (
          <motion.section
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-slate-900 text-white py-24"
          >
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-6">
                B-52 bị bắn rơi ngay nội đô
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                Đêm 26/12 chứng kiến một trong những khoảnh khắc then chốt:
                trong khi nhiều khu phố nội đô chìm trong lửa, lực lượng phòng
                không đã tổ chức phản công quyết liệt và trong các đợt đó{" "}
                <strong>
                  một số máy bay B-52 bị bắn rơi ngay trên và quanh khu vực Hà
                  Nội
                </strong>
                . Những mảnh vỡ rơi vào các khu vực đô thị, để lại bằng chứng
                vật lý về cuộc đối đầu trên bầu trời — bằng chứng mà nhân chứng
                dân sự và ảnh tư liệu đã ghi nhận.
              </p>

              <div className="rounded-lg overflow-hidden mb-6 border border-slate-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Wreckage_of_B52_bomber%2C_downtown_Hanoi%2C_Vietnam.jpg"
                  alt="Mảnh vỡ B-52 tại Hà Nội"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 text-xs text-slate-500">
                  Ảnh tư liệu: xác mảnh vỡ B-52 tại Hà Nội (nguồn: Wikimedia
                  Commons). Ghi chú: ảnh và nguồn báo chí ghi chép nhiều vụ tổn
                  thất B-52 trong chiến dịch Linebacker II.
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed">
                Ở cấp độ chiến lược, việc{" "}
                <strong>bị tổn thất trên không phận Bắc Việt</strong> — dù không
                phải là đại thắng một lần cho toàn chiến dịch — có tác động kép:
                vừa gây tổn thất vật chất và nhân lực cho Mỹ, vừa làm suy giảm
                tinh thần của phi vụ và buộc Hoa Kỳ phải cân nhắc lại chi phí
                tiếp tục chiến dịch. Quan trọng hơn, nó là minh chứng cho luận
                điểm sâu hơn trong dự đoán của Bác: rằng cuộc đối đầu quyết định
                trên bầu trời Hà Nội — tức năng lực phòng không, tổ chức và
                chính sách chiến tranh — sẽ là một trong những nhân tố dẫn tới
                thay đổi về cục diện chính trị và đàm phán.
              </p>

              <p className="mb-6 text-sm text-slate-400 italic">
                Nhưng cần lưu ý: nhận định lịch sử phải phân biệt giữa "thắng
                trên bầu trời" theo nghĩa toàn cục và "thắng" theo những chiến
                thắng tác chiến cục bộ. Mặc dù phòng không Việt Nam đạt nhiều
                thành tích quan trọng, kết quả cuối cùng của xung đột chịu chi
                phối bởi nhiều yếu tố—ngoại giao, hậu cần, dư luận quốc tế—chứ
                không chỉ là các trận không chiến đơn lẻ.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => {
                    if (typeof onNextPhaseAnalysis === "function") {
                      onNextPhaseAnalysis();
                    } else {
                      document
                        .getElementById("phase-mindmap")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 bg-amber-500 text-black rounded-full font-semibold"
                >
                  Tiếp: Kiểm chứng dự đoán — Mindmap phân tích
                </button>

                <button
                  onClick={() => {
                    document
                      .getElementById("phase-2")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 border border-slate-300 rounded-full text-slate-700"
                >
                  ← Quay lại
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
