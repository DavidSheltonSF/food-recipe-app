import Ingredient from "./Ingredient";

export default function Ingredients({ isLoading, food }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((ingredient) => (
          <Ingredient key={ingredient.id} ingredient={ingredient}/>
        ))
      )}
    </div>
  );
}
