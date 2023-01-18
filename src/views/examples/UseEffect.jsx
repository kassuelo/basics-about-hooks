import React, { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import SectionTitle from "./../../components/layout/SectionTitle";
function calcFatorial(n) {
    if (n < 0) return -1;
    if (parseInt(n) === 0) return 1;
    return calcFatorial(n - 1) * n;
}
function checkEvenOrOdd(n) {
    return n % 2 === 0 ? "Par" : "Ímpar";
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [evenOrOdd, setEvenOrOdd] = useState("");
    useEffect(
        function () {
            setFatorial(calcFatorial(number));
            setEvenOrOdd(checkEvenOrOdd(number));
        },
        [number]
    );

    useEffect(
        function () {
            if (fatorial > 1000000) {
                document.title = "Eita!!";
            }
        },
        [fatorial]
    );

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">
                        {fatorial < 0 ? "Não existe" : fatorial}
                    </span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">{number} é </span>
                    <span className="text red">{evenOrOdd}</span>
                </div>
            </div>
        </div>
    );
};

export default UseEffect;
