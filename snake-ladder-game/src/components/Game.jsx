import { useContext, useEffect, useRef, useState } from 'react';
import '../App.css';
import { Main } from './/Main';
import { userContext } from "../App";
import { useNavigate } from 'react-router-dom';

export const Game = (p) =>
{

  const {p1,setP1,p2,setP2} = useContext(userContext) 
  const nav = useNavigate()

  const srng = useRef(1);
  
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
        
        
        if(place1 >= 100)
        {
          playerWin(user2);
        }
        else if(place2 >= 100)
        {
          playerWin(user1);
        }

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

    const player1 = () =>
    {
      if(place1 === 96)
      {
        setPlace1(49);
      }    
      else if(place1 === 50)
      {
        setPlace1(79);
      }
      else if(place1 === 29)
      {
        setPlace1(58);
      }
      else if(place1 === 37)
      {
        setPlace1(8);
      }
      else if(place1 === 7)
      {
        setPlace1(56);
      }    
      else if(place1 === 75)
      {
        setPlace1(32);
      }
      else if(place1 === 54)
      {
        setPlace1(83);
      }
      else if(place1 === 94)
      {
        setPlace1(71);
      }
      else if(place1 === 12)
      {
        setPlace1(41);
      }
      else if(place1 === 23)
      {
        setPlace1(1);
      }
    }

    const player2 = () =>
    {
      if(place2 === 96)
        {
          setPlace2(49);
        }    
        else if(place2 === 50)
        {
          setPlace2(79);
        }
        else if(place2 === 29)
        {
          setPlace2(58);
        }
        else if(place2 === 37)
        {
          setPlace2(8);
        }
        else if(place2 === 7)
        {
          setPlace2(56);
        }    
        else if(place2 === 75)
        {
          setPlace2(32);
        }
        else if(place2 === 54)
        {
          setPlace2(83);
        }
        else if(place2 === 94)
        {
          setPlace2(71);
        }
        else if(place2 === 12)
        {
          setPlace2(41);
        }
        else if(place2 === 23)
        {
          setPlace2(1);
        }
    }
  
  const [dnm, setDnm] = useState(false)
  const handledice = () =>
  {
      setDnm(true)
      diceuser==user2 ? setDiceUser(user1) : setDiceUser(user2);
      setFlag(flag===true ? false : true);    

      setPrevious(count1);
      setCount1(Math.floor(Math.random() * (6 - 1 + 1) + 1));  
      
      //setRepeat(repeat===true ? false : true);           

      notP1();
      player1()
      player2()

        

            
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
        
        
        {/* <button onClick={previousPlace}>
          Previous
        </button> */}

        <div className='score'>
          <h3>Score Board</h3>
          <h4><p>{user1} 😈 :  {place2-1} </p></h4>
          <h4><p>{user2} 🎅 :  {place1-1}</p></h4>
        </div>
        <h3>{diceuser+" Turn "}</h3>

        {/* <button onClick={() => handledice()}>
            Click
        </button>
        <br />
        <br />       
          <h3>
             {dnm ? diceuser == user1 ? user2+" points" : user1+" points" : null} 
          </h3> */}

          <div onClick={() => handledice()} className='dice'>
            <img src={diceImage} />
          </div>
      </div>
    </div>
  );
}
