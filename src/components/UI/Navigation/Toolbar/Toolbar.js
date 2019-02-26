import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../../components/UI/Logo/Logo';

const toolbar = (props) => {
  return <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <nav>
    </nav>
  </header>
}

export default toolbar;