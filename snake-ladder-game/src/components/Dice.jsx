import React, { useState } from 'react';
import '../App.css';

export const Dice = (p) =>
{
    const [firstDieResult, setFirstDieResult] = useState(1);

    const firstDieImage = require(`../assets/${firstDieResult}.png`);

    console.log(p)

    setFirstDieResult(p.count);
    
    return(
        <>
          <div>
            <img src={firstDieImage}  />
           </div>           
        </>
    )
}