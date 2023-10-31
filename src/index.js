import React from "react";
import ReactDOM from "react-dom/client";

const numbers = [1, 2, 3, 4, 5, 6, 7]

const listItens = numbers.map((number, index) => <li key = {index}>{number}</li>)

const element = <ul>{listItens}</ul>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    element,
)