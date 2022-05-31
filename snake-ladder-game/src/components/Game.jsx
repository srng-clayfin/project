import { useContext, useEffect, useState } from 'react';
import '../App.css';
import { Main } from './/Main';
import { userContext } from "../App";
import { useNavigate } from 'react-router-dom';

function Game(p) 
{     
  const {p1,setP1,p2,setP2} = useContext(userContext) 
  const nav = useNavigate()
  
  const [count1,setCount1]  = useState(0);
  const [place1,setPlace1] = useState(1);
  const [place2,setPlace2] = useState(1);
  const [user1,setUser1] = useState(p1);
  const [user2,setUser2] = useState(p2);
  const [flag,setFlag] = useState(true); 
  const [diceuser,setDiceUser] = useState(user1);
  const [img, setImg] = useState(1);
  const [repeat, setRepeat] = useState(true);
  const [previous,setPrevious] = useState(0)

  const playerWin = (p) =>
  {
    alert(p+" Win 👑");
    setPlace1(0);
    setPlace2(0);
    nav("/")      
  }


  const notP1 = () =>
  {    
      if(!p1)
      {
        setUser1("Player 1");   
      }
      if(!p2)
      {
        setUser2("Player 2");   
      }
  }

    useEffect(
      ()=>{   
        
        if(count1!=0)
        {
          setImg(count1);  
        }

        if(diceuser == user1)
        {
          setPlace1(count1+place1);  
        }
        else
        {
          setPlace2(count1+place2);
        }        

      },[flag]
    );
    
    useEffect(
      ()=>{
        
        if(count1 == 6)
        {
          diceuser==user2 ? setDiceUser(user1) : setDiceUser(user2);
          setFlag(flag===true ? false : true);  
        } 

        if(place1 >= 100)
        {
          playerWin(user2);
        }
        else if(place2 >= 100)
        {
          playerWin(user1);
        }

      },[repeat]
    )


  const handledice = () =>
  {
      diceuser==user2 ? setDiceUser(user1) : setDiceUser(user2);
      setFlag(flag===true ? false : true);    
      setPrevious(count1);
      setCount1(Math.floor(Math.random() * (6 - 1 + 1) + 1));  
      
      //setRepeat(repeat===true ? false : true);           

      notP1();

      if(place1 === 69)
      {
        setPlace1(88);
      }    
      else if(place1 === 67)
      {
        setPlace1(48);
      }
      else if(place1 === 14)
      {
        setPlace1(54);
      }
      else if(place1 === 42)
      {
        setPlace1(11);
      }
      else if(place1 === 72)
      {
        setPlace1(28);
      }    
      else if(place1 === 28)
      {
        setPlace1(72);
      }
      else if(place1 === 89 || place1 ===46 || place1 ===97 )
      {
        setPlace1(1);
      }

      
      if(place2 === 69)
      {
        setPlace2(88);
      }    
      else if(place2 === 67)
      {
        setPlace2(48);
      }
      else if(place2 === 14)
      {
        setPlace2(54);
      }
      else if(place2 === 42)
      {
        setPlace2(11);
      }
      else if(place2 === 72)
      {
        setPlace2(28);
      }    
      else if(place2 === 28)
      {
        setPlace2(72);
      }
      else if(place2 === 89 || place2 ===46 || place2 ===97 )
      {
        setPlace2(1);
      }
  }

  const previousPlace = () =>
  {
        if(diceuser == user1)
        {
          setPlace1(place1-previous);  
        }
        else
        {
          setPlace2(place2-previous);
        }
        diceuser==user2 ? setDiceUser(user1) : setDiceUser(user2);
  }  
  
  
  const diceImage = require(`../assets/${img}.png`);
 

  return (
    <div className="Game">

      <Main place1={place1} place2={place2}/>

      <div className='button'>
        
        <div className='score'>
        
        <button onClick={previousPlace}>
          Previous
        </button>

          <h3>Score Board</h3>
          <h4><p>{user1} 😈 :  {place2-1} </p></h4>
          <h4><p>{user2} 🎅 :  {place1-1}</p></h4>
        </div>
        <h3>{diceuser}</h3>
        <button onClick={() => handledice()}>
            Click
        </button>
        <br />
        <br />       
          <h3>
          </h3>
          <div>
            <img src={diceImage} />
          </div>
      </div>
    </div>
  );
}

export default Game;