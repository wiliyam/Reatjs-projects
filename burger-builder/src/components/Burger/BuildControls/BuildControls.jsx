import React from 'react'
import { builtinModules } from 'module';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const BuildControls = (props) => {

    const controls = [
        { label: "Salad", type: "salad" },
        { label: "Cheese", type: "cheese" },
        { label: "Meat", type: "meat" },
        { label: "Bacon", type: "bacon" },
    ]
    return (<div className={classes.BuildControls}>
        <p>Current Price <strong>{props.price.toFixed(2)}</strong> $</p>
        {
            controls.map(ctl => {
                return <BuildControl key={ctl.label} label={ctl.label} add={() => props.onAdd(ctl.type)} remove={() => props.onRemove(ctl.type)} />
            })
        }
        <button  onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>Order Now!</button>

    </div>);
}

export default BuildControls;