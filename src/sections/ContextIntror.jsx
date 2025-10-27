import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function ContextIntror({ nextId = "context-detail" }) {
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/assets/siren.mp3");
    audio.loop = true;
    audio.volume = 1;
    audioRef.current = audio;
    return () => {
      try {
        audio.pause();
        audio.src = "";
      } catch {}
    };
  }, []);

  const handleStart = async () => {
    const scrollToNextSection = () => {
      const el = document.getElementById(nextId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    try {
      if (audioRef.current && !muted) {
        await audioRef.current.play();
        // Fade-in âm thanh nhẹ (Netflix style)
        let v = 0;
        const fadeIn = setInterval(() => {
          if (audioRef.current) {
            v += 0.03;
            audioRef.current.volume = Math.min(v, 0.15);
            if (v >= 0.15) clearInterval(fadeIn);
          }
        }, 50);
      }

      setStarted(true);

      // Delay khoảng 1.2s rồi tự scroll cinematic
      setTimeout(scrollToNextSection, 1200);
    } catch (error) {
      console.error("Lỗi phát âm thanh:", error);
      setTimeout(scrollToNextSection, 1200); // fallback vẫn scroll
    }
  };

  const toggleMute = async () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (!audioRef.current) return;
    audioRef.current.muted = nextMuted;
    if (!nextMuted && started) {
      try {
        await audioRef.current.play();
      } catch {}
    }
  };

  return (
    <section
      id="context"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 40px rgba(239,68,68,0.6), 0 0 80px rgba(234,88,12,0.4);
          }
          50% { 
            box-shadow: 0 0 60px rgba(239,68,68,1), 0 0 120px rgba(234,88,12,0.6), 0 0 160px rgba(220,38,38,0.3);
          }
        }
        @keyframes shockwave {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-60px) translateX(var(--tx)); opacity: 0; }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(251,191,36,0.4), 0 0 40px rgba(251,146,60,0.2); }
          50% { text-shadow: 0 0 40px rgba(251,191,36,0.8), 0 0 60px rgba(251,146,60,0.5), 0 0 80px rgba(234,88,12,0.3); }
        }
        @keyframes text-glow-red {
          0%, 100% { 
            text-shadow: 0 0 30px rgba(239,68,68,0.8), 0 0 50px rgba(234,88,12,0.6);
          }
          50% { 
            text-shadow: 0 0 50px rgba(239,68,68,1), 0 0 80px rgba(234,88,12,0.8), 0 0 100px rgba(220,38,38,0.5);
          }
        }
        @keyframes fall {
          0% { transform: translateY(-50px); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        .orb-core {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .shockwave {
          animation: shockwave 2s ease-out infinite;
        }
        .particle {
          animation: float-up 2.5s ease-out infinite;
        }
        .falling-bomb {
          animation: fall 3s linear infinite;
        }
        .title-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        .red-glow {
          animation: text-glow-red 1.5s ease-in-out infinite;
        }
        .arrow-bounce {
          animation: bounce-arrow 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Falling bombs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`bomb-${i}`}
          className="absolute w-1 h-10 bg-gradient-to-b from-orange-500 to-transparent rounded-full falling-bomb"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Sound Button */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-800/50 backdrop-blur-md border border-amber-400/50 flex items-center justify-center hover:scale-110 hover:bg-slate-800/70 transition-all"
        style={{
          boxShadow: "0 0 30px rgba(251,191,36,0.3)",
        }}
        aria-label="Toggle Sound"
      >
        {muted ? (
          <FaVolumeMute className="text-amber-400 text-xl" />
        ) : (
          <FaVolumeUp className="text-amber-400 text-xl" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-30 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="text-center max-w-5xl w-full">
          {/* Red Orb with shockwaves */}
          <div className="mb-12 flex justify-center relative">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-32 h-32 rounded-full border-2 border-red-500 shockwave"
                style={{
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}

            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-orange-600 orb-core">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-300 to-red-500" />
            </div>
          </div>

          {/* Brand */}
          <p
            className="text-red-500 text-sm tracking-[0.5em] uppercase font-light mb-6"
            style={{
              textShadow: "0 0 20px rgba(239,68,68,0.8)",
            }}
          >
            BAODONG
          </p>

          {/* Main Title */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 title-glow"
            style={{
              background:
                "linear-gradient(180deg, #fbbf24 0%, #f59e0b 50%, #dc2626 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Bầu Trời Hà Nội
          </h1>

          {/* Subtitle */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16"
            style={{
              background: "linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(251,191,36,0.4)",
            }}
          >
            12 Ngày Đêm
          </h2>

          {/* Quote Box */}
          <div
            className="relative mb-20 px-8 py-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-red-950/40 via-orange-950/30 to-yellow-950/40 border border-orange-500/40"
            style={{
              boxShadow: "0 0 60px rgba(234,88,12,0.3)",
            }}
          >
            {/* Explosion particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full particle"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${30 + Math.random() * 40}%`,
                  "--tx": `${(Math.random() - 0.5) * 60}px`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}

            <div className="relative flex items-start justify-center gap-4 mb-6">
              <span className="text-6xl text-orange-400/80 font-serif leading-none">
                "
              </span>
              <div className="flex-1 max-w-3xl">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span
                    className="block mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 20px rgba(251,191,36,0.4)",
                    }}
                  >
                    Mỹ nhất định thua...
                  </span>

                  <span
                    className="block mb-3 text-orange-400"
                    style={{
                      textShadow: "0 0 30px rgba(251,146,60,0.6)",
                    }}
                  >
                    nhưng nó chỉ chịu thua
                  </span>

                  <span className="block text-red-500 red-glow">
                    sau khi Hà Nội bị san phẳng
                  </span>
                </p>
              </div>
              <span className="text-6xl text-orange-400/80 font-serif leading-none">
                "
              </span>
            </div>

            <p className="text-base sm:text-lg text-amber-300/80 italic font-light">
              — Tổng thống Richard Nixon, Washington D.C., tháng 12/1972
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-40 flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
            <button
              onClick={handleStart}
              disabled={started}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              style={{
                boxShadow:
                  "0 0 40px rgba(239,68,68,0.6), 0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaPlay className="text-base" />
                {started ? "Đang kể chuyện..." : "Bắt đầu câu chuyện"}
                <span className="text-xl">→</span>
              </span>
            </button>

            <button
              className="group px-10 py-5 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg backdrop-blur-sm hover:bg-amber-400/10 hover:scale-105 transition-all"
              style={{
                boxShadow: "0 0 20px rgba(251,191,36,0.3)",
              }}
            >
              Xem chứng cứ lịch sử
            </button>
          </div>
        </div>
      </div>

      {/* Hanoi Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <svg
          viewBox="0 0 1200 140"
          className="absolute bottom-0 w-full h-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="building" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          {[...Array(25)].map((_, i) => {
            const x = i * 48;
            const height = 40 + Math.random() * 80;
            const width = 30 + Math.random() * 20;
            return (
              <rect
                key={i}
                x={x}
                y={140 - height}
                width={width}
                height={height}
                fill="url(#building)"
                opacity={0.7 + Math.random() * 0.3}
              />
            );
          })}
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
        <p className="text-xs tracking-[0.4em] uppercase text-amber-300/80 font-light">
          Cuộn xuống để bắt đầu
        </p>
        <div className="arrow-bounce">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-amber-400"
            style={{
              filter: "drop-shadow(0 0 10px rgba(251,191,36,0.6))",
            }}
          >
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </section>
  );
}
