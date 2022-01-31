import React from "react";
import soap from './soap1.jpg';
import ropechain from './ropechain.jpeg';
import bathbomb from './bathbomb.jpeg'


function Products(){


    return(
        <div className="product-container">
            <div className='soap'>
                <a href="/products/soaps"><h3>Soaps</h3></a>
                <img src={soap} alt="Soap" />
                <p>Some description of the soaps.</p>
            </div>
            <div className='keychains'>
                <a href="/products/keychains"><h3>Keychains</h3></a>
                <img src={ropechain} alt="Rope Keychain" />
                <p>Some description of the keychains.</p>
            </div>
            <div className='bathbomb'> 
                <a href="/products/bathbombs"><h3>Bath Bombs</h3></a>
                <img src={bathbomb} alt="Bath Bomb" />
                <p>Some description of the bath bombs.</p>
            </div>
        </div>
    )
}
export default Products;