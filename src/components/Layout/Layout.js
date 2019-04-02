import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  onToggleSideDrawer = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !this.state.showSideDrawer };
    })
  }

  render () {
    return <Aux>
      <Toolbar onClickToggleSideDrawer={this.onToggleSideDrawer} />
      <SideDrawer 
        closed={this.sideDrawerClosedHandler} 
        open={this.state.showSideDrawer} 
      />
      <div>Toolbar, Side drawer, Backdrop</div>
      <main className={classes.content}>
        {this.props.children}
      </main>
    </Aux>
  }
}

export default Layout