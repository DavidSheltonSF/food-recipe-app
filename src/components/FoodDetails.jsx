import { useEffect, useState } from 'react';
import styles from "./foodDetails.module.css";
import Ingredients from './Ingredients';

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
    async function fetchFoodDetails() {
      const apiKey = import.meta.env.VITE_API_KEY;
      const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`;

      const response = await fetch(URL);
      const data = await response.json();
      const fakeData = {
        title: 'Food Name',
        image: 'src/fakeData/image0.png',
        readyInMinutes: 777,
      };
      console.log('Details');
      console.log(data);
      setFood(data);
      setIsLoading(false);
      console.log('ready')
    }
    fetchFoodDetails();
  }, [foodId]);
  return (
    <div>
      <article className={styles.recipeCard}>
        <h1 className={styles.recepiName}>{food.title}</h1>
        <img
          className={styles.recipeImage}
          src={food.image}
          alt={food.title || 'Food image'}
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️ {food.readyInMinutes} Minutes</strong>
            <span>
              {food.vegetarian ? '🥕️ Vegetarian' : ' 🥩️ Non-Vegetarian'}
            </span>
            <span>{food.vegan ? '🍉️ Vegan' : ' 🧀️  Non-Vegan'}</span>
          </span>
          <span>
            <strong> 👨‍👩‍👧‍👦️ Serves {food.servings}</strong>
          </span>
        </div>
        <div>
          <span>💲️ {food.pricePerServing}</span>
        </div>
          <Ingredients isLoading={isLoading} food={food}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          )}
        </div>
      </article>
    </div>
  );
}
