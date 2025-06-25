import { useState } from 'react';
import Search from './components/Search';
import Foods from './components/Foods';
import Nav from './components/Nav';
import "./app.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Foods foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
