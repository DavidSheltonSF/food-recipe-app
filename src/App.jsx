import { useState } from 'react';
import Search from './components/Search';
import Foods from './components/Foods';
import Nav from './components/Nav';
import './app.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState('715415');
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foods
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodId={setFoodId}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
