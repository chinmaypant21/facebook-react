import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('')

  useEffect(()=>{
    setName('Chinz (Guest)')

    if (localStorage.getItem("profileName") === null){
      navigate("/login")
    }
    else{
      setName(localStorage.getItem("profileName"))
    }
  },[])

  return (
    <>
      <Routes>
        <Route path='*' exact element={<Home profileName={name} />} />
        <Route path='login' exact element={<Login setName={setName} />} />
      </Routes>
    </>
  );
}

export default App;
