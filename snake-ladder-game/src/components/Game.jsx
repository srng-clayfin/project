
import { useEffect, useState } from 'react';
import '../App.css';
import { Main } from './/Main';

function Game(p) 
{ 

  console.log(p.user1+"  "+p.user2);
  
  const [count1,setCount1]  = useState(0);
  const [count2,setCount2]  = useState(0);  
  const [place1,setPlace1] = useState(1);
  const [place2,setPlace2] = useState(1);
  
  const [user1,setUser1] = useState("Sarang");
  const [user2,setUser2] = useState("Swati");

  const [flag,setFlag] = useState(true); 

  const [diceuser,setDiceUser] = useState(user1);


  if(place1 === 100)
  {
    alert(user1+" Win 👑")
  }
  else if(place2 === 100)
  {
    alert(user2+" Win 👑")
  }
  
    useEffect(
      ()=>{    
            
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
    
    
  

  const handledice = () =>
  {
      diceuser==user1 ? setDiceUser(user2) : setDiceUser(user1)

      setFlag(flag===true ? false : true);   
      

      setCount1(Math.floor(Math.random() * (6 - 1 + 1) + 1));  
      
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

      //==================================================================
    
     // setCount2(Math.floor(Math.random() * (6 - 1 + 1) + 1));  
      
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
    
    
    //==================================================
    
  }

  
  
  return (
    <div className="Game">

      <Main place1={place1} place2={place2}/>

      <div className='button'>
        <button onClick={() => handledice()}>
            {diceuser}
        </button>
        <br />
        <br />
        <br />
          <div className='count'>
            <h1>
            
            {/* {flag==true? user2 : user1}
            <br /> */}

            {count1}
            </h1>
          </div>       
      </div>
    </div>
  );
}

export default Game;