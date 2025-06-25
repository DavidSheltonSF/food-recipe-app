import { useEffect, useState } from 'react';

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    async function feachFood() {
      const URL = 'https://api.spoonacular.com/recipes/complexSearch';
      const apiKey = '46d6800bd2e94df7877aea78a755c5e3';
      const response = await fetch(`${URL}?apiKey=${apiKey}&query=${query}`);
      const data = (await response.json()).results
      console.log(data);
      setFoodData(data);
    }
    feachFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
  a;
}
