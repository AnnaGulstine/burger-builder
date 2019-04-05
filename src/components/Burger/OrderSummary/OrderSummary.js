import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("order summary will update")
  }

  render () {
      const ingredientSummary = Object.keys(this.props.ingredients)
                            .map(item => {
                              return (<li key={item}>
                                  <span style={{textTransform: 'capitalize'}}>
                                    {item}
                                  </span>: 
                                  {this.props.ingredients[item]}
                                  </li>)
                            });

    return (
         <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Success" onClick={this.props.onClickContinue}>Continue</Button>
            <Button buttonType="Danger" onClick={this.props.onClickCancel}>Cancel</Button>
            <Button></Button>
          </Aux>
      )
  }
}

export default OrderSummary;