import React from 'react'
import axios from 'axios'
import ProgressBar from "react-bootstrap/ProgressBar";

export default class CurrentOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Delivery_ID: null,
          Handler_Name: "Handler",
          Purchased_Items: [],
          Time_Order_Placed: null
        };

        console.log(this.props);
    
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
      }

      componentDidUpdate(prevProps, prevState){
        if(prevProps.transporting !== this.props.transporting){
            console.log("props updated");
            this.state.Delivery_ID = this.props.transporting.Delivery_ID;
            console.log(this.state.Delivery_ID);
            axios("https://chickpeaapi.glitch.me/order-details", {
                data: {Delivery_ID: this.state.Delivery_ID},
                method: "post"
            })
            .then((res) => {
                console.log(res.data);
                this.setState({
                    Handler_Name: res.data.Handler_Name,
                    Purchased_Items: res.data.Purchased_Items,
                    Time_Order_Placed: this.props.transporting.Date
                })
            })
        }
      }

    render(){
        return(
            <div>
            <h3>Current Order</h3>
            <div id="order-info">
              <p>Order Number: #{this.props.transporting.Delivery_ID}</p>
              <ProgressBar animated variant="warning" now={20} />
              <p>Order Staus: Status</p>
              <p>Order Time: {this.props.transporting.Date}</p>
              <p>Handler: {this.state.Handler_Name} </p>
              <p>Delivery Address: {this.props.shippings.Street}, {this.props.shippings.City}, {this.props.shippings.State}, {this.props.shippings.Zip_Code}</p>
            </div>
            <table>
              <tr>
                <th class="product-column">Product</th>
                <th class="store-column">Store</th>
                <th class="price-column">Price</th>
                <th class="quantity-column">Quantity</th>
                <th class="subtotal-column">Subtotal</th>
              </tr>
              {this.state.Purchased_Items.map((item) => (
                <tr>
                    <td>{item.Item_Name}</td>
                    <td>Store</td>
                    <td>{item.Price}</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
              ))}
            </table>
            <div id="price-info">
              <p>Tax: ${(this.props.transporting.Total_Cost * .0825).toFixed(2)} </p>
              <p>Delivery Fee: $2.00 </p>
              <p>Tip: $2.50 </p>
              <br></br>
              <p>Total Price: ${(this.props.transporting.Total_Cost + (this.props.transporting.Total_Cost * .0825) + 4.50).toFixed(2)} </p>
            </div>            
            </div>
        )
    }
}