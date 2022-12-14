import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function Ingredient({ ingredient, count, onIngredientClick }) {
  const [, drag] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  return (
    <li className={styles.card} onClick={onIngredientClick} ref={drag}>
      <img
        className={`${styles.image} mr-4 ml-4`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={`${styles.price} mt-1 mb-1`}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${styles.name} text text_type_main-default `}>
        {ingredient.name}
      </h3>
      {count !== 0 && <Counter count={count} size="default" />}
    </li>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  count: PropTypes.number,
  onIngredientClick: PropTypes.func,
};

export default Ingredient;
