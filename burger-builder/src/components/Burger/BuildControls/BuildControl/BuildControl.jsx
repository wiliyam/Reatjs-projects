import React from 'react'
import classes from './BuildControl.css'


const BuildControl = (props) => {

    return <div className={classes.BuildControl}>
        <div className={classes.Lable}>{props.label}</div>
        <button className={classes.More} onClick={props.add}>More</button>
        <button className={classes.Less} onClick={props.remove}>Less</button>

    </div>

}


export default BuildControl;