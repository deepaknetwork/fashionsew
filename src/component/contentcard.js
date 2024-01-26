import React from "react";

export default function Card(x)
{
 return <div id="card">
    <h2>{x.name}</h2>
    <h3>Rs {x.price}/-</h3>
 </div>
}

