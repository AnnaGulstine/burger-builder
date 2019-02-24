import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  meat: 1,
  cheese: 0.75,
  bacon: 1.25
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updateCanPurchase(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceToSubtract = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceToSubtract;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updateCanPurchase(updatedIngredients)
  }

  updateCanPurchase = (updatedIngredients) => {
   const ingredients = updatedIngredients
   const sum = Object.keys(ingredients)
                .map(ing => {
                  return ingredients[ing]
                })
                .reduce((sum, item) => {
                    return sum + item
                }, 0)
  const canPurchase = sum > 0
  this.setState({
    purchasable: canPurchase
  })
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} 
                       ingredientRemoved={this.removeIngredientHandler}
                       disabledInfo={disabledInfo} 
                       totalPrice={this.state.totalPrice}
                       canPurchase={this.state.purchasable}
                       orderNowClicked={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder