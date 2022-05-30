import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const User = () =>
{
    const [user1,setUser1] = useState("");
    const [user2,setUser2] = useState("");

    console.log(user1+"   "+user2);    

   const nav = useNavigate()

    const handleUSers = () =>
    {        
        nav("/game");
    }

    return(
        <div className="App">
            <div>
                <h3>Enter Player Details...</h3>
                <br />
                    <input type={"text"} placeholder={"Enter Player-1 Name : "}  onChange={(e) => {setUser1(e.target.value) }}/>                
                <br />
                <br />                
                    <input type={"text"} placeholder={"Enter Player-2 Name : "}  onChange={(e) => {setUser2(e.target.value) }}/>                
                <br />
                <br />     
                    <button onClick={handleUSers}>
                            Start Game
                    </button>                
            </div>
        </div>
    )
    }