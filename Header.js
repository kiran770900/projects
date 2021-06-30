import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import {useStateValue} from "./StateProvider"
import { auth } from './firebase';




function Header() {
    const [{ basket, user }] = useStateValue();
     const login = () =>{
       if(user){
         auth.signOut();
       }
     } 

    return (
      <nav className="header">
          <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo"/>
        </Link>
        <div className="header__search">
         <input type="text" className="header__searchInput"/> 
         <SearchIcon className="header__searchIcon" />
         </div>
         <div className="header__nav">
             <Link to={!user && "/login"}  className="header__link">
               <div  className="header__option">
                    <span className="header__OptionLineOne"> hello{user?.email}</span>
                    <span className="header__OptionLineTwo">{user? "sing out" : "sing incd"}</span>
                   </div>
             </Link>
             <Link to="/"  className="header__link">
               <div onClick={login} className="header__option">
                    <span className="header__OptionLineOne"> Return</span>
                    <span className="header__OptionLineTwo"> &order </span>
               </div>
              </Link>
             <Link to="/login"  className="header__link">
               <div className="header__option">
                    <span className ="header__OptionLineOne"> Your </span>
                    <span className="header__OptionLineTwo"> Prime</span>
               </div>
             </Link>
             <Link to="/checkout" className="header__link">
             <div className="header__Basket">
              <ShoppingBasketIcon/>
              <span className="header__OptionLineTwo header__basketCount">{basket?.length}</span>
             </div>
             </Link>
         </div>
        </nav>
    )
}

export default Header
