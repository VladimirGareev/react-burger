import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredients/ingredient";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";



function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = useState("bun");

  return (
    <section style={{justifySelf: "end"}}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={styles.burgerContainer}>
        <h2 id="bun" className="text text_type_main-medium">Булки</h2>
        <ul className={styles.ingredientSet}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === "bun" && 
                  <Ingredient
                    key={ingredient._id}
                    ingredient={ingredient}
                    count={1}
                    />           
            )}
        </ul>
        <h2 id="sauce" className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.ingredientSet}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === "sauce" && 
                  <Ingredient
                    key={ingredient._id}
                    ingredient={ingredient}
                    count={1}
                    />           
            )}
        </ul>
      
      
        <h2 id="main" className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.ingredientSet}>
            {ingredients.map(
              (ingredient) =>
                ingredient.type === "main" && 
                  <Ingredient
                    key={ingredient._id}
                    ingredient={ingredient}
                    count={1}
                    />           
            )}
        </ul>
      </div>
      
        
      
    </section>
  );
}

export default BurgerIngredients;
