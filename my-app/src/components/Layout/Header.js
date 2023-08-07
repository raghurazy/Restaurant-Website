import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsImage from'../../Assets/meals.jpg';
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="A TAble full of delicious food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;