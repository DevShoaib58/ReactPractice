import { useState } from "react";

import "./App.css";
import RandomNumber from "./Componets/RandomNumber";
import Props from "./Componets/Props";

function App() {
  return (
    <>
      <h1>Hello React App</h1>
      <RandomNumber />
      <Props name="Shoaib" age="27"></Props>
      <Props name="Talha" age="18"></Props>
      <Props name="Talha" age="18">
        My hobbies are Racing
      </Props>
      <Props name="Bilal" age="12"></Props>
    </>
  );
}

export default App;
