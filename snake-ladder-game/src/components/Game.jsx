import { useEffect, useState } from 'react';
import '../App.css';
import { Main } from './/Main';

function Game() 
{ 
  const [count,setCount]  = useState(0);  
  const [place,setPlace] = useState(1)

  useEffect(
      ()=>{
        setPlace(count+place);
      },[count]
    );

  if(place >= 100)
  {
    alert("Win => 👑");    
    setPlace(1);    
  }
    
  

  const handledice = () =>
  {
    setCount(Math.floor(Math.random() * (6 - 1 + 1) + 1));
    //setPlace(place + count);
 
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
    else if(place === 89 || place===46 )
    {
      setPlace(1);
    }


  }

  
  
  return (
    <div className="Game">

      <Main place={place}/>

      <div className='button'>
        <button onClick={() => handledice()}>
            Dice
        </button>
        <br />
        <br />
        <br />
          <div className='count'>
            <h1>{count}</h1>
          </div>       
      </div>
    </div>
  );
}

export default Game;