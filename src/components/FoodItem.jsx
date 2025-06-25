export default function FoodItem({foodItem}) {
  return (
    <>
      <article>
        <img src={foodItem.image} alt="" />
        <h1>{foodItem.title}</h1>
      </article>
    </>
  );
}