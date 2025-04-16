'use client'
import { useEffect, useState, MouseEvent } from "react"
type props = {
    isNumber: string;
    setIsNumber: React.Dispatch<React.SetStateAction<string>>;
}

export function NumberKey({ isNumber, setIsNumber }: props) {
    const [numberButton, setNumberButton] = useState(["ac", "=", "", "<=", 1, 2, 3, "/", 4, 5, 6, "X", 7, 8, 9, "+", ".", 0, "00", "-"]);
    const [calculator, setCalculator] = useState("");
    let data = "";
    const handleCalculator = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        setIsNumber(prev => {
            if (Number(value) <= 9) {
                data += value;
                return prev + value;

            } else if (value === "ac") {
                return "";

            } else if (value === "=") {
                console.log(">>>>>------------------------------->ddd>")

                let tot = eval(prev)
                console.log(">>>>>>ddd>", tot)
                console.log("prev", prev)
                return String(tot);

            } else {
                data += value;
                return prev + value;

            }
        })
    }


    return (
        <div style={{
            margin: "50px",
            display: "grid",
            gridTemplateRows: "1fr ",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}>
            {numberButton.map((key, rowIdx) => (
                <button style={{
                    margin: '8%',
                    width: '80%',
                    height: '40px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0px', // 네모
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
                    key={rowIdx}
                    value={key}
                    onClick={handleCalculator}
                >
                    {key}
                </button>

            ))}
        </div>
    )
}