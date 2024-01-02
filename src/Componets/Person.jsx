import React from "react";

const Person = () => {
  return (
    <div>
      <h1>Hello Person </h1>
      <h2>Random Number: {Math.floor(Math.random() * 10) + 1}</h2>
    </div>
  );
};

export default Person;
