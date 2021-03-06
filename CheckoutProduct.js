import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id , title ,image , prize,rating}) {
    const [{basket} ,dispatch ] = useStateValue();
        const removeFromBasket = () =>{
            dispatch({
                type:"REMOVE__FROM__BASKET",
                id:id,

            });

        }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
              
              <p className="checkoutProduct__prize">
                <small>₹</small>
                <strong>{prize}</strong>
                </p>
                <div className="checkoutProduct__rating">
               {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                       ))

                    }

                    </div>  
                    <button onClick={removeFromBasket}> Remove from basket </button>   
                </div>
                    
        </div>
        
    )
}

export default CheckoutProduct
