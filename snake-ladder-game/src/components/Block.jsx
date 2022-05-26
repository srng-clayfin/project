

export const Block = (p) =>
{
    console.log(p)

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