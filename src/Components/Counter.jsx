import { useState } from "react";


const Counter = () => {
    const addValue = () => {
        if (counter < 20) {
            setCounter(counter + 1)
        } else {
            setCounter(counter)
            console.log("You have reached your limit");
            let mylimit = document.querySelector("#limit").innerHTML = `You have reached your limit ${counter}`
            console.log(mylimit);
        }
    }
    const removeValue = () => {
        if (counter <= 0) {
            document.querySelector("#limit").innerHTML = "you cannot go to - value  "
            console.log("you cannot go down more")
        } else {
            setCounter(counter - 1)
        }
    }
    const reset = () => {
        document.querySelector("#limit").innerHTML = ""
        setCounter(counter = 0)
    }
    let [counter, setCounter] = useState(0)
    return (
        <div>
            <div style={{ margin: "auto", display: "block", textAlign: "center", padding: '0px 10px', }}>
                <h1>Hello React App</h1>
                <h1>Counter Value {counter}</h1>
                <h2 id="limit"></h2>
                <button onClick={addValue}>Add</button><br />
                <button onClick={removeValue}>Remove</button><br />
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;