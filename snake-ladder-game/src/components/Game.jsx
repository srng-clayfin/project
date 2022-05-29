import { useEffect, useState } from 'react';
import '../App.css';
import { Main } from './/Main';

function Game() 
{ 
  const [count1,setCount1]  = useState(0);
  const [count2,setCount2]  = useState(0);  
  const [place,setPlace] = useState(1);
  const [place1,setPlace1] = useState(1);
  
  const [flag,setFlag] = useState(true);
  
  
  const user1 = "Srng";
  const user2 = "Swti";

  const [diceuser,setDiceUser] = useState(user1);
  
  useEffect(
      ()=>{
        setPlace(count1+place);
        console.log(flag);
      },[count1,flag]
    );

  if(place >= 100)
  {
    alert("Win => 👑");    
    setPlace(1);    
  }
  

  const handledice = () =>
  {
    diceuser==user1 ? setDiceUser(user2) : setDiceUser(user1)
    setFlag(flag===true ? false : true);

    if(flag == true)
    {      
      setCount1(Math.floor(Math.random() * (6 - 1 + 1) + 1));  
      
      if(place === 69)
      {
        setPlace(88);
      }    
      else if(place === 67)
      {
        setPlace(48);
      }
      else if(place === 14)
      {
        setPlace(54);
      }
      else if(place === 42)
      {
        setPlace(11);
      }
      else if(place === 72)
      {
        setPlace(28);
      }    
      else if(place === 28)
      {
        setPlace(72);
      }
      else if(place === 89 || place===46 || place===97 )
      {
        setPlace(1);
      }
    }
    
    //setPlace(place + count1);


    
    //==================================================
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
    else if(place1 === 89 || place1===46 || place1===97 )
    {
      setPlace1(1);
    }


  }

  
  
  return (
    <div className="Game">

      <Main place={place}/>

      <div className='button'>
        <button onClick={() => handledice()}>
            {diceuser}
        </button>
        <br />
        <br />
        <br />
          <div className='count'>
            <h1>{count1}</h1>
          </div>       
      </div>
    </div>
  );
}

export default Game;