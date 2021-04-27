import React, { lazy } from 'react'
import "./Checkout.css";
import axios from 'axios'

/* importing the form components
notes to self
    - for each step of the checkout, save state on server side?
*/
const DeliveryDetails = lazy(() => import("./DeliveryDetails"));
const PaymentDetails = lazy(() => import("./PaymentDetails"));

axios.defaults.withCredentials = true;

export default class Checkout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            step: 1,
            Shipping_Street: "Street Name",
            Shipping_City: "City name",
            Shipping_State: "New Spork",
            Shipping_ZIP: "12345",
            Handler_ID: null,
            Card_Number: "1234..."
        }
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
            Handler_ID
         } = this.state
         alert('data received :)')
      }

    componentDidMount(){

    }

    // have event listeners

    render() {
        return (
            <div id="checkout-page">
                <h1>Checkout</h1>
                <form onSubmit={this.handleSubmit}>
                    <DeliveryDetails
                        step = {this.state.step}
                        handleChange = {this.handleChange}
                        Shipping_Street = {this.state.Shipping_Street}
                        Shipping_City = {this.state.Shipping_City}
                        Shipping_State = {this.state.Shipping_State}
                        Shipping_ZIP = {this.state.Shipping_ZIP}
                        Handler_ID = {this.state.Handler_ID}
                    />
                    <PaymentDetails 
                        step = {this.state.step}
                    />
                    {this.previousButton}
                    {this.nextButton}
                    {this.state.step == 3 &&
                    <div>
                        <button class="btn" type="submit">Submit</button>
                    </div>}
                </form>
            </div>
        )
    }
}