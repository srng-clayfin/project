import { useState } from "react"

export const USer = () =>
{

    const [user1,setUser1] = useState("");
    const [user2,setUser2] = useState("");

    return(
        <div className="App">
            <div>
                <h3>Enter User Details...</h3>
                <br />

                    <input type={"text"} placeholder={"Enter User1 Name : "}  onChange={(e) => {setUser1(e.target.value) }}/>
                
                <br />
                <br />
                
                    <input type={"text"} placeholder={"Enter User2 Name : "}  onChange={(e) => {setUser2(e.target.value) }}/>
                
                <br />
                <br />
     
                    <button onClick={() => console.log(user1+"  "+user2)    }>
                            Start Game
                    </button>
                
            </div>
        </div>
    )
    }