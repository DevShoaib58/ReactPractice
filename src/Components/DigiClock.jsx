import { useEffect, useState } from "react";

const DigiClock = () => {
    const [timer, setTimmer] = useState(new Date())
    useEffect(() => {
        const time = setInterval(() => {
            setTimmer(new Date())
        }, 1000);
        return () => clearInterval(time)
    }, [])

    return (
        <div>
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Digital Clock</h1>
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">{timer.toDateString()}</h1>
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">{timer.toLocaleTimeString()}</h1>
        </div>
    );
};

export default DigiClock;