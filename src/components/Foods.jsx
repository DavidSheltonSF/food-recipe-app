import FoodItem from './FoodItem';

export default function Foods({ foodData, setFoodData, setFoodId }) {
  return (
    <div>
      {foodData.map((foodItem) => (
        <FoodItem key={foodItem.id} foodItem={foodItem} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
