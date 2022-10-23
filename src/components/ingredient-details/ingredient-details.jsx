import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`${styles.container} mt-15 mb-15 ml-10 mr-10`}>
      <h2 className={`${styles.heading} text text_type_main-large mb-3`}>
        Детали ингредиента
      </h2>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <ul className={styles.info}>
        <li className={styles.item}>
          <span className="text text_type_main-default">Калории,ккал</span>
          <p className="text text_type_digits-default">{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <span className="text text_type_main-default">Белки, г</span>
          <p className="text text_type_digits-default">{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <span className="text text_type_main-default">Жиры, г</span>
          <p className="text text_type_digits-default">{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <span className="text text_type_main-default">Углеводы, г</span>
          <p className="text text_type_digits-default">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }),
};

export default IngredientDetails;
