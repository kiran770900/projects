import React from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import"./Checkout.css";
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
         <div className="checkout__left">
                      
            <img className ="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt=""
          />;  
        
         {basket?.length ===0 ?(
            <div>
              <h2 className="checkout__title">your shoping basket is empty</h2> 
              <p>your amazon basket is empty please press "add to basket " button  </p>
            </div>
           ):(
            <div>
            <h2>YOUR SHOING BASKET</h2>
            <p> here is your shopping list </p>
            {basket.map(item => (
               <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                prize={item.prize}
                rating={item.rating}               
               
               />  
            ))}
            <checkout />
            </div>
            )}
        </div>
       
      {basket.length > 0 &&(
        <div className="checkout__right">
      <Subtotal />
        </div>
      )}
      </div>
    );

}

export default Checkout
