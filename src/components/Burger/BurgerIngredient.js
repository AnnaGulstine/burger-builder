import React, { Component } from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
  render() {
    let ingredient = null

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.bottomBread}></div>
        break
      case ('bread-top'):
        ingredient = (
          <div className={classes.topBread}>
            <div className={classes.seeds1}></div>
            <div className={classes.seeds2}></div>
          </div>
        )
        break
      case ('meat'):
        ingredient = <div className={classes.meat}></div>
        break
      case ('cheese'):
        ingredient = <div className={classes.cheese}></div>
        break
      case ('lettuce'):
        ingredient = <div className={classes.lettuce}></div>
        break
      case ('bacon'):
        ingredient = <div className={classes.bacon}></div>
        break
      default: 
        ingredient = null;
        break
    }
    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient