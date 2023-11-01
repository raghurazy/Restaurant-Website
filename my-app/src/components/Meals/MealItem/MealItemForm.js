import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemform = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumbr = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumbr < 1 || enteredAmountNumbr > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumbr);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <Input 
                ref={amountInputRef}
                label='amount' 
                input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter Valid Amount (1-5)</p>}
        </form>
    )
}

export default MealItemform;