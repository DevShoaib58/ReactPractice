import React from "react";

const RandomNumber = () => {
  return (
    <div>
      <h2>Random Number: {Math.floor(Math.random() * 10) + 1}</h2>
    </div>
  );
};

export default RandomNumber;
