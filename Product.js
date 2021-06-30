import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider"
function Product({id ,title, image ,prize, rating }) {
      const[{basket},dispatch] = useStateValue();
     
    const addToBasket = () =>{
        dispatch({
            type:'ADD__TO__BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                prize:prize,
                rating:rating,
            },
        })

    }
    return (
        <div className="product"> 
         <div className="product__info">
            <p>{title}</p>
            <p className="product__prize">
                <small>₹</small>
                <strong>{prize}</strong>
                </p>
                
            <div className="product__rating">
               {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                       ))

                    }
                    </div>
                    </div>
                    <img src={image}alt=""/>
                    <button onClick={addToBasket}>ADD TO BASKET</button>
        </div> 
          
    )
}

export default Product
