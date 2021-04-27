import React from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true;

export default class HandbasketTable extends React.Component{
    state = {
        handbasket: [],
        total: 0,
      };
    
      componentDidMount() {
        axios
          .get(`https://chickpeaapi.glitch.me/cart`)
          .then((res) => {
            const data = res.data;
            var running_total = 0;
            for (var item of data) {
              running_total +=
                parseFloat(item.Price.$numberDecimal) * item.Quantity;
            }
            this.setState({ handbasket: data, total: running_total });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render(){
        return(
            <div class="handbasket-contents">
            <table id="handbasket-table">
                <thead>
                <tr>
                    <th id="product-column">Product</th>
                    <th id="store-column">Store</th>
                    <th id="price-column">Price</th>
                    <th id="quantity-column">Quantity</th>
                    <th id="subtotal-column">Subtotal</th>
                </tr>
                </thead>
                {this.state.handbasket.map((item) => (
                <tr>
                    <td>
                    <div class="product-image">
                        <img
                        src={item.Image_URL}
                        width="150px"
                        height="150px"
                        ></img>
                    </div>
                    <div class="product-name">{item.Item_Name}</div>
                    </td>
                    <td>{item.Store_Name}</td>
                    <td>${item.Price.$numberDecimal}</td>
                    <td>{item.Quantity}</td>
                    <td>${item.Price.$numberDecimal * item.Quantity}</td>
                </tr>
                ))}
            </table>
            <div id="total">
                <b>Total: ${this.state.total}</b>
            </div>
            </div>
        );
    }
}