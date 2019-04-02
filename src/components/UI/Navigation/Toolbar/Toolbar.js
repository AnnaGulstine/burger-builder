import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../../components/UI/Logo/Logo';
import NavigationItems from '../../../../components/UI/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return <header className={classes.Toolbar}>
    <DrawerToggle onClick={props.onClickToggleSideDrawer} />
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
}

export default toolbar;