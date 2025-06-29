import styles from "./foodItem.module.css"

export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <>
      <article className={styles.itemContainer}>
        <img className={styles.itemImage} src={foodItem.image} alt="" />
        <div className={styles.itemContent}>
          <p className={styles.itemName}>{foodItem.title}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setFoodId(foodItem.id)}
            className={styles.itemButton}
          >
            View Recipe
          </button>
        </div>
      </article>
    </>
  );
}