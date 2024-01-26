import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    function x(){window.scrollTo(0,0)}
    return <header>
                   <div><Link id="hl" to="/home" onClick={x}>HOME</Link></div> 
                   <div><Link id="hl" to="/men" onClick={x}>MEN</Link></div>
                   <div><Link id="hl" to="/women" onClick={x}>WOMEN</Link></div>
                   <div><Link id="hl" to="/kids"onClick={x}>KIDS</Link></div>   
    </header>
}