import React from "react";
import './header.css';

function Header(){
    if (/* user is logged in */false){
    return(
        <nav>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/logout">Log Out</a>
        </nav>
    )}
    else{
        return(
            <nav>
                <a href="/">Home</a> 
                <a href="/products">Products</a> 
                <a href="/login">Login</a> 
            </nav>
        )}
}
export default Header;