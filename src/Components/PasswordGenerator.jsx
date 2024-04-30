import { useState } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    return (
        <div>
            <h1 className=" text-lg-4xl text-center ">Password Generator</h1>
        </div>
    );
};

export default PasswordGenerator;