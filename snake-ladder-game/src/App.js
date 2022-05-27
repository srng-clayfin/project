import { useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/Main';

function App() 
{ 
  const [count,setCount]  = useState(0);  
  const [place,setPlace] = useState(1)
//   useEffect(()=>{
    
//     console.log('place changed',place);
// },[place]);
  if(place >= 100)
  {
    alert("Win => 👑");    
    setPlace(1);    
  }
    
  

  const handledice = () =>
  {
    setCount(0 + Math.floor(1 + Math.random() * 6));
    setPlace(place + count);
 
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
  }

  
  
  return (
    <div className="App">

      <Main place={place}/>

      <div className='button'>
        <button onClick={() => handledice()}>
            Dice
        </button>
          <br />
          <br />
        <h2>
          {count}
        </h2>        
      </div>

    </div>
  );
}

export default App;
