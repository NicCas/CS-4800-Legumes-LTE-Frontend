import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import "./Checkout.css";
import axios from 'axios'

/* importing the form components
notes to self
    - for each step of the checkout, save state on server side?
*/
const DeliveryDetails = lazy(() => import("./DeliveryDetails"));
const PaymentDetails = lazy(() => import("./PaymentDetails"));
const ReviewOrder = lazy(() => import("./ReviewOrder"));

axios.defaults.withCredentials = true;

export default class Checkout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            step: 1,
            Shipping_Street: "",
            Shipping_City: "",
            Shipping_State: "",
            Shipping_ZIP: "",
            Handler: {},
            Delivery_Instructions: "",
            Card_Number: "",
            Card_Name: "",
            CVV: "",
            Exp_Date: '',
            Billing_Street: "",
            Billing_City: "",
            Billing_State: "",
            Billing_ZIP: "",
            order_placed: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() {
        let step = this.state.step
        // If the current step is 1 or 2, then add one on "next" button click
        step = step >= 2? 3: step + 1
        this.setState({
          step: step
        })
      }
    
      _prev() {
        let step = this.state.step
        // If the current step is 2 or 3, then subtract one on "previous" button click
        step = step <= 1? 1: step - 1
        this.setState({
          step: step
        })
      }
      // The "next" and "previous" button functions
get previousButton(){
    let step = this.state.step;
    // If the current step is not 1, then render the "previous" button
    if(step !==1){
      return (
        <button 
        className="btn" 
        type="button" 
        onClick={this._prev}>
            Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }
  
  get nextButton(){
    let step = this.state.step;
    // If the current step is not 3, then render the "next" button
    if(step <3){
      return (
        <button 
        className="btn float-right" 
        type="button" 
        onClick={this._next}>
          Next
        </button> 
      )
    }
    // ...else render nothing
    return null;
  }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { 
            Shipping_Street, 
            Shipping_City, 
            Shipping_State, 
            Shipping_ZIP,
            Handler,
            Delivery_Instructions,
            Card_Name,
            Card_Number,
            CVV,
            Exp_Date,
            Billing_Street,
            Billing_City,
            Billing_State,
            Billing_ZIP
         } = this.state
         //alert(`${JSON.parse(Handler).Handler_ID}`)
      }

    componentDidMount(){
      let currentComponent = this;
      axios.get(`https://chickpeaapi.glitch.me/user/account-details`)
        .then((res) => {
          if(res.data.payments.length !== 0){
            const data = res.data;
            var shipping_addr = {};
            var billing_addr = {};
            var payment = {};
            // getting addresses
            for(var address of data.addresses){
              if(address.Is_Billing){
                billing_addr.Street = address.Street;
                billing_addr.City = address.City;
                billing_addr.State = address.State;
                billing_addr.ZIP = address.Zip_Code;
              }
              if(address.Is_Shipping){
                shipping_addr.Street = address.Street;
                shipping_addr.City = address.City;
                shipping_addr.State = address.State;
                shipping_addr.ZIP = address.Zip_Code;
              }
            }
  
            // getting payment
            payment.Card_Name = data.payments[0].Card_Name;
            payment.Card_Number = data.payments[0].Card_Num;
            payment.CVV = data.payments[0].CVV;
            payment.Exp_Date = data.payments[0].Exp_Date;
  
            // setting the state
            currentComponent.setState({
              Shipping_Street: shipping_addr.Street,
              Shipping_City: shipping_addr.City,
              Shipping_State: shipping_addr.State,
              Shipping_ZIP: shipping_addr.ZIP,
              Card_Number: payment.Card_Number.toString(),
              Card_Name: payment.Card_Name,
              CVV: payment.CVV,
              Exp_Date: payment.Exp_Date,
              Billing_Street: billing_addr.Street,
              Billing_City: billing_addr.City,
              Billing_State: billing_addr.State,
              Billing_ZIP: billing_addr.ZIP
            })
          }
        })
    }

    placeOrder(){
      axios(`https://chickpeaapi.glitch.me/checkout`,{
        method: 'post',
        data: {
          Shipping_Street: this.state.Shipping_Street,
          Shipping_City: this.state.Shipping_City,
          Shipping_State: this.state.Shipping_State,
          Shipping_ZIP: this.state.Shipping_ZIP,
          Delivery_Instructions: this.state.Delivery_Instructions,
          Billing_Street: this.state.Billing_Street,
          Billing_City: this.state.Billing_City,
          Billing_State: this.state.Billing_State,
          Billing_ZIP: this.state.Billing_ZIP,
          Handler_ID: JSON.parse(this.state.Handler).Handler_ID
        }
      })
        .then((res) => {
          console.log(res);
          this.setState({order_placed: true});
        })
    }

    render() {
        if(this.state.order_placed){
          return(
            <Redirect to="/order-placed" />
        );
        }
        return (
            <div id="checkout-page">
                <h1>Checkout</h1>
                <p>If you have ordered with us before, Chickpea will prefill these fields with your personal information.</p>
                    <DeliveryDetails
                        step = {this.state.step}
                        handleChange = {this.handleChange}
                        Shipping_Street = {this.state.Shipping_Street}
                        Shipping_City = {this.state.Shipping_City}
                        Shipping_State = {this.state.Shipping_State}
                        Shipping_ZIP = {this.state.Shipping_ZIP}
                        Delivery_Instructions = {this.state.Delivery_Instructions}
                        Handler = {this.state.Handler}
                    />
                    <PaymentDetails 
                        step = {this.state.step}
                        handleChange = {this.handleChange}
                        Card_Name = {this.state.Card_Name}
                        Card_Number = {this.state.Card_Number}
                        CVV = {this.state.CVV}
                        Exp_Date = {this.state.Exp_Date}
                        Billing_Street = {this.state.Billing_Street}
                        Billing_City = {this.state.Billing_City}
                        Billing_State = {this.state.Billing_State}
                        Billing_ZIP = {this.state.Billing_ZIP}
                    />
                    <ReviewOrder
                      step = {this.state.step}
                      Shipping_Street = {this.state.Shipping_Street}
                      Shipping_City = {this.state.Shipping_City}
                      Shipping_State = {this.state.Shipping_State}
                      Shipping_ZIP = {this.state.Shipping_ZIP}
                      Handler = {this.state.Handler}
                      Delivery_Instructions = {this.state.Delivery_Instructions}
                      Card_Name = {this.state.Card_Name}
                      Card_Number = {this.state.Card_Number}
                      CVV = {this.state.CVV}
                      Exp_Date = {this.state.Exp_Date}
                      Billing_Street = {this.state.Billing_Street}
                      Billing_City = {this.state.Billing_City}
                      Billing_State = {this.state.Billing_State}
                      Billing_ZIP = {this.state.Billing_ZIP}
                    />
                    {this.previousButton}
                    {this.nextButton}
                    {this.state.step == 3 &&
                    <div>
                        <button class="btn float-right" type="submit" onClick={()=>this.placeOrder()}>Place Order</button>
                    </div>}
            </div>
        )
    }
}