import { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartSate = {
    items : [],
    totalAmount : 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){

        const updatedToatlAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartitem = state.items[existingCartItemIndex];
    
        let updatedItems

        if(existingCartitem){
            const updateditem={
                ...existingCartitem,
                amount:existingCartitem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updateditem;
        }else{
            
            updatedItems = state.items.concat(action.item);
        }

        return {
            items : updatedItems,
            totalAmount : updatedToatlAmount
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartSate;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartSate);

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    
    const removeItemHandler = (id) => {
        dispatchCartAction({type:'REMOVE', id : id})
    }

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;