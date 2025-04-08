import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ConfettiWrapper = ({ children }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <div
      onMouseEnter={() => setShowConfetti(true)}
      onMouseLeave={() => setShowConfetti(false)}
      className="min-h-screen"
    >
      {showConfetti && (
        <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />
      )}
      {children}
    </div>
  );
};

export default ConfettiWrapper;
