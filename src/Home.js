import React from "react";

export default function Home() {
    return (
        <div className = ".App-header">
            <h2>Lambda Eats</h2>
            <button>Home</button>
            <button Link to = "/Form">Pizza!</button>
        </div>
    );
}