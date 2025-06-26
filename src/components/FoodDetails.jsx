import { useEffect, useState } from 'react';

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState([]);
  useEffect(() => {
    //https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
    async function fetchFoodDetails() {
      const apiKey = import.meta.env.VITE_API_KEY;
      const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`;

      const response = await fetch(URL);
      const data = await response.json();
      console.log('Details');
      console.log(data);
      setFood(data);
    }
    fetchFoodDetails();
  }, [foodId]);
  return (
    <div>
      Food Details: {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
