import styles from './ingredient.module.css';

export default function Ingredient({ ingredient }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt=""
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            <span>
              {Number.isInteger(ingredient.amount)
                ? ingredient.amount
                : ingredient.amount.toFixed(1)}
            </span>

            <span>{ingredient.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
