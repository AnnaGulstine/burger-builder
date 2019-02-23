import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
    { controls.map(control => (
      <BuildControl key={control.label} 
                    label={control.label} 
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    isDisabled={props.disabledInfo[control.type]}
      />
    ))}
  </div>
);

export default buildControls;