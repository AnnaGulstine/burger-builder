import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../../../../components/UI/Navigation/NavigationItem/NavigationItem';

const navigationItems = () => {
  return (<ul className={classes.Navigation}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
    </ul>)
}

export default navigationItems;