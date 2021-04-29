import React, { lazy } from 'react'
const HandbasketTable = lazy(() => import("../handbasket/HandbasketTable"));

export default class ReviewOrder extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.step !== 3){
            return null;
        }
        return(
            <div class="review-order-page fade-in">
                <h1>Step 3: Review your Order</h1>
                <div id="delivery-info">
                    <h2>Delivery Information</h2>
                    <table>
                        <tr>
                            <td>Delivery Address:</td>
                            <td>
                                <p>{this.props.Shipping_Street}</p>
                                <p>{this.props.Shipping_City}</p>
                                <p>{this.props.Shipping_State}</p>
                                <p>{this.props.Shipping_ZIP}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Delivery Instructions:</td>
                            <td>{this.props.Delivery_Instructions}</td>
                        </tr>
                        <tr>
                            <td>Handler:</td>
                            <td>{JSON.parse(this.props.Handler).Name}</td>
                        </tr>
                    </table>
                </div>
                <br></br>
                <div id="payment-info">
                    <h2>Payment Details</h2>
                    <table>
                        <tr>
                            <td>Card Information</td>
                            <td>
                                <p>Name on Card: {this.props.Card_Name}</p>
                                <p>Card Number: {this.props.Card_Number.substring(0,4) + "..."}</p>
                                <p>CVV: {this.props.CVV}</p>
                                <p>Expires: {this.props.Exp_Date}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Billing Address:</td>
                            <td>
                                <p>{this.props.Billing_Street}</p>
                                <p>{this.props.Billing_City}</p>
                                <p>{this.props.Billing_State}</p>
                                <p>{this.props.Billing_ZIP}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <br></br>
                <h2>Handbasket Items</h2>
                <div id="handbasket-summary">
                    <HandbasketTable />
                </div>
            </div>
        );
    }
}