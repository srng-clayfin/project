import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const User = () =>
{

    const [user1,setUser1] = useState("");
    const [user2,setUser2] = useState("");

    

    const nav = useNavigate()

    const handleUSers = () =>
    {        
        nav("/game");
    }

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
                    <button onClick={handleUSers}>
                            Start Game
                    </button>                
            </div>
        </div>
    )
    }