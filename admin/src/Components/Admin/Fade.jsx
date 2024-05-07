import React, { useState } from "react";

const Fade = () => {
  const [divs, setDivs] = useState([
    { id: 1, isVisible: true },
    { id: 2, isVisible: true },
    { id: 3, isVisible: true },
  ]);

  const handleFadeOut = (id) => {
    setDivs((prevDivs) =>
      prevDivs.map((div) =>
        div.id === id ? { ...div, isVisible: false } : div
      )
    );
  };

  return (
    <div className="App">
      {divs.map((div) => (
        <div
          key={div.id}
          className={`fade-out ${div.isVisible ? "" : "fade-out-hidden"}`}
        >
          <h1>Element {div.id}</h1>
          {div.isVisible && (
            <button onClick={() => handleFadeOut(div.id)}>Fade Out</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fade;