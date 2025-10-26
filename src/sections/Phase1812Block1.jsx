import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBullseye,
  FaBroadcastTower,
  FaPlane,
  FaChartLine,
  FaCrosshairs,
  FaSatelliteDish,
} from "react-icons/fa";

// ============================================
// Phase1812Block1 - Bối cảnh & Radar Visual
// ============================================
 export default function Phase1812Block1({ onNext }) {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <FaCrosshairs className="text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
              Đêm mở màn
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
            18/12/1972 — Cửa chiến lược đầu tiên được mở ra
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Trong thời khắc này, Mỹ không đơn thuần muốn "ném bom" — mà đang dò
            xem hệ thống phòng không của Hà Nội phản ứng thế nào trước một đòn
            áp lực ban đầu.
          </p>
        </motion.div>

        {/* Historical Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Boeing_B-52_dropping_bombs.jpg"
              alt="B-52 trong chiến dịch Điện Biên Phủ trên không"
              className="w-full h-auto"
            />
            <div className="bg-slate-900/90 p-4">
              <p className="text-sm text-slate-300">
                <strong className="text-amber-400">Ảnh lịch sử:</strong> Máy bay
                B-52 Stratofortress của Mỹ trong chiến dịch ném bom Hà Nội tháng
                12/1972
              </p>
            </div>
          </div>
        </motion.div>

        {/* Radar Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Radar container */}
            <div className="absolute inset-0 rounded-full bg-slate-900/80 border-2 border-green-500/30 overflow-hidden shadow-2xl shadow-green-500/20">
              {/* Concentric circles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-green-500/20"
                  style={{ inset: `${i * 18}px` }}
                />
              ))}

              {/* Crosshairs */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-500/30 transform -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-500/30 transform -translate-x-1/2" />

              {/* Rotating sweep line */}
              <motion.div
                className="absolute inset-0 origin-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-400/70 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>

              {/* Expanding radar waves */}
              {[0, 0.8, 1.6, 2.4].map((delay) => (
                <motion.div
                  key={delay}
                  className="absolute inset-0 rounded-full border-2 border-green-500/50"
                  animate={{ scale: [0, 1.8], opacity: [0.8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Enemy blips (B-52s) */}
              {[
                { top: "25%", left: "65%", delay: 0 },
                { top: "50%", left: "78%", delay: 0.5 },
                { top: "68%", left: "35%", delay: 1 },
                { top: "40%", left: "25%", delay: 1.5 },
              ].map((pos, idx) => (
                <React.Fragment key={idx}>
                  {/* Blip dot */}
                  <motion.div
                    className="absolute w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/60"
                    style={{ top: pos.top, left: pos.left }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: pos.delay,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Ping effect */}
                  <motion.div
                    className="absolute w-8 h-8 rounded-full border-2 border-red-500/60"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: pos.delay,
                      ease: "easeOut",
                    }}
                  />
                </React.Fragment>
              ))}
            </div>

            {/* Radar label */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-sm text-green-400 font-mono">
                RADAR TRACKING SYSTEM
              </p>
              <p className="text-xs text-slate-500">
                Hệ thống phát hiện mục tiêu
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <button
            onClick={onNext}
            className="group relative px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-full hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/50"
          >
            <span className="flex items-center gap-2">
              Phân tích chiến lược Mỹ
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Background effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
