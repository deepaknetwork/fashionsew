import React from "react";
import { men,women,kids } from "../data";
import Card from "./contentcard";

function Contentmen()
{
    return <section id="m1">
        {men.map(Card)}
    </section>
}
function Contentwomen()
{
    return <section id="m1">
        {women.map(Card)}
    </section>
}
function Contentkids()
{   
    return <section id="m1">
        {kids.map(Card)}
    </section>
}

export {Contentmen,Contentwomen,Contentkids};