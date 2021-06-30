import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  
            alt="home banner"
            /><div className="home__row">
                <Product
            id="15533435"
            title="OnePlus Bullets Wireless Z Bass Edition (Reverb Red)"
            prize={999}
            rating={5}
            image="https://m.media-amazon.com/images/I/31I01zObT9L._AC_SR400,600_.jpg"
            alt=""
            />
              <Product
            id="12349908"
            title="JBL T460BT by Harman, Wireless On Ear Headphones with Mic, Pure Bass, Portable, Lightweight & Flat Foldable, Voice Assistant Support for Mobiles (Black)"
            prize={1200}
            rating={3}
            image="https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_UY218_.jpg"
            alt=""
            /></div>
             <div className="home__row">
             <Product
            id="1234277"
            title="The SV Style Unisex Printed Akatsuki Half Black and Half White Hoodie"
            prize={999}
            rating={6}
            image="https://images-na.ssl-images-amazon.com/images/I/419IkNp8OEL.jpg"
            
            
            alt=""
            />
             <Product
            id="12334556"
            title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music,....."
            prize={999}
            rating={5}
            image="https://m.media-amazon.com/images/I/51BWIzyFgAL._AC_UY327_FMwebp_QL65_.jpg"
            alt=""
            />
             <Product
            id="1254666"
            title="New Apple iPhone 12 Mini (64GB) - Purple"
            prize={5}
            rating={5}
            image="https://m.media-amazon.com/images/S/gladiator-image-upload-prod/5/A21TJRUUN4KGV/821cc6181456d9c022c7d08f00d3648d._CR0,0,400,400_AC_SL360_QL70_.jpg"
            alt=""
            />
             </div>
             <div className="home__row">
             <Product
            id="12345"
            title="Lenovo 27-inch 2560x1440 QHD IPS Panel NearEdgeless Monitor - Q27q-10-2x3W Speakers, 16:9 Aspect Ratio, 75Hz, 4ms, 300 nits Brightness, AMD FreeSync, TUV"
            prize={24000}
            rating={8}
            image="https://m.media-amazon.com/images/I/71QsqXR-IRL._AC_UY218_.jpg"
            alt=""
            />
         </div>
                </div>
        

       );
}

export default Home;



