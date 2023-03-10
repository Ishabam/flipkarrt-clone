import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button :{
        borderRadius: '50%'
    }
})

const GroupButton = () => {
    const classes = useStyle();
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <ButtonGroup className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter == 1}>-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement()}>+</Button>
        </ButtonGroup>
    );
}

export default GroupButton;