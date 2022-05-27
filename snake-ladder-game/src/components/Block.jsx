import React from "react";


const Block = (p) =>
{   
    
    return(
        <div className="block" style={{backgroundColor : p.value==28 || p.value==72 ? "#72FE8E" : p.value==46 || p.value==89 ? "#FE7A7A" : ""}} >       
            { p.user === p.value ? 
                <h3 style={{opacity: "1000%" }}>
                    😈
                </h3>
                : 
                <h3>
                {
                    p.value==28 || p.value==72 ? "❄️" : p.value==46 || p.value==89 ? "🔥" : p.value == 97 ? "🐍" :  p.value                   
                }
                </h3>
            }                      
            
        </div>     
            
        
    )

}
export default Block;