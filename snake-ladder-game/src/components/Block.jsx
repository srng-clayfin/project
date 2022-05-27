import React from "react";
import Background from '../Img/teleport.png'


const Block = (p) =>
{   

    // //28 , 73

    // {(p.value === 28 )|| (p.value === 73)?
            
    //     :
    //     null  
    //  } 

    return(
        <div className="block" style={{backgroundImage : p.value==28 || p.value==72 ? "url(" + { Background } + ")" : ""}} >       
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