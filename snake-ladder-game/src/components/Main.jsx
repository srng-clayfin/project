import { useEffect } from "react"
import Block  from "./Block"

export const Main = (p) =>
{      
    useEffect(()=>{
        console.log('place changed',p.place);
    },[p.place]);
   
    return(<>
        <div className="mainblock">
        {
            [...Array(100)].map((el, i) => 

                
                <div key={i}>
                    <Block value={100-i} user={p.place} />
                </div>

            )
        }                
        </div>
    </>)
}




                //  i%2===0 ?
                // <div key={i}>
                //     <Block value={100-i} user={p.place}/>
                // </div>
                // : 
                // <div key={i}  style={{
                //     backgroundColor: 'red' 
                // }}>
                //     <Block value={100-i} user={p.place}/>
                // </div>