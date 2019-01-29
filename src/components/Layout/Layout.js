import React from 'react'
import Aux from '../../hoc/Aux.js'
import classes from './Layout.css'

const layout = (props) => {
        return <Aux>
          <div>Toolbar, Side drawer, Backdrop</div>
          <main className={classes.content}>
            {props.children}
          </main>
        </Aux>
}

export default layout