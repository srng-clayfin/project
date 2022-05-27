import React from "react";
import Background from '../Img/teleport.png'


const Block = (p) =>
{   


    return(
        <div className="block" style={{backgroundColor : p.value==28 || p.value==72 ? "#72FE8E" : p.value==46 || p.value==89 ? "#FE7A7A" : ""}} >       
            { p.user === p.value ? 
                <h4>
                    😈
                </h4>
                : 
                <h3>{p.value}</h3>
            }                      
            
        </div>
            
        
    )

}
export default Block;