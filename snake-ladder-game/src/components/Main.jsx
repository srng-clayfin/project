import { Block } from "./Block"

export const Main = (p) =>
{      

    return(<>
        <div className="mainblock">
        {
            [...Array(100)].map((el, i) => 
                <div key={i}>
                    <Block value={100-i} user={p.place}/>
                </div>                
            )
        }                
        </div>
    </>)
}