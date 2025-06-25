import { useState } from 'react';
import Search from './components/Search';
import Foods from './components/Foods';

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Foods foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
