import React from "react";


const Block = (p) =>
{   
    
    return(
        <div className="block"  >       
            { p.user1 === p.value && p.user2 == p.value ?
                    <h3 style={{opacity: "1000%" }}>
                            😈🎅
                    </h3>
                :
                p.user1 === p.value ? 
                    <h3 style={{opacity: "1000%" }}>
                        🎅
                    </h3>
                : 
                p.user2 == p.value ?
                    <h3 style={{opacity: "1000%" }}>
                        😈
                    </h3>
                :
                    <h3>
                    {
                        p.value                   
                    }
                    </h3>
                    
            }                      
            
        </div>     
            
        
    )

}
export default Block;