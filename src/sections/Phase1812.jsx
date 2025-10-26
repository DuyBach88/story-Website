// ĐÃ CHUYỂN SANG PHASE2612 – sẵn sàng cập nhật cinematic HUMAN DEEP
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Phase1812Block1 from "./Phase1812Block1";
import Phase1812Block2Step1 from "./Phase1812Block2Step1";
import Phase1812Block2Step2 from "./Phase1812Block2Step2";

export default function Phase1812({ onNextPhase2612 }) {
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
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            <Phase1812Block1 onNext={() => handleNext(2)} tone="cinematic" />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            <Phase1812Block2Step1 onNext={() => handleNext(3)} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            <Phase1812Block2Step2 onNext={onNextPhase2612} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
