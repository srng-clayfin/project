import { useState } from 'react';
import './App.css';
import { Main } from './components/Main';

function App() 
{
 
  const [count,setCount]  = useState(0);  
  const [place,setPlace] = useState(1)
  
  const handledice = () =>
  {
    setCount(Math.floor(Math.random() * 6));
    setPlace(place+count);

    if(place === 70)
    {
      setPlace(97);
    }    
    else if(place === 66)
    {
      setPlace(28);
    }
    else if(place === 85)
    {
      setPlace(31);
    }
    else if(place === 4)
    {
      setPlace(55);
    }
  }
  
  return (
    <div className="App">

      <Main place={place}/>

      <div className='button'>
        <button onClick={handledice}>
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
