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

                </div>
                <div id="payment-info">

                </div>
                <div id="handbasket-summary">
                    <HandbasketTable />
                </div>
            </div>
        );
    }
}