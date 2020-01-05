import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="basket">
        <header>
          {(
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/AKQA-Logo.svg" />
          ) || <h1>AKQA</h1>}
        </header>
        <div className="intro">
          <h2>Your Basket</h2>
          <p>
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing your purchase.
          </p>
        </div>
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
