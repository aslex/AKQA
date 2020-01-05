import React, { Component } from "react";

export default class Cart extends Component {
  state = {
    items: [{}]
  };

  componentDidMount() {
    this.setState(
      {
        items: [
          {
            name: "Cotton T-Shirt",
            size: "Medium",
            price: 1.99,
            qty: 1
          },
          {
            name: "Baseball Cap",
            size: "One Size",
            price: 2.99,
            qty: 1
          },
          {
            name: "Swim Shorts",
            size: "Medium",
            price: 3.99,
            qty: 1
          }
        ]
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleChange = event => {
    const updatedItems = [...this.state.items].map(el => {
      if (el.name === event.target.name) {
        el.qty = event.target.value;
        return el;
      }
      return el;
    });

    this.setState(
      {
        items: updatedItems
      },
      () => {
        console.log("UPDTAED", this.state);
      }
    );
  };

  render() {
    const cartItems = this.state.items.map(el => {
      return (
        <tr key={el.name}>
          <td id="item">
            <label htmlFor="qty">
              {el.name}, {el.size}
            </label>
          </td>
          <td className="price">£{el.price}</td>
          <td className="qty">
            <input
              onChange={this.handleChange}
              type="number"
              name={el.name}
              id="qty"
              placeholder="1"
              min="0"
              max="10"
            />
          </td>
          <td className="cost">£{(el.price * el.qty).toFixed(2)}</td>
          <td className="delete">
            <img src="" alt="trash bin" />
          </td>
        </tr>
      );
    });
    const subtotal = [...this.state.items].reduce((acc, el) => {
      let cost = parseFloat(el.price * el.qty);
      return (acc += cost);
    }, 0);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
        <h4>SUBTOTAL: {subtotal.toFixed(2)}</h4>
      </>
    );
  }
}
