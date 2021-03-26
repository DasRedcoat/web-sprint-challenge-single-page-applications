import React from "react";
import Form from "./Form"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function Home() {
    return (
        <div className = ".App-header">
            <h2>Lambda Eats</h2>
            <button Link to='/Home'>Home</button>
            <button Link to='/Form'>Pizza!</button>
        </div>
    );
}