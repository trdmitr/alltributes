import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Papa from "papaparse";
import Homepage from "./Components/Home/Homepage";
import TribOne from "./Components/TribOne/TribOne";

function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [data, setData] = useState({});
  useEffect (() => {
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRbUS2ZPwRDZku4EiyLzIf2IiUunLetx18XnhZKjNSXVRI_5DemOeJvKCBzx_wadV8S9ro9MxsvROJQ/pub?output=csv",
   {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data)
    }
  })
  }, [])
  

  const tributes = Array.from(data);

  // console.log(tributes)
  return (
    <div className="App">
       
        <HashRouter>
           <Routes>
          <Route exact path="/" element={<Homepage 
          tributes = {tributes} />} />
          <Route path='/tributs/:id' element={<TribOne tributes = {tributes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
