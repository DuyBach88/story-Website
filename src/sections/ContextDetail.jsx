import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaQuoteLeft,
  FaGlobe,
  FaCogs,
  FaRoute,
  FaCheckCircle,
} from "react-icons/fa";

/**
 * Khối Nội dung Tiền đề có hiệu ứng cuộn mượt mà (Parallax Scroll)
 * @param {object} props - Thuộc tính component
 * @param {React.ReactNode} props.children - Nội dung chính
 * @param {string} props.color - Màu sắc (tailwind class name, vd: 'red', 'blue')
 * @param {string} props.title - Tiêu đề khối
 * @param {React.ElementType} props.icon - Icon React-Icons
 * @param {number} [props.delay=0] - Độ trễ animation
 */
function PrequelContentBlock({
  children,
  color,
  title,
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  delay = 0,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0.5"], // Bắt đầu khi target ở dưới cùng viewport, kết thúc khi target ở giữa
  });
  // Hiệu ứng dịch chuyển Y từ 80px lên 0px khi cuộn
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="max-w-4xl mx-auto py-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="text-lg text-slate-700 leading-relaxed">{children}</div>
    </motion.div>
  );
}

export default function ContextDetail({ onNext }) {
  // Cập nhật các URL ảnh sau khi tìm kiếm:
  const imageLinks = {
    // Chân dung Bác Hồ (ảnh tư liệu khoảng năm 1946, public domain). :contentReference[oaicite:0]{index=0}
    bacHoPK:
      "https://static-images.vnncdn.net/files/publish/2022/12/18/quote-3-1153.jpg",

    // Chiến sĩ phòng không / kíp tên lửa SAM (SA-2) của miền Bắc VN đang cơ động vào vị trí chiến đấu, khoảng năm 1972. Ảnh do Không quân Mỹ chụp, public domain. :contentReference[oaicite:1]{index=1}
    chienSiPK:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/SA-2-north-vietnam.jpg",

    tranDiaCaoXa:
      "https://i2-vnexpress.vnecdn.net/2022/12/26/DienBienPhu-1672067841-9435-1672068480.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=MdVPZS82-a0kncNRiLBX-w",

    // Ảnh mít tinh/biểu dương lực lượng, ăn mừng chiến thắng (nguồn báo Người Lao Động).
    mitTinh:
      "https://cdn.nhandan.vn/images/5f89b7807d05469a74477ecb06829906d473ce58e8bc4b93f40d4f7217e56ad9947fcf3d46e207ce8b82be10718244c2a47a0fc053f0a5e672cc78c984d9e1c3/thang-tam-1945-ha-noi-1749.jpg",

    // Lực lượng dân quân tự vệ.
    danQuan:
      "data:image/jpeg;base64,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",

    // Kíp trắc thủ radar / luyện hiệp đồng bắt mục tiêu B-52 (nguồn Vietnamnet, thường cho phép nhúng trực tiếp).
    radarLuyenNghiepVu:
      "data:image/jpeg;base64,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",

    // Trung đoàn tên lửa phòng không (ví dụ E261) – lực lượng đã bắn rơi B-52 trong chiến dịch 12/1972; ảnh báo Dân Trí dạng 1200x630 landscape, rất hợp để hiển thị full-width. :contentReference[oaicite:2]{index=2}
    trungDoanTenLua:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9wuYwuzj7CjO6o-w3kij31oVuVE6srxo8Q&s",

    // Sơ đồ đường bay/đánh chặn (ảnh custom mà bạn đã vẽ, giữ nguyên để đảm bảo nội dung đúng bài giảng).
    soDoBay:
      "https://s.vnecdn.net/vnexpress/j/v165/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Map-report.png",

    // B-52 Stratofortress trên không (ảnh Không quân Mỹ, public domain, kích thước 1000x652). :contentReference[oaicite:3]{index=3}
    b52Bay:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Boeing_B-52H_Stratofortress.jpg",

    // Khu vực cửa sông Nam Triệu/Văn Úc, hướng đánh B-52 trên vùng biển – giữ link Dân Trí dạng 1200x630, rất ổn để làm slide ngang.
    cuaNamTrieu:
      "https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img-hl1-mobile.jpg",

    // Dàn trận/tên lửa triển khai (ảnh minh họa đội hình chiến đấu/triển khai hỏa lực, bạn up lên Imgur nên hotlink ổn định).
    danTran:
      "https://tuetech.edu.vn/Uploads/TinyMCE/buithaihai/Theo_dong_lich_su/2022.12.28_-_Cuoc_doi_dau_tren_bau_troi_Ha_Noi_1972/IMG_1.jpg",
  };

  return (
    <section id="context-detail" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs tracking-widest uppercase text-red-600">
            CHƯƠNG 1 • TIỀN ĐỀ CUỘC CHIẾN
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Thế trận trước giờ G
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Hành trình từ lời tiên đoán đến trận chiến lịch sử.
          </p>
        </motion.div>

        <div className="mt-10 mb-14 h-px w-full bg-slate-200" />

        {/* KHỐI 1: LỜI DỰ ĐOÁN */}
        <PrequelContentBlock
          title="Mở đầu: Lời dự đoán vang lên giữa bầu trời mây đen (1967-1968)"
          icon={FaQuoteLeft}
          color="red"
        >
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
            <p className="text-lg italic text-slate-800 leading-relaxed">
              "Sớm muộn rồi đế quốc Mỹ cũng sẽ đưa B-52 ra đánh Hà Nội, rồi có
              thua nó mới chịu thua... Ở Việt Nam, Mỹ sẽ nhất định thua... nhưng
              nó chỉ chịu thua sau khi thua trên bầu trời Hà Nội."
            </p>
            <p className="text-sm font-semibold text-red-700 mt-3">
              - Chủ tịch Hồ Chí Minh
            </p>
          </div>

          <p className="text-lg">
            Giữa những năm leo thang không kích, lời căn dặn này của Chủ tịch Hồ
            Chí Minh không chỉ là dự báo quân sự, mà là chỉ lệnh chuẩn bị sớm -
            tổ chức lực lượng, luyện cách đánh, và rèn ý chí{" "}
            <strong className="text-red-700">"bắn rơi B-52 tại chỗ"</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <img
                src={imageLinks.bacHoPK}
                alt="Chủ tịch Hồ Chí Minh thăm lực lượng phòng không"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Bác Hồ thăm lực lượng phòng không (1966) - Nguồn: Tư liệu
              </p>
            </div>
            <div>
              <img
                src={imageLinks.chienSiPK}
                alt="Chiến sĩ phòng không tại vị trí chiến đấu"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Chiến sĩ phòng không sẵn sàng chiến đấu - Nguồn: TTXVN
              </p>
            </div>
          </div>
        </PrequelContentBlock>

        {/* KHỐI 2: VÌ SAO HÀ NỘI LÀ ĐIỂM QUYẾT CHIẾN */}
        <PrequelContentBlock
          title="Phần 1: Vì sao 'bầu trời Hà Nội' là điểm quyết chiến?"
          icon={FaGlobe}
          color="blue"
          delay={0.2}
        >
          <p className="text-lg">
            Sau Rolling Thunder, Mỹ chuyển sang chiến lược tập kích đường không
            bằng **B-52** để buộc Hà Nội nhượng bộ trên bàn đàm phán Paris.
          </p>
          <p className="mt-4 text-lg">
            Về phía ta, mạng lưới phòng không nhiều tầng (**SAM-2**, cao xạ,
            radar, **MiG-21**) được xây dựng có hệ thống, coi Hà Nội-Hải Phòng
            là <strong className="text-blue-700">"trọng địa"</strong>. Tinh thần
            là:{" "}
            <em>
              vừa đánh vừa đàm, dùng thắng lợi quân sự tạo thế trên bàn thương
              lượng.
            </em>
          </p>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-blue-900 mb-4">
              Mạng lưới phòng không Hà Nội-Hải Phòng
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-blue-600">SAM-2</p>
                <p className="text-sm text-gray-600 mt-2">
                  Tên lửa đất-đối-không
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-blue-600">Cao xạ</p>
                <p className="text-sm text-gray-600 mt-2">Pháo phòng không</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-blue-600">Radar</p>
                <p className="text-sm text-gray-600 mt-2">Hệ thống phát hiện</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-blue-600">MiG-21</p>
                <p className="text-sm text-gray-600 mt-2">
                  Tiêm kích đánh chặn
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={imageLinks.tranDiaCaoXa}
                alt="Trận địa cao xạ bảo vệ Hà Nội"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Hà Nội 12 ngày đêm khói lửa - Trận địa cao xạ bảo vệ cầu Long
                Biên (12/1972) - Nguồn: TTXVN
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <img
                  src={imageLinks.mitTinh}
                  alt="Mít tinh quyết tâm bảo vệ thủ đô"
                  className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
                />
                <p className="text-sm text-gray-600 italic mt-3 text-center">
                  Mít tinh quyết tâm - Nguồn: TTXVN
                </p>
              </div>
              <div>
                <img
                  src={imageLinks.danQuan}
                  alt="Dân quân tự vệ Hà Nội"
                  className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
                />
                <p className="text-sm text-gray-600 italic mt-3 text-center">
                  Dân quân tự vệ sẵn sàng chiến đấu - Nguồn: TTXVN
                </p>
              </div>
            </div>
          </div>
        </PrequelContentBlock>

        {/* KHỐI 3: CHUẨN BỊ TRƯỚC GIỜ G */}
        <PrequelContentBlock
          title="Phần 2: Chuẩn bị trước giờ G - 'Bắt nhiễu để tìm B-52'"
          icon={FaCogs}
          color="green"
          delay={0.4}
        >
          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-xl mb-6">
            <p className="text-lg font-semibold text-amber-900">
              Thách thức công nghệ: Hệ thống nhiễu điện tử của B-52
            </p>
            <p className="mt-2 text-gray-700">
              B-52 vào mục tiêu với khoảng 17 máy phát nhiễu/chiếc và "mưa
              **chaff**" dày đặc, che mờ hoàn toàn màn hình radar, biến màn hình
              thành một màu trắng xóa.
            </p>
          </div>

          <p className="text-lg">
            Để đối phó, ta điều kíp trắc thủ, tên lửa, radar vào Khu 4 để luyện{" "}
            <strong className="text-green-700">"vạch nhiễu"</strong>, rút quy
            trình bắt tín hiệu B-52 trong môi trường nhiễu dày đặc. Đây là bí
            quyết quân sự then chốt.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={imageLinks.radarLuyenNghiepVu}
                alt="Kíp trắc thủ radar huấn luyện"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Kíp trắc thủ radar luyện "vạch nhiễu" - Nguồn: VnExpress
              </p>
            </div>
            <div>
              <img
                src={imageLinks.trungDoanTenLua}
                alt="Trung đoàn tên lửa E261"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Trung đoàn tên lửa E261 sẵn sàng chiến đấu - Nguồn: VnExpress
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-green-800 uppercase tracking-wide">
                  Mốc lịch sử: 24/11/1972
                </p>
                <p className="mt-2 text-lg font-bold text-green-900">
                  "Tên lửa là chủ lực diệt B-52"
                </p>
                <p className="mt-2 text-gray-700">
                  Quyết định chiến lược chuyển vai trò chủ lực sang tên lửa
                  **SAM-2**, điều chỉnh từ dự kiến ban đầu lấy không quân làm
                  chủ công.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <img
              src={imageLinks.danTran}
              alt="Dàn trận phòng không"
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
            />
            <p className="text-sm text-gray-600 italic mt-3 text-center">
              Sơ đồ "Dàn trận" - Hệ thống nhiễu/chaff và chiến thuật đối phó -
              Nguồn: Tư liệu
            </p>
          </div>
        </PrequelContentBlock>

        {/* KHỐI 4: NHỮNG CON ĐƯỜNG VÀO HÀ NỘI */}
        <PrequelContentBlock
          title="Phần 3: Những con đường vào Hà Nội - Đường bay của B-52"
          icon={FaRoute}
          color="orange"
          delay={0.6}
        >
          <p className="text-lg mb-6">
            B-52 đánh Hà Nội theo hai hướng chính, mỗi tuyến có đặc điểm riêng
            về khoảng cách, thời gian bay và sức mang bom:
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h4 className="text-2xl font-bold text-orange-900">
                  Hướng Tây Bắc (Utapao, Thái Lan)
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Lộ trình
                  </p>
                  <p className="text-sm mt-1 text-gray-800">
                    Utapao - Thượng Lào - Phú Thọ/Việt Trì/Nà Sản - Hà Nội
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Thời gian
                  </p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">
                    4.5 - 5.5 giờ
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Sức mang (B-52D)
                  </p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">
                    ~22.3 tấn
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h4 className="text-2xl font-bold text-red-900">
                  Hướng Tây Nam (Guam)
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Lộ trình
                  </p>
                  <p className="text-sm mt-1 text-gray-800">
                    Guam - Tiếp dầu - Quy Nhơn - Hạ Lào - Sơn La - Hà Nội
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Thời gian
                  </p>
                  <p className="text-2xl font-bold text-red-600 mt-1">
                    14 - 16 giờ
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Sức mang
                  </p>
                  <p className="text-sm mt-1">
                    <span className="text-xl font-bold text-red-600">
                      B-52G:
                    </span>{" "}
                    ~9.2 tấn
                    <br />
                    <span className="text-xl font-bold text-red-600">
                      B-52D:
                    </span>{" "}
                    ~13.5 tấn
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <img
              src={imageLinks.soDoBay}
              alt="Sơ đồ đường bay B-52 vào Hà Nội"
              className="w-full h-auto rounded-xl shadow-2xl border-2 border-slate-200 hover:shadow-3xl transition-shadow duration-300 object-cover"
            />
            <p className="text-sm text-gray-600 italic mt-3 text-center bg-slate-50 p-3 rounded-lg">
              Sơ đồ minh họa các trục đường bay chính của B-52 vào Hà Nội -
              Nguồn: VnExpress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <img
                src={imageLinks.b52Bay}
                alt="B-52 trên đường tấn công"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                B-52 Stratofortress trên đường thực hiện nhiệm vụ - Ảnh tư liệu
              </p>
            </div>
            <div>
              <img
                src={imageLinks.cuaNamTrieu}
                alt="Cửa Nam Triệu - Hải Phòng"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
              />
              <p className="text-sm text-gray-600 italic mt-3 text-center">
                Cửa Nam Triệu/Văn Úc - Hướng đột nhập khi đánh Hải Phòng -
                Nguồn: VnExpress
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">📋</span> Lưu ý chiến thuật
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  **B-52D** có sức mang bom lớn hơn nhưng tầm bay ngắn hơn
                  **B-52G**
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Tuyến từ Guam dài gấp 3 lần, cần tiếp dầu trên không
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  Cửa Nam Triệu và Văn Úc là cửa ngõ chính khi đánh Hải Phòng
                </span>
              </li>
            </ul>
          </div>
        </PrequelContentBlock>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <button
            onClick={onNext}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-red-700 transition-all"
          >
            Bắt đầu Chương 2: 12 Ngày Đêm Quyết Định
          </button>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
