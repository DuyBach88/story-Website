import React, { useRef, useEffect, useState, useCallback } from 'react';

const RadarGame = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const [planeCount, setPlaneCount] = useState(0);
  const [bullets, setBullets] = useState(2);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Quiz questions about "Điện Biên Phủ trên không"
  const originalQuizzes = [
    {
      question: 'Ai là người lãnh đạo cuộc kháng chiến chống Pháp tại Điện Biên Phủ?',
      options: ['A. Võ Nguyên Giáp', 'B. Hồ Chí Minh', 'C. Trường Chinh', 'D. Lê Duẩn'],
      correct: "A"
    },
    {
      question: "Chiến dịch Điện Biên Phủ trên không diễn ra từ ngày nào đến ngày nào?",
      options: ["A: 18-29/12/1972", "B: 1-12/12/1972", "C: 25-31/12/1972"],
      correct: "A"
    },
    {
      question: "Số tấn bom Mỹ thả trong 12 ngày đêm?",
      options: ["A: 10.000 tấn", "B: 20.000 tấn", "C: 5.000 tấn"],
      correct: "B"
    },
    {
      question: "Chủ tịch Hồ Chí Minh đưa ra dự đoán 'Mỹ chỉ chịu thua sau khi thua trên bầu trời Hà Nội' vào năm nào?",
      options: ["A: 1965", "B: 1967", "C: 1968"],
      correct: "B"
    },
    {
      question: "Chiến thắng 'Điện Biên Phủ trên không' chứng minh điều gì về tư tưởng Hồ Chí Minh?",
      options: [
        "A: Tư tưởng Hồ Chí Minh về chiến tranh nhân dân và niềm tin tất thắng là đúng đắn",
        "B: Mỹ mạnh hơn nên Việt Nam phải nhượng bộ",
        "C: Cần dựa hoàn toàn vào viện trợ nước ngoài"
      ],
      correct: "A"
    },
    {
      question: "Theo đường lối của Đảng, yếu tố nào quyết định thắng lợi trong cuộc kháng chiến chống Mỹ?",
      options: [
        "A: Ý chí, tinh thần toàn dân đoàn kết kháng chiến",
        "B: Vũ khí tối tân do nước ngoài viện trợ",
        "C: Sức mạnh không quân và hải quân"
      ],
      correct: "A"
    },
    {
      question: "Sau chiến thắng 'Điện Biên Phủ trên không', Mỹ buộc phải làm gì?",
      options: [
        "A: Ký Hiệp định Paris, chấm dứt chiến tranh ở Việt Nam",
        "B: Tiếp tục leo thang chiến tranh",
        "C: Đưa thêm quân vào miền Nam"
      ],
      correct: "A"
    },
    {
      question: "Tổng số lượt bay B-52 trong chiến dịch?",
      options: ["A: 741", "B: 500", "C: 1000"],
      correct: "A"
    },
    {
      question: "Loại vũ khí chủ lực của Việt Nam dùng để bắn rơi B-52 là gì?",
      options: ["A: Tên lửa đất đối không SAM-2", "B: Pháo cao xạ 57mm", "C: Súng phòng không 12,7mm"],
      correct: "A"
    },
    {
      question: "Chiếc B-52 đầu tiên bị bắn rơi tại Hà Nội vào ngày nào?",
      options: ["A: 18/12/1972", "B: 20/12/1972", "C: 22/12/1972"],
      correct: "B"
    }
  ];

  // Shuffle function
  const shuffle = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffled quizzes state
  const [shuffledQuizzes, setShuffledQuizzes] = useState(shuffle(originalQuizzes));

  // Game state ref
  const gameState = useRef({
    planes: [],
    particles: [],
    radarAngle: 0,
    lastSpawn: 0,
    spawnInterval: 2000,
    radarRange: 250,
    maxPlanes: 5
  });

  // Function to get random plane outside radar
  const getRandomPlaneOutsideRadar = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    let x, y;
    do {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
    } while (isInRadarRange(x, y, canvas));

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dx = centerX - x;
    const dy = centerY - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = 1.8 + Math.random() * 0.6; // 1.8-2.4
    const vx = (dx / dist) * speed;
    const vy = (dy / dist) * speed;

    return {
      x,
      y,
      vx,
      vy,
      size: 15,
      slowed: false,
      enteredAt: 0
    };
  }, []);

  // Shoot function
  const shoot = useCallback((e) => {
    if (bullets <= 0 || gameComplete || gameOver || showQuiz) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    let hit = false;
    gameState.current.planes = gameState.current.planes.filter(plane => {
      const dx = clickX - plane.x;
      const dy = clickY - plane.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < plane.size * 2 && isInRadarRange(plane.x, plane.y, canvas)) {
        hit = true;
        for (let i = 0; i < 30; i++) {
          gameState.current.particles.push({
            x: plane.x,
            y: plane.y,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.5) * 12,
            life: 45,
            maxLife: 45
          });
        }
        return false;
      }
      return true;
    });

    if (hit) {
      setPlaneCount(prev => {
        const newCount = prev + 1;
        if (newCount >= 10) {
          setGameComplete(true);
        }
        return newCount;
      });
    }

    setBullets(prev => {
      const newBullets = prev - 1;
      if (newBullets === 0) {
        setShowQuiz(true);
      }
      return newBullets;
    });
  }, [bullets, gameComplete, gameOver, showQuiz]);

  const isInRadarRange = (x, y, canvas) => {
    if (!canvas) return false;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= gameState.current.radarRange;
  };

  const countPlanesInRadar = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;
    return gameState.current.planes.filter(plane => isInRadarRange(plane.x, plane.y, canvas)).length;
  };

  const handleQuizSubmit = () => {
    const correct = shuffledQuizzes[currentQuiz].correct === quizAnswer;
    if (correct) {
      setFeedback('Đúng! Nạp 2 đạn.');
      setTimeout(() => {
        setBullets(2);
        setShowQuiz(false);
        setCurrentQuiz(prev => (prev + 1) % shuffledQuizzes.length);
        setQuizAnswer('');
        setFeedback('');
      }, 1000);
    } else {
      setFeedback('Sai! Bạn đã thua cuộc.');
      setTimeout(() => {
        setShowQuiz(false);
        setGameOver(true);
        setQuizAnswer('');
        setFeedback('');
      }, 2000);
    }
  };

  const restartGame = () => {
    setPlaneCount(0);
    setBullets(2);
    setGameComplete(false);
    setGameOver(false);
    setShowQuiz(false);
    setCurrentQuiz(0);
    setQuizAnswer('');
    setFeedback('');
    setShuffledQuizzes(shuffle(originalQuizzes));
    gameState.current = {
      planes: [],
      particles: [],
      radarAngle: 0,
      lastSpawn: 0,
      spawnInterval: 2000,
      radarRange: 250,
      maxPlanes: 5
    };
  };

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radar circle
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, gameState.current.radarRange, 0, Math.PI * 2);
      ctx.stroke();

      // Always update and draw radar sweep, even when paused
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      const endX = centerX + Math.cos(gameState.current.radarAngle) * gameState.current.radarRange;
      const endY = centerY + Math.sin(gameState.current.radarAngle) * gameState.current.radarRange;
      ctx.lineTo(endX, endY);
      ctx.stroke();
      if (!showQuiz && !gameComplete && !gameOver) {
        gameState.current.radarAngle += 0.06;
        if (gameState.current.radarAngle > Math.PI * 2) {
          gameState.current.radarAngle -= Math.PI * 2;
        }
      }

      if (!showQuiz && !gameComplete && !gameOver) {
        // Spawn
        if (Date.now() - gameState.current.lastSpawn > gameState.current.spawnInterval &&
            gameState.current.planes.length < gameState.current.maxPlanes &&
            countPlanesInRadar() < 2) {
          const newPlane = getRandomPlaneOutsideRadar();
          if (newPlane) {
            gameState.current.planes.push(newPlane);
          }
          gameState.current.lastSpawn = Date.now();
        }

        // Update planes
        gameState.current.planes = gameState.current.planes.filter(plane => {
          const oldIn = isInRadarRange(plane.x, plane.y, canvas);
          plane.x += plane.vx;
          plane.y += plane.vy;
          const newIn = isInRadarRange(plane.x, plane.y, canvas);

          // Slow down once when entering radar
          if (!plane.slowed && newIn) {
            plane.vx *= 0.35;
            plane.vy *= 0.35;
            plane.slowed = true;
            plane.enteredAt = Date.now();
          }

          // No disappear after time, only if shot or perhaps out of canvas, but with bounce

          // Bounce on edges
          if (plane.x < plane.size) {
            plane.x = plane.size * 2 - plane.x;
            plane.vx = -plane.vx;
          } else if (plane.x > canvas.width - plane.size) {
            plane.x = (canvas.width - plane.size) * 2 - plane.x;
            plane.vx = -plane.vx;
          }
          if (plane.y < plane.size) {
            plane.y = plane.size * 2 - plane.y;
            plane.vy = -plane.vy;
          } else if (plane.y > canvas.height - plane.size) {
            plane.y = (canvas.height - plane.size) * 2 - plane.y;
            plane.vy = -plane.vy;
          }

          return true; // Keep plane unless shot
        });

        // Particles update
        gameState.current.particles = gameState.current.particles.filter(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.97;
          p.vy *= 0.97;
          p.life--;
          return p.life > 0;
        });
      }

      // Draw planes only if in radar range
      gameState.current.planes.forEach(plane => {
        if (isInRadarRange(plane.x, plane.y, canvas)) {
          ctx.fillStyle = '#ff4444';
          ctx.beginPath();
          ctx.arc(plane.x, plane.y, plane.size, 0, Math.PI * 2);
          ctx.fill();

          // Trail
          ctx.strokeStyle = 'rgba(255, 100, 100, 0.4)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(plane.x - plane.vx * 8, plane.y - plane.vy * 8);
          ctx.lineTo(plane.x, plane.y);
          ctx.stroke();
        }
      });

      // Particles draw
      gameState.current.particles.forEach(p => {
        ctx.fillStyle = `rgba(255, 150, 50, ${p.life / p.maxLife})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener('click', shoot);
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener('click', shoot);
    };
  }, [shoot, getRandomPlaneOutsideRadar]);

  if (gameOver) {
    return (
      <div className="text-center p-8 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">😞 Game Over!</h2>
        <p>Bạn đã trả lời sai câu hỏi. Hãy thử lại!</p>
        <button
          onClick={restartGame}
          className="mt-4 bg-white text-red-500 px-6 py-2 rounded font-bold hover:bg-gray-100"
        >
          Chơi lại
        </button>
      </div>
    );
  }

  if (gameComplete) {
    return (
      <div className="text-center p-8 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">🎉 Hoàn thành trò chơi!</h2>
        <p>Bạn đã bắn rơi 10 máy bay! Điện Biên Phủ trên không!</p>
        <button
          onClick={restartGame}
          className="mt-4 bg-white text-red-500 px-6 py-2 rounded font-bold hover:bg-gray-100"
        >
          Chơi lại
        </button>
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto p-8 bg-gray-800 rounded-lg shadow-2xl border-4 border-yellow-500">
      <div className="flex justify-between items-center mb-4 text-white text-xl font-bold">
        <span>Máy bay: {planeCount}/10</span>
        <span>Đạn: {bullets}</span>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-96 bg-gradient-to-b from-gray-800 to-navy-900 rounded border-2 border-green-500 cursor-crosshair"
      />
      <p className="text-white mt-4 text-center">Click vào máy bay đỏ để bắn! Chúng chậm lại trong radar.</p>

      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Câu hỏi nạp đạn:</h3>
            <p className="mb-4">{shuffledQuizzes[currentQuiz].question}</p>
            <div className="space-y-2 mb-4">
              {shuffledQuizzes[currentQuiz].options.map((opt, i) => (
                <label key={i} className="flex items-center p-2 border rounded hover:bg-gray-100 cursor-pointer">
                  <input
                    type="radio"
                    name="quiz"
                    value={opt[0]}
                    checked={quizAnswer === opt[0]}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                    className="mr-2 w-4 h-4"
                  />
                  {opt}
                </label>
              ))}
            </div>
            <button
              onClick={handleQuizSubmit}
              className="w-full bg-yellow-500 text-black py-2 px-4 rounded font-bold hover:bg-yellow-400 transition"
            >
              Trả lời
            </button>
            {feedback && (
              <p className={`mt-3 p-2 rounded font-bold text-center ${feedback.includes('Đúng') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                {feedback}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RadarGame;