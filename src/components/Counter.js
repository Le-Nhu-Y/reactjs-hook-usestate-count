import {useState} from "react"
function Counter(){
    let [count1, setCount1] = useState(0)  
    const handleClick1 = () => {
        const newValue1 = count1 +1;
        setCount1(newValue1)
    };

    let [count2, setCount2] = useState(0)  
    const handleClick2 = () => {
        const newValue2 = count2 +2;
        setCount2(newValue2)
    };
    return(
        <>
            <div>
                Gia tri 1: {count1}
                <div>
                    <button onClick={handleClick1}>Add 1</button>
                </div>
            </div>
            <div>
                Gia tri 2: {count2}
                <div>
                    <button onClick={handleClick2}>Add 2</button>
                </div>
            </div>
        </>
    )
};

export default Counter;