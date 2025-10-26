// src/sections/QuizSection.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSyncAlt, FaFilePdf } from "react-icons/fa";

export default function QuizSection({ onComplete }) {
  const questions = [
    {
      questionText:
        "Vũ khí chủ lực nào của phòng không Việt Nam đã bắn hạ nhiều máy bay B-52 nhất?",
      answerOptions: [
        { answerText: "Pháo cao xạ 100mm", isCorrect: false },
        { answerText: "Tên lửa SAM-2 (S-75 Dvina)", isCorrect: true },
        { answerText: "Máy bay MiG-21", isCorrect: false },
        { answerText: "Tên lửa vác vai A-72", isCorrect: false },
      ],
      feedback:
        "SAM-2 với chiến thuật 'vạch nhiễu tìm thù' chính là khắc tinh của 'pháo đài bay' B-52.",
    },
    {
      questionText:
        "Mục tiêu chính trị cốt lõi của Mỹ khi thực hiện chiến dịch Linebacker II là gì?",
      answerOptions: [
        { answerText: "Hủy diệt hoàn toàn Hà Nội", isCorrect: false },
        { answerText: "Thử nghiệm vũ khí mới", isCorrect: false },
        {
          answerText:
            "Gây áp lực tối đa để buộc Việt Nam ký Hiệp định Paris theo các điều khoản của Mỹ",
          isCorrect: true,
        },
        {
          answerText: "Trả đũa cho các cuộc tấn công trước đó",
          isCorrect: false,
        },
      ],
      feedback:
        "Mỹ muốn dùng sức mạnh không quân để kết thúc chiến tranh trên thế mạnh tại bàn đàm phán.",
    },
    {
      questionText:
        "Sự kiện B-52 bị bắn rơi tại Hà Nội được coi là 'điểm gãy' về mặt nào?",
      answerOptions: [
        { answerText: "Chỉ tổn thất về kinh tế", isCorrect: false },
        {
          answerText: "Tâm lý, chính trị và tính chính danh của cuộc chiến",
          isCorrect: true,
        },
        { answerText: "Công nghệ quân sự", isCorrect: false },
        { answerText: "Ngoại giao với đồng minh", isCorrect: false },
      ],
      feedback:
        "Việc mất B-52 đã làm lung lay niềm tin của giới chính trị và công chúng Mỹ vào một chiến thắng quân sự.",
    },
    {
      questionText:
        "Chiến thuật phòng không quan trọng nào đã được Việt Nam áp dụng hiệu quả?",
      answerOptions: [
        { answerText: "Tấn công phủ đầu sân bay địch", isCorrect: false },
        {
          answerText:
            "Giữ bí mật trận địa, hạn chế phát sóng radar và chỉ tấn công khi thời cơ chín muồi",
          isCorrect: true,
        },
        { answerText: "Sử dụng máy bay không người lái", isCorrect: false },
        { answerText: "Tấn công liên tục ngày đêm", isCorrect: false },
      ],
      feedback:
        "Chiến thuật 'im lặng' và 'đánh tập trung' đã khiến Mỹ bất ngờ và không kịp đối phó.",
    },
    {
      questionText:
        "Tổng thống Mỹ nào đã ra lệnh thực hiện chiến dịch Linebacker II?",
      answerOptions: [
        { answerText: "John F. Kennedy", isCorrect: false },
        { answerText: "Lyndon B. Johnson", isCorrect: false },
        { answerText: "Richard Nixon", isCorrect: true },
        { answerText: "Gerald Ford", isCorrect: false },
      ],
      feedback:
        "Richard Nixon đã ra lệnh ném bom với hy vọng sớm kết thúc chiến tranh Việt Nam.",
    },
    {
      questionText:
        "Xác một chiếc B-52 hiện vẫn còn được lưu giữ tại địa điểm nào ở Hà Nội?",
      answerOptions: [
        { answerText: "Hồ Gươm", isCorrect: false },
        { answerText: "Hồ Tây", isCorrect: false },
        { answerText: "Lăng Chủ tịch Hồ Chí Minh", isCorrect: false },
        { answerText: "Hồ Hữu Tiệp (Làng hoa Ngọc Hà)", isCorrect: true },
      ],
      feedback:
        "Đây là một chứng tích lịch sử sống động về chiến thắng 'Điện Biên Phủ trên không'.",
    },
    {
      questionText:
        "Lời tiên đoán “Mỹ chỉ chịu thua sau khi thua trên bầu trời Hà Nội” là của ai?",
      answerOptions: [
        { answerText: "Đại tướng Võ Nguyên Giáp", isCorrect: false },
        { answerText: "Chủ tịch Hồ Chí Minh", isCorrect: true },
        { answerText: "Tổng Bí thư Lê Duẩn", isCorrect: false },
        { answerText: "Thủ tướng Phạm Văn Đồng", isCorrect: false },
      ],
      feedback:
        "Đây là một nhận định chiến lược sắc sảo, cho thấy tầm nhìn sâu rộng về bản chất cuộc chiến.",
    },
    {
      questionText:
        "Chiến thắng 'Điện Biên Phủ trên không' đã dẫn tới kết quả trực tiếp nào?",
      answerOptions: [
        {
          answerText: "Mỹ rút quân ngay lập tức và vô điều kiện",
          isCorrect: false,
        },
        { answerText: "Chiến tranh kết thúc hoàn toàn", isCorrect: false },
        {
          answerText: "Mỹ phải quay lại bàn đàm phán và ký kết Hiệp định Paris",
          isCorrect: true,
        },
        { answerText: "Liên Hợp Quốc can thiệp quân sự", isCorrect: false },
      ],
      feedback:
        "Chiến thắng này đã tạo ra bước ngoặt quyết định trên bàn đàm phán, dẫn đến việc ký kết Hiệp định Paris năm 1973.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer({ index, isCorrect });
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1500); // 1.5s để khán giả thấy feedback
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  const handleExportPDF = () => {
    alert("Chức năng xuất PDF đang được phát triển!");
    // TODO: Có thể dùng jsPDF hoặc html2canvas để snapshot slide
  };

  const total = questions.length;
  const progress = ((currentQuestion + (showScore ? 1 : 0)) / total) * 100;

  // Màu sắc kiểu Quizlet (light/blue, nghiêm túc)
  const brand = {
    bg: "bg-sky-50",
    panel: "bg-white",
    border: "border-slate-200",
    text: "text-slate-800",
    subtext: "text-slate-500",
    primary: "bg-sky-600 hover:bg-sky-500 text-white",
    accent: "text-sky-700",
    ring: "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full ${brand.bg} ${brand.text} py-20 min-h-screen flex items-center`}
      aria-live="polite"
    >
      {/* Watermark */}
      <div className="pointer-events-none select-none fixed bottom-4 right-6 text-slate-400/60 text-sm md:text-base tracking-wide">
        <span className="px-3 py-1 rounded-full bg-white/60 border border-slate-200/60 shadow-sm">
          Standing for G6
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Header + Progress */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={`text-sm ${brand.subtext} font-medium`}>
                {showScore ? "Kết quả" : "Bài kiểm tra lịch sử"}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold">
                Điện Biên Phủ Trên Không — Hà Nội, 1972
              </h1>
            </div>
            <div className="text-right">
              <p className={`text-sm ${brand.subtext}`}>
                {showScore ? (
                  <>Hoàn thành</>
                ) : (
                  <>
                    Câu hỏi{" "}
                    <span className="font-semibold">{currentQuestion + 1}</span>
                    /{total}
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="mt-4 h-2 w-full bg-white border border-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sky-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              aria-hidden="true"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showScore ? (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.35 }}
              className={`${brand.panel} ${brand.border} border rounded-2xl p-8 md:p-10 shadow-lg`}
              role="region"
              aria-label="Kết quả bài kiểm tra"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
                Hoàn thành bài kiểm tra!
              </h2>
              <p className="text-4xl md:text-5xl font-black text-sky-700 mb-4">
                {score} / {total} câu đúng
              </p>
              <p className={`mb-8 text-lg ${brand.subtext}`}>
                {score > Math.floor(total * 0.6)
                  ? "Tuyệt vời! Bạn đã nắm rất rõ về sự kiện lịch sử này."
                  : "Cảm ơn bạn đã tham gia! Hãy cùng xem lại câu chuyện để hiểu sâu hơn nhé."}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <button
                  onClick={restartQuiz}
                  className={`px-6 py-3 rounded-full font-semibold border ${brand.border} hover:bg-slate-50 transition ${brand.ring}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <FaSyncAlt /> Chơi lại
                  </span>
                </button>

                <button
                  onClick={onComplete}
                  className={`px-6 py-3 rounded-full font-semibold ${brand.primary} transition ${brand.ring}`}
                >
                  Xem diễn biến cuối cùng →
                </button>

                <button
                  onClick={handleExportPDF}
                  className={`px-6 py-3 rounded-full font-semibold border ${brand.border} hover:bg-slate-50 transition ${brand.ring}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <FaFilePdf /> Xuất kết quả
                  </span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Question */}
              <div
                className={`${brand.panel} ${brand.border} border rounded-2xl p-8 md:p-10 shadow-lg`}
                role="group"
                aria-roledescription="Câu hỏi trắc nghiệm"
                aria-label={`Câu hỏi ${currentQuestion + 1}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center">
                  {questions[currentQuestion].questionText}
                </h2>
              </div>

              {/* Answers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => {
                    const isSelected =
                      selectedAnswer !== null && selectedAnswer.index === index;

                    const base =
                      "w-full text-left rounded-2xl border transition shadow-sm " +
                      "p-5 md:p-6 font-semibold leading-snug " +
                      "hover:shadow-md hover:-translate-y-[1px] " +
                      `${brand.border} ${brand.panel} ${brand.ring}`;

                    let stateClass =
                      "hover:border-sky-400 hover:bg-sky-50 active:scale-[0.99]";

                    if (selectedAnswer !== null) {
                      if (isSelected && selectedAnswer.isCorrect) {
                        stateClass = "border-emerald-400 bg-emerald-50";
                      } else if (isSelected && !selectedAnswer.isCorrect) {
                        stateClass = "border-rose-400 bg-rose-50";
                      } else if (answerOption.isCorrect) {
                        // Khi đã chọn xong, tô nhẹ đáp án đúng để khán giả thấy
                        stateClass = "border-emerald-300 bg-emerald-50/60";
                      } else {
                        stateClass = "opacity-80";
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect, index)
                        }
                        disabled={selectedAnswer !== null}
                        className={`${base} ${stateClass}`}
                        whileTap={{ scale: 0.995 }}
                        aria-pressed={isSelected}
                        aria-label={`Đáp án ${index + 1}: ${
                          answerOption.answerText
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="mt-1 h-3 w-3 rounded-full bg-sky-300"
                            aria-hidden
                          />
                          <span className="text-lg md:text-xl">
                            {answerOption.answerText}
                          </span>
                        </div>
                      </motion.button>
                    );
                  }
                )}
              </div>

              {/* Feedback */}
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${brand.panel} ${brand.border} border rounded-2xl p-5 md:p-6 shadow`}
                  role="status"
                >
                  <p className={`${brand.subtext} text-base md:text-lg`}>
                    {questions[currentQuestion].feedback}
                  </p>
                </motion.div>
              )}

              {/* Bottom actions (for presenter) */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={restartQuiz}
                  className={`px-5 py-3 rounded-full font-semibold border ${brand.border} hover:bg-slate-50 transition ${brand.ring}`}
                  title="Chơi lại từ đầu"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaSyncAlt /> Chơi lại
                  </span>
                </button>

                <button
                  onClick={onComplete}
                  className={`px-6 py-3 rounded-full font-semibold ${brand.primary} transition ${brand.ring}`}
                  title="Đi tới phần diễn biến cuối"
                >
                  Xem diễn biến cuối cùng →
                </button>

                <button
                  onClick={handleExportPDF}
                  className={`px-5 py-3 rounded-full font-semibold border ${brand.border} hover:bg-slate-50 transition ${brand.ring}`}
                  title="Xuất kết quả"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaFilePdf /> Xuất kết quả
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
