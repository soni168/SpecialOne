import React, { useState } from "react";
import "./App.css";

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [showLove, setShowLove] = useState(false);

  const handleYes = () => {
    // Directly go to love page if first Yes click
    if (yesCount === 0 && noCount === 0) {
      setShowLove(true);
    } else {
      setYesCount(prev => prev + 1); 
      if (yesCount + 1 < 5) {
        setShowLove(true);
      }
    }
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setYesCount(prev => prev + 0.2); // Yes grows only when No clicked
  };

  const showNoButton = noCount < 5;

  if (showLove) {
    return (
      <div className="love-screen">
        <div className="sparkles">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: `${4 + Math.random() * 7}px`,
                height: `${4 + Math.random() * 7}px`,
                backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
              }}
            ></div>
          ))}
        </div>
        <h1> Nonna I love you 3000 💋✨</h1>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmM0ZXFkYzY5YjJvaDAyaXB4c2xyMDd0ejV3dXJtenI3c214NWwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"
          alt="cute hug"
          className="hug-gif"
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Will you be my Valentine(Pati)? 💖</h1>
      <div className="buttons">
        <button
          className="yes-btn"
          style={{ transform: `scale(${1 + yesCount * 0.1})` }}
          onClick={handleYes}
        >
          Yes(Please)
        </button>

        {showNoButton && (
          <button
            className="no-btn"
            style={{ transform: `scale(${Math.max(0.3, 1 - noCount * 0.1)})` }}
            onClick={handleNo}
          >
            No(Daba k dikha)
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
