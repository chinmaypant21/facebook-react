import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/watch/' exact element={<  Watch />}/>
      </Routes>
    </>
  );
}

export default App;
