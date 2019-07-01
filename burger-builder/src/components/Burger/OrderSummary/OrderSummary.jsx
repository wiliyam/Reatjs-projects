
import React from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(key => {
        return <li key={key}>
            <span style={{ textTransform: 'capitalize' }}>{key}</span>:{props.ingredient[key]}
        </li>
    })
    return <div>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredient:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <h2>Total Price:{props.price.toFixed(2)}</h2>
        <Button btnType="Danger" clicked={props.modalClosed}>Cancle</Button>
        <Button btnType="Success" clicked={props.conform}>Order Now!</Button>
    </div>
}

export default orderSummary;