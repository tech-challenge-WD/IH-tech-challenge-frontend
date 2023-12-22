import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import phones from "./phones.json"
import { Router, Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import PhoneDetails from './pages/PhoneDetails';




function App() {
  const [phones, setPhones] = useState("")
  //const navigate = useNavigate();
  const BACKEND_ROOT = import.meta.env.VITE_SERVER_URL;


  useEffect(() => {                                // <== ADD THE EFFECT
    getPhones();

  }, []);

  const getPhones = () => {
    axios
      .get(`${BACKEND_ROOT}/phones`)
      .then((response) => {
        console.log('response.data', response.data);
        console.log(response.data)
        setPhones(response.data)
      })
      .catch((error) => {
        navigate("/error")
      });
  }

  return (
    <>
      <h2>LIST OF PHONES</h2>
      <Routes>
        <Route path="/phones" element={<HomePage/>} />
        <Route path="/phones/:phoneId" element={<PhoneDetails/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
