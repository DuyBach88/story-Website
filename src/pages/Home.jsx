// src/pages/Home.jsx

import React, { useState, useEffect } from "react";

// Các component chính của trang
import Hero from "../sections/Hero";
import ScrollHint from "../components/ScrollHint";
import ContextIntror from "../sections/ContextIntror.jsx";
import ContextDetail from "../sections/ContextDetail.jsx";
import PhaseTwo from "../sections/PhaseTwo.jsx";
import Game from "../sections/Game.jsx";
// Các component cho từng mốc thời gian và chuỗi phân tích
import Phase1812 from "../sections/Phase1812.jsx";
import Phase2612 from "../sections/Phase2612.jsx";
import FinalDaysSection from "../sections/FinalDaysSection.jsx";
import PhaseAnalysisBlock1 from "../sections/PhaseAnalysisBlock1.jsx";
import PhaseAnalysisBlock2 from "../sections/PhaseAnalysisBlock2.jsx";
import PhaseAnalysisBlock3 from "../sections/PhaseAnalysisBlock3.jsx";
import QuizSection from "../sections/QuizSection.jsx";
import StatisticsSection from "../sections/StatisticsSection.jsx";
import ParisAccordsSection from "../sections/ParisAccordsSection.jsx";
import ConclusionSection from "../sections/ConclusionSection.jsx";

export default function Home() {
  const [storyStep, setStoryStep] = useState(0);

  const handleJumpToStep = (step) => {
    setStoryStep(step);
  };

  const handleNextStep = () => {
    setStoryStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (storyStep > 0) {
      const element = document.getElementById("story-content");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [storyStep]);
  const handleContextFinish = () => {
    setStoryStep(1);
  };
  return (
    <>
      {/* Các phần này luôn hiển thị ở đầu trang */}
      <Hero />
      <ScrollHint />
      <ContextIntror nextId="context-detail" />
      {storyStep === 0 && <ContextDetail onNext={handleContextFinish} />}
      <PhaseTwo onJumpToStep={handleJumpToStep} />

      {/* Container cho nội dung động, giúp việc cuộn trang mượt mà */}
      <div id="story-content">
        {(() => {
          switch (storyStep) {
            // Mốc 18/12
            case 1:
              return <Phase1812 onNext={handleNextStep} />;

            // Mốc 26/12
            case 2:
              // Từ đây, người dùng có thể đi tiếp sang chuỗi phân tích
              return <Phase2612 onNextPhaseAnalysis={handleNextStep} />;

            // Mốc 29/12 (kết cuộc)
            case 3:
              // Từ đây, có thể đi tiếp sang phần số liệu
              return <FinalDaysSection onNext={handleNextStep} />;

            // Bắt đầu chuỗi phân tích và tổng kết (sau mốc 26/12)
            case 4:
              return <PhaseAnalysisBlock1 onNext={handleNextStep} />;
            case 5:
              return <PhaseAnalysisBlock2 onNext={handleNextStep} />;
            case 6:
              return <PhaseAnalysisBlock3 onNext={handleNextStep} />;
            case 7:
              return <QuizSection onComplete={handleNextStep} />;
            case 8:
              return <StatisticsSection onNext={handleNextStep} />;
            case 9:
              return <ParisAccordsSection onNext={handleNextStep} />;
            case 10:
              return <ConclusionSection />;

            default:
              return null;
          }
        })()}
      </div>
      <Game />
      {/*
      <Battle />
      <Victory /> */}
    </>
  );
}
