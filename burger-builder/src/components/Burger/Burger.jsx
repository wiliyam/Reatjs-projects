import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {


    let ingredient = Object.keys(props.ingredient).map((key) => {


        return [...Array(props.ingredient[key])].map((_, i) => {
            return <BurgerIngredient key={i + key} type={key} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    if (ingredient.length === 0) {
        ingredient = <p>Please Add some Ingredient...</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );

}

export default Burger;