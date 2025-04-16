'use client'
import { useEffect, useState } from 'react';
type props = {
    isNumber: string;
    id: string;
    name: string;
    type: string;
}
const Input = ({ type, id, isNumber }: props) => {

    useEffect(() => {
        console.log(">>>>>ref>>>", isNumber)
    }, [isNumber])
    return (
        <div >
            <input type={type} style={{
                margin: '8%',
                width: "80%",
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                background: 'gray'
            }}
                readOnly
                value={isNumber} />
        </div >)
};
export { Input }