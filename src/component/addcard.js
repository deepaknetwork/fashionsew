import React from "react";


export default function Add(x)
{
    return  <div id="ad" style={{backgroundImage: 'url('+x.sr+')'}}>
        <h2>{x.off}%</h2>
    </div>
}