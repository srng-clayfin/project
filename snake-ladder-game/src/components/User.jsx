import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export const User = () =>
{
    const {p1,setP1,p2,setP2} = useContext(userContext) 

      

    const nav = useNavigate()

    const handleUSers = () =>
    {        
        console.log(p1+"   "+p2);  
        nav("/game");
    }

    return(
        <div className="App">
            <div>
                <h3>Enter Player Details...</h3>
                <br />
                    <input type={"text"} placeholder={"Enter Player-1 Name : "}  onChange={(e) => {setP1(e.target.value) }}/>                
                <br />
                <br />                
                    <input type={"text"} placeholder={"Enter Player-2 Name : "}  onChange={(e) => {setP2(e.target.value) }}/>                
                <br />
                <br />     
                    <button onClick={handleUSers}>
                            Start Game
                    </button>                
            </div>
        </div>
    )
    }