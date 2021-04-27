import React from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

export default class PaymentDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        if(this.props.step !== 2){
            return null;
        }
        return(
            <div id="checkout-step2" class="fade-in">
                <h1>Step 2: Payment Information</h1>
                <h2>Delivery Address</h2>
                <Form>
                    <Form.Group controlId="ShipStreet">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            id="Card_Number"
                            name="Card_Number"
                            type="text" 
                            placeholder="1234..."
                            value={this.props.Card_Number}
                            onChange={this.props.handleChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="ShipCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            id="Shipping_City"
                            name="Shipping_City"
                            type="text" 
                            placeholder="City name"
                            value={this.props.Shipping_City}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="ShipState">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                            id="Shipping_State"
                            name="Shipping_State"
                            type="text" 
                            placeholder="New Spork"
                            value={this.props.Shipping_State}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="ShipZIP">
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control 
                            id="Shipping_ZIP"
                            name="Shipping_ZIP"
                            type="text" 
                            placeholder="12345"
                            value={this.props.Shipping_ZIP}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}