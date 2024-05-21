import { useState } from "react";

const BgForBox = () => {
    const [color, setColor] = useState("black")
    return (
        <div className=" w-full h-full container text-center border-teal-100 p-10  m-auto" style={{ background: color }}>
            <h1>BackGround Color Changer</h1>
            <nav className=" p-4 m-4 bg-gray-400 rounded-2xl">
                <button className=" m-10 border-2 p-2 rounded-md" onClick={() => { setColor("pink") }}> Pink Color </button>
                <button className=" m-10 border-2 p-2 rounded-md" onClick={() => { setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`) }}> Random Color </button>
                <button className=" m-10 border-2 p-2 rounded-md" onClick={() => { setColor("green") }}> Green Color </button>
                <button className=" m-10 border-2 p-2 rounded-md" onClick={() => { setColor("red") }}> Red Color </button>
            </nav>
        </div>
    );
};

export default BgForBox;