import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}></BurgerIngredient>
      })
    })
    .reduce((ingredientArray, ing) => {
      // return ingredientArray.concat(ing)
      return [...ingredientArray, ...ing]
    }, [])

    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Add some ingredients!</p>
    }

  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger