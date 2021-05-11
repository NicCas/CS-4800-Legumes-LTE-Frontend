import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export default class HandbasketTable extends React.Component {
  state = {
    handbasket: [],
    total: 0,
    remove: null,
  };

  componentDidMount() {
    axios
      .get(`https://chickpeaapi.glitch.me/cart`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        var running_total = 0;
        for (var item of data) {
          running_total +=
            (item.Price.$numberDecimal
              ? item.Price.$numberDecimal
              : item.Price) * item.Quantity;
        }
        this.setState({ handbasket: data, total: running_total });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeItem(id) {
    axios(`https://chickpeaapi.glitch.me/cart/remove`, {
      method: "post",
      data: {
        Item_ID: id,
      },
    }).then((res) => {
      console.log(res.data);
      var new_handbasket = [];
      var to_remove;
      for (var item of this.state.handbasket) {
        if (item.Item_ID !== id) new_handbasket.push(item);
        else to_remove = item;
      }
      var new_total =
        this.state.total - to_remove.Price.$numberDecimal * to_remove.Quantity;
      this.setState({ handbasket: new_handbasket, total: new_total });
    });
  }

  render() {
    return (
      <div class="handbasket-contents">
        <table id="handbasket-table">
          <thead>
            <tr>
              <th id="product-column">Product</th>
              <th id="store-column">Store</th>
              <th id="price-column">Price</th>
              <th id="quantity-column">Quantity</th>
              <th id="subtotal-column">Subtotal</th>
              <th id="remove"></th>
            </tr>
          </thead>
          {this.state.handbasket.map((item) => (
            <tr>
              <td>
                <div class="product-image">
                  <img src={item.Image_URL} width="150px" height="150px"></img>
                </div>
                <div class="product-name">{item.Item_Name}</div>
              </td>
              <td>{item.Store_Name}</td>
              <td>
                $
                {item.Price.$numberDecimal
                  ? item.Price.$numberDecimal
                  : item.Price}
              </td>
              <td>{item.Quantity}</td>
              <td>
                $
                {(item.Price.$numberDecimal
                  ? item.Price.$numberDecimal
                  : item.Price) * item.Quantity}
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => this.removeItem(item.Item_ID)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div id="total">
          <b>Total: ${this.state.total.toFixed(2)}</b>
        </div>
      </div>
    );
  }
}
