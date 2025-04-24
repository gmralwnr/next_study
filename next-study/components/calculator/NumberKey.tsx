'use client'
import { useEffect, useState, MouseEvent, SetStateAction } from "react"
type props = {
    isNumber: string;
    setIsNumber: React.Dispatch<SetStateAction<string>>;
}

export function NumberKey({ isNumber, setIsNumber }: props) {
    const [numberButton, setNumberButton] = useState(["ac", "=", "", "<=", 1, 2, 3, "/", 4, 5, 6, "X", 7, 8, 9, "+", ".", 0, "00", "-"]);
    const [calculator, setCalculator] = useState("");
    let data = "";
    const handleCalculator = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;

        setIsNumber(prev => {
            if (Number(value) <= 9) {
                console.log(prev)

                if (prev === '0') {
                    return value;
                }
                return prev + value;

            } else if (value === "ac") {
                return "";

            } else if (value === "=") {
                try {
                    let prev2 = prev.replace("X", "*")

                    let tot = eval(prev2)
                    console.log(tot)
                    return String(tot);

                } catch (error) {
                    return 'Nan'
                }
            } else if (value === "<=") {
                return isNumber.replace(prev, "");

            } else {
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