import React, { Component } from "react";
import axios from "axios";

export default class Cart extends Component {
  state = {
    items: [{}],
    purchaseSuccess: false
  };

  componentDidMount() {
    /*   here you can make a call to the backend to retrieve product info and/or items in a user's cart from a previous session   */
    this.setState({
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
          qty: 2
        },
        {
          name: "Swim Shorts",
          size: "Medium",
          price: 3.99,
          qty: 1
        }
      ]
    });
  }
  handleDelete = event => {
    console.log("handle delete! ", event.target.name);
    this.setState({
      items: this.state.items.filter(el => {
        return el.name !== event.target.name;
      })
    });
  };
  handleChange = event => {
    const updatedItems = [...this.state.items].map(el => {
      if (el.name === event.target.name) {
        el.qty = event.target.value;
        return el;
      }
      return el;
    });

    this.setState({
      items: updatedItems
    });
  };

  buyNow = event => {
    event.preventDefault();

    // here is the simulated backend call to make the purchase
    /*
    axios.post('postURLhere', {order: this.state.items})
    .then(res => {
        if(res){
          this.setState({
            purchaseSuccess: true
          })
        }
    }).catch(err => {
      console.log(err);
    })
    */

    // assume the puchase is successfull:
    this.setState({
      purchaseSuccess: true
    });
  };

  render() {
    const cartItems = this.state.items.map(el => {
      return (
        <tr key={el.name}>
          <td id="item">
            <label name={el.name} htmlFor="qty">
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
              value={el.qty}
              min="0"
              max="10"
            />
          </td>
          <td className="cost">£{(el.price * el.qty).toFixed(2)}</td>
          <td>
            <button
              type="button"
              onClick={this.handleDelete}
              className="delete"
            >
              <img
                name={el.name}
                src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png"
                alt="trash bin"
              />
            </button>
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
        {this.state.purchaseSuccess ? (
          <div className="success">We have received your order!</div>
        ) : (
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr id="title-row">
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>{cartItems}</tbody>

            <tfoot>
              <tr>
                <td colSpan="3">Subtotal</td>
                <td>£{subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3">VAT @ 20%</td>
                <td>£{(subtotal * 0.2).toFixed(2)}</td>
              </tr>

              <tr id="grand-total">
                <td colSpan="3">Total Cost</td>
                <td>£{(subtotal * 1.2).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        )}
        {this.state.items.length > 0 && !this.state.purchaseSuccess ? (
          <button id="buy-now" type="submit" onClick={this.buyNow}>
            Buy Now
          </button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}
