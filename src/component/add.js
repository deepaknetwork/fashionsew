import React from "react";
import Add from "./addcard";
import { men,women,kids } from "../data";
import { Link } from "react-router-dom";

function y(){window.scrollTo(0,0)}

export function Addmen()
{
    return <section id="h2">
    <div id="l"><Link id="l" to="/men" onClick={y}>MEN</Link></div>
    <div id="h2s"> {men.map(Add)}</div>
    </section>
} 
export function Addwomen()
{
    return <section id="h2">
     <div id="l"><Link id="l" to="/women" onClick={y}>WOMEN</Link></div>
    <div id="h2s">{women.map(Add)}</div>
    </section>
} 
export function Addkids()
{
    return <section id="h2">
     <div id="l"><Link id="l" to="/kids" onClick={y}>KIDS</Link></div>
     <div id="h2s"> {kids.map(Add)}</div>
    </section>
} 