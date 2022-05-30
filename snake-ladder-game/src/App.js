import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'  ;
import './App.css';
import Game from './components/Game';
import { User } from './components/User';


export const userContext = React.createContext();
function App() 
{ 
  
  const [p1,setP1] = useState("");
  const [p2,setP2] = useState("");

  
  return (
    <div className="App">
    <userContext.Provider value={{p1,setP1,p2,setP2}} >
      
        <Routes>
        
        
          <Route exact path='/' element={<User />} ></Route>
          <Route exact path='/game' element={<Game />} ></Route>
        
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;