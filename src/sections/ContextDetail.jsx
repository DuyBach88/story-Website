import React, { useRef } from "react";
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
    bacHoPK:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKumE59lzxiEWpgtjh_9ZWI67dw0i-m6TsA&s", // Sử dụng lại link cũ do tìm kiếm không cho ra ảnh phù hợp
    chienSiPK:
      "https://vnanet.vn/Data/Articles/2025/07/16/8151723/vna_potal_bo_doi_ten_lua_phong_khong_viet_nam_-_luong_nong_cot_tren_mat_tran_dat_doi_khong_gop_phan_bao_ve_vung_troi_to_quoc_stand.jpg", // Ảnh chiến sĩ phòng không/tên lửa
    tranDiaCaoXa:
      "https://nvsk.vnanet.vn/storage/Upload/2023/12/18/18122023nvsk-dienbienphutrenkhong-11.jpg", // Ảnh TTXVN: Trận địa pháo cao xạ Hà Nội bảo vệ cầu Long Biên
    mitTinh:
      "https://nld.mediacdn.vn/thumb_w/700/291774122806476800/2022/12/17/z39268855597682fc5ea0b9fb84e3aae0c2cf8ba2bc18d-16712063639371406336893.jpg", // Ảnh mít tinh, dùng lại link cũ
    danQuan: "https://i.imgur.com/b9LgOqK.jpeg", // Ảnh dân quân tự vệ, dùng lại link cũ
    radarLuyenNghiepVu:
      "https://imgs.vietnamnet.vn/Images/2017/12/18/08/20171218085651-2-tong-thuat-lam-den-hd.jpg", // Kíp trắc thủ radar, dùng lại link cũ
    trungDoanTenLua:
      "https://cdnphoto.dantri.com.vn/YLHCMbM88x5TXF4xZlFYnLVFLtI=/zoom/1200_630/2022/12/18/chien-thang-dien-bien-phu-tren-khong-2-1671330095906.jpeg", // Trung đoàn tên lửa E261, dùng lại link cũ
    soDoBay: "https://i.imgur.com/z8j7yDk.png", // Sơ đồ minh họa, dùng lại link cũ
    b52Bay: "https://i.imgur.com/T0bS4Gk.jpeg", // B-52 Stratofortress, dùng lại link cũ
    cuaNamTrieu:
      "https://cdnphoto.dantri.com.vn/oT6L4t3x8KmIf-HyJtF-sR9STZI=/zoom/1200_630/2022/12/18/chien-thang-dien-bien-phu-tren-khong-3-1671330096011.jpeg", // Cửa Nam Triệu/Văn Úc, dùng lại link cũ
    danTran: "https://i.imgur.com/Fw8h4pP.jpeg", // Ảnh dàn trận, dùng lại link cũ
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
