import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RadarGame from "../components/RadarGame";

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const gameplayRef = useRef(null); // 👉 tạo ref để cuộn tới phần gameplay

  const handleStartGame = () => {
    console.log("Starting game...");
    setIsGameStarted(true);

    // Thêm một chút delay để phần gameplay render xong rồi mới scroll
    setTimeout(() => {
      gameplayRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  // Auto scroll khi phần gameplay xuất hiện (trường hợp re-render)
  useEffect(() => {
    if (isGameStarted && gameplayRef.current) {
      gameplayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isGameStarted]);

  return (
    <>
      {/* Section Intro */}
      <section
        id="game"
        className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 text-sm tracking-widest text-yellow-400 uppercase font-semibold"
          >
            Trải Nghiệm Tương Tác • Lịch Sử Việt Nam
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white mb-6"
          >
            Radar Bắt B-52
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Thử Thách Trên Bầu Trời Hà Nội
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Trải nghiệm vai trò sĩ quan radar, phát hiện và bắn rơi B-52 trong 12
            ngày đêm lịch sử năm 1972. Hãy thử sức với mini-game này!
          </motion.p>

          {!isGameStarted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex gap-4 justify-center"
            >
              <button
                onClick={handleStartGame}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Bắt Đầu Chơi
              </button>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Section Gameplay */}
      {isGameStarted && (
        <section
          ref={gameplayRef} // 👉 ref để scroll tới đây
          id="gameplay"
          className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-8">
                Trận Chiến Bắt Đầu!
              </h2>
              <RadarGame />
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
