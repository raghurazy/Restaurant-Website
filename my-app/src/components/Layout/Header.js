import {Fragment} from 'react';
import mealsImage from'../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'


const Header = props => {
    return (<Fragment>
        <button>Cart</button>
        <header className={classes.header}>
            <h1>React Meal</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
                <img src={mealsImage} alt="A TAble full of delicious food"/>
        </div>
    </Fragment>
    );
};

export default Header;