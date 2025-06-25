import { useState } from 'react';
import Search from './components/Search';
import Foods from './components/Foods';
import Nav from './components/Nav';
import './app.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foods foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
