import React from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

export default class DeliveryDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            handlers: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get("https://chickpeaapi.glitch.me/handler")
            .then((res) => {
                this.setState({ handlers: res.data });
                console.log(this.state.handlers);
            });
    }

    render(){
        if(this.props.step !== 1){
            return null;
        }
        return(
            <div id="checkout-step1" class="fade-in">
                <h1>Step 1: Delivery Details</h1>
                <h2>Delivery Address</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            id="Shipping_Street"
                            name="Shipping_Street"
                            type="text" 
                            placeholder="Street name"
                            value={this.props.Shipping_Street}
                            onChange={this.props.handleChange} 
                        />
                    </Form.Group>
                    <Form.Group>
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
                    <Form.Group>
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
                    <Form.Group>
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
                    <Form.Group>
                        <Form.Label>Delivery Instructions</Form.Label>
                        <Form.Control 
                            id="Delivery_Instructions"
                            name="Delivery_Instructions"
                            type="text" 
                            placeholder="don't doorbell"
                            value={this.props.Delivery_Instructions}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form>
                <h2>Select a Handler</h2>
                <Form>
                    <Form.Group>
                        {this.state.handlers.map((handler) => (
                            <Form.Check
                                type='radio'
                                id='Handler'
                                name="Handler"
                                label={handler.Name}
                                value={JSON.stringify(handler)}
                                onChange={this.props.handleChange}
                            />
                        ))} 
                    </Form.Group>
                </Form>
            </div>
        );
    }
}