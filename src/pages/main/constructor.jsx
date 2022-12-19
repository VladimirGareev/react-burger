import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import styles from "./constructor.module.css";

const Constructor = () => {
  return (
    <div className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

export default Constructor;
