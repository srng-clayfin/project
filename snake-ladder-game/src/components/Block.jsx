import React,{ useEffect } from "react";


const Block = (p) =>
{
     
    useEffect(()=>{
        console.log('place changed',p.place);
    },[p.place]);
   

    return(
        <div className="block">
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