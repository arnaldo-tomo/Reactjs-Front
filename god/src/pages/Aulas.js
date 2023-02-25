import React, { useState, useEffect } from "react"

export default function Aula() {

    const [valor, setValor] = useState(0);
    function Incrimentar() {
        setValor(valor + 1);
    }

    useEffect(() => {
        console.log('useEffect');
    })


    return (
        <>
            <h1>VAlor: {valor}</h1>

            <button onClick={Incrimentar}>Incrimentar</button>
            <button>TSte</button>
        </>
    )
}