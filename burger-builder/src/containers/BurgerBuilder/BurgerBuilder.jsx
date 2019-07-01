import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.4,
    bacon: 0.8
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0, bacon: 0, cheese: 0, meat: 0
        },
        totalPrice: 1,
        purchaseable: false,
        purshasing:false,
    }

purchaseContinueHandler=()=>{
    alert("You continue....")
}
closeModalHandler=()=>{
    this.setState({purshasing:false})
}
 purchseHandler=()=>{
    this.setState({purshasing:true})
 }
    updatePurchaseState = (ingredient) => {

        const sum = Object.keys(ingredient).map(key => {
            return ingredient[key]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)

        this.setState({ purchaseable: sum > 0 });
    }
    addIngredienthandler = (type) => {

        const oldCount = this.state.ingredients[type];

        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.state.purshasing?
                    <Modal show={this.state.purshasing} modalClosed={this.closeModalHandler}>
                    <OrderSummary conform={this.purchaseContinueHandler} modalClosed={this.closeModalHandler} ingredient={this.state.ingredients} price={this.state.totalPrice} />
                </Modal>:null

                }
                 <Burger ingredient={this.state.ingredients}></Burger>
                <BuildControls ordered={this.purchseHandler} price={this.state.totalPrice} onAdd={this.addIngredienthandler}
                    onRemove={this.removeIngredientHandler}
                    purchasable={this.state.purchaseable} />
            </div>

        );
    }
}

export default BurgerBuilder;

