import React from 'react'
import {Link} from 'react-router-dom'
import "./Checkout.css";

export default class OrderPlaced extends React.Component {
    render(){
        return(
            <div className="checkout-page" id="checkout-page">
                <h1>Thank you!</h1>
                <p>Your order has been placed and is being prepared. Updates will be visible on your Account page.</p>
                <Link to="/account">
                    <div className="btn">
                        Go to Account Page
                    </div>
                </Link>
            </div>
        )
    }
}