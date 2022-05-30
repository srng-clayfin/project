
import Block  from "./Block"

export const Main = (p) =>
{   
   
    return(<>
        <div className="mainblock">
        {
            [...Array(100)].map((el, i) => 

                <div key={i}>
                    <Block value={100-i} user1={p.place1} user2={p.place2}/>
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