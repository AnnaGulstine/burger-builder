import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../../components/UI/Logo/Logo';
import NavigationItems from '../../../../components/UI/Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => {
  return <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
}

export default toolbar;