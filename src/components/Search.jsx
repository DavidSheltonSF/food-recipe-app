import { useEffect, useState } from 'react';
import styles from './search.module.css'

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState('');
  const fakeData = {
    results: [
      {
        id: 0,
        title: 'Banana cake',
        image: `src/fakeData/image0.png`,
      },
      {
        id: 1,
        title: 'Apple cake',
        image: `src/fakeData/image1.png`,
      },
    ],
  };
  useEffect(() => {
    async function feachFood() {
      const URL = 'https://api.spoonacular.com/recipes/complexSearch';
      const apiKey = '46d6800bd2e94df7877aea78a755c5e3';
      const response = await fetch(`${URL}?apiKey=${apiKey}&query=${query}`);
      const data = (await response.json()).results

      console.log(data);
      setFoodData(data ? data : fakeData.results);
    }
    feachFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
  a;
}
