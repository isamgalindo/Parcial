import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Password from './Password';
import Carros from './Carros';
import Descripciones from './Descripciones';
import Modificaciones from './Modificaciones';

function App() {
  function getRandomBoolean() {
    return Math.random() < 0.5; 
  }
  const randomBool = getRandomBoolean();
  console.log(randomBool);
  const sharedVariable = {id: 1, email: '', password: '', role: randomBool};
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Password" element={<Password/>}  />
        <Route path="/Carros" element={<Carros />} />
        <Route path="/Descripciones/:carroCarModel" element={<Descripciones sharedVariable={sharedVariable} />} />

        <Route path="/Modificaciones/:carroCarModel" element={<Modificaciones sharedVariable={sharedVariable} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
