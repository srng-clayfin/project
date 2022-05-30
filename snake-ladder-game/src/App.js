import { Route, Routes } from 'react-router-dom'  ;
import './App.css';
import Game from './components/Game';
import { User } from './components/User';


function App() 
{ 
  
  return (
    <div className="App">
        {/* <Game /> */}
        {/* <User /> */}
        <Routes>
        
          <Route exact path='/' element={<User />} ></Route>
          <Route exact path='/game' element={<Game />} ></Route>
        
        </Routes>
   
    </div>
  );
}

export default App;