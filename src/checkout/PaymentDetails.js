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
                <h2>Card Information</h2>
                <Form>
                    <Form.Group>
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
                    <Form.Group>
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control 
                            id="Card_Name"
                            name="Card_Name"
                            type="text" 
                            placeholder="Name"
                            value={this.props.Card_Name}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control 
                            id="CVV"
                            name="CVV"
                            type="text" 
                            placeholder="123"
                            value={this.props.CVV}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control 
                            id="Exp_Date"
                            name="Exp_Date"
                            type="text" 
                            placeholder="mm/yy"
                            value={this.props.Exp_Date}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form>
                <h2>Billing Address</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            id="Billing_Street"
                            name="Billing_Street"
                            type="text" 
                            placeholder="Street name"
                            value={this.props.Billing_Street}
                            onChange={this.props.handleChange} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            id="Billing_City"
                            name="Billing_City"
                            type="text" 
                            placeholder="City name"
                            value={this.props.Billing_City}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                            id="Billing_State"
                            name="Billing_State"
                            type="text" 
                            placeholder="New Spork"
                            value={this.props.Billing_State}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ZIP Code</Form.Label>
                        <Form.Control 
                            id="Billing_ZIP"
                            name="Billing_ZIP"
                            type="text" 
                            placeholder="12345"
                            value={this.props.Billing_ZIP}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}