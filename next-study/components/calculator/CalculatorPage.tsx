'use client'
import { useState } from "react";
import { Input } from "./Input";
import { NumberKey } from "./NumberKey";

export function CalculatorPage() {
    const [isNumber, setIsNumber] = useState("");

    return (

        <div style={{ backgroundColor: "orange", width: "30%", height: "700px", position: 'absolute', zIndex: -1 }}>

            <Input id="number" name="number" type="text" isNumber={isNumber}>
            </Input>

            <NumberKey isNumber={isNumber} setIsNumber={setIsNumber}></NumberKey>
        </div>

    )
}