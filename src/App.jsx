
import Character from "./pages/Character";
import Item from "./components/Item";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.log(error);
    }
  };


  function handleClick(e,id){
    
  }


  useEffect(() => {
    fetchData();
  }, []);



  // Пока данные загружаются, можно показать loader или другое отображение ожидания
  if (data.length === 0) {
    return <div>Loading...</div>;
  }



  return (
    <div className="App">
      <ul>
        {data.map((el) => (
          <li key={el.id} onClick={(e)=> handleClick(e,el.id)}>
            <Link to="/character"><Item data={el} /></Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;