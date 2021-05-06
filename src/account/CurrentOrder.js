import React from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

var deliveryTime = 0;
/*
var timeReceived = 10000; //new Date('2021-04-29T03:24:00')

// Set the time of the active delivery for calculating the progress bar
// This should only be called once when the page is rendered
// This function may be modified to include travering the order array to find the active order
function setTimeReceived(activeDeliveryInfo) {
  timeReceived = activeDeliveryInfo.Date;
}

// Calculate the time percentage for the progress bar
function expectedDeliveryPercentage() {
  // Get the current time
  var today = new Date();
  var currentTime =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() / 60;
  console.log(currentTime);
  //const currentTime = Date.now();
  //console.log(currentTime.toString());

  // Calculate the number of minutes passed since the order was made
  // Just subtracting returns the time in milliseconds, so the floor of milliseconds/60,000 converts to minutes
  // For purposes of easy simming the dividing number can be changed to 1,000
  const timeElapsed = Math.floor((timeReceived - currentTime) / 60000);
  // Calculate the percentage of an hour that has ellapsed, rounded for nicer numbers
  const deliveryPercentage = Math.ceil((timeElapsed / 60) * 100);

  return deliveryPercentage;
}
*/

function incrementTime() {
  while (deliveryTime <= 0) {
    setTimeout(function () {
      if (deliveryTime <= 100) {
        deliveryTime += 10;
      } else {
        deliveryTime = 0;
        clearTimeout();
      }
    }, 5000);
  }
}

function orderStatus(deliveryPercentage) {
  var status;
  if (deliveryPercentage < 10) {
    status = "Recieving your order";
  } else if (deliveryPercentage < 50) {
    status = "Gathering items";
  } else if (deliveryPercentage < 60) {
    status = "Handler is on their way to the store(s)";
  } else if (deliveryPercentage < 100) {
    status = "Delivery is on its way";
  } else {
    status = "Delivered!";
  }
  return status;
}

export default class CurrentOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Delivery_ID: null,
      Handler_Name: "Handler",
      Purchased_Items: [],
      Time_Order_Placed: null,
    };

    console.log(this.props);

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.transporting !== this.props.transporting) {
      console.log("props updated");
      this.state.Delivery_ID = this.props.transporting.Delivery_ID;
      console.log(this.state.Delivery_ID);
      axios("https://chickpeaapi.glitch.me/order-details", {
        data: { Delivery_ID: this.state.Delivery_ID },
        method: "post",
      }).then((res) => {
        console.log(res.data);
        this.setState({
          Handler_Name: res.data.Handler_Name,
          Purchased_Items: res.data.Purchased_Items,
          Time_Order_Placed: this.props.transporting.Date,
        });
      });
    }
  }

  render() {
    return (
      <div>
        {incrementTime()}
        <h3>Current Order</h3>
        <div id="order-info">
          <p>Order Number: #{this.props.transporting.Delivery_ID}</p>
          <ProgressBar animated variant="warning" now={deliveryTime} />
          <p>Order Staus: {orderStatus(deliveryTime)}</p>
          <p>Order Time: {this.props.transporting.Date}</p>
          <p>Handler: {this.state.Handler_Name} </p>
          <p>
            Delivery Address: {this.props.shippings.Street},{" "}
            {this.props.shippings.City}, {this.props.shippings.State},{" "}
            {this.props.shippings.Zip_Code}
          </p>
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
          <p>
            Tax: ${(this.props.transporting.Total_Cost * 0.0825).toFixed(2)}{" "}
          </p>
          <p>Delivery Fee: $2.00 </p>
          <p>Tip: $2.50 </p>
          <br></br>
          <p>
            Total Price: $
            {(
              this.props.transporting.Total_Cost +
              this.props.transporting.Total_Cost * 0.0825 +
              4.5
            ).toFixed(2)}{" "}
          </p>
        </div>
      </div>
    );
  }
}
