import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="basket">
        <header>
          <h1>AKQA</h1>
        </header>
        <h2>Your Basket</h2>
        <Cart />
      </div>

      <footer>
        <p>
          © <strong>2013 AKQA Ltd.</strong> Registered in England
        </p>
      </footer>
    </>
  );
}

export default App;
