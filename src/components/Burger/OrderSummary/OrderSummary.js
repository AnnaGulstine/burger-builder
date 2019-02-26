import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
                            .map(item => {
                              return (<li key={item}>
                                  <span style={{textTransform: 'capitalize'}}>
                                    {item}
                                  </span>: 
                                  {props.ingredients[item]}
                                  </li>)
                            });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalPrice}</strong></p>
      <p>Continue to checkout?</p>
      <Button buttonType="Success" onClick={props.onClickContinue}>Continue</Button>
      <Button buttonType="Danger" onClick={props.onClickCancel}>Cancel</Button>
      <Button></Button>
    </Aux>)
}

export default orderSummary;