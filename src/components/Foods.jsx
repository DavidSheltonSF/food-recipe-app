import FoodItem from './FoodItem';

export default function Foods({ foodData, setFoodData }) {
  return <div>
    {foodData.map((foodItem) => <FoodItem key={foodItem.id} foodItem={foodItem}/>)}
  </div>;
}
