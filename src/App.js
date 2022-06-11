import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path ="/"element={<Home />} />
         <Route path ="/about-us"element={<About />} />
         <Route path ="/login"element={<Login />} />
         <Route path ="/signup"element={<Signup />} />
        
        
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
