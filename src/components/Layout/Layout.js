import React from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

const layout = (props) => {
        return <Aux>
          <Toolbar />
          <div>Toolbar, Side drawer, Backdrop</div>
          <main className={classes.content}>
            {props.children}
          </main>
        </Aux>
}

export default layout