import { useState, useRef, useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredients/ingredient";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { useInView } from "react-intersection-observer";

import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_INGREDIENT_MODAL,
  RESET_INGREDIENT_MODAL,
} from "../../services/constants";


function BurgerIngredients() {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.ingredients);
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const [current, setCurrent] = useState("bun");

  const openModal = (ingredient) => {
    dispatch({ type: SET_INGREDIENT_MODAL, payload: ingredient });
  };
  const closeModal = () => {
    dispatch({ type: RESET_INGREDIENT_MODAL });
  };

  const isIngredientInfoOpened = useSelector(
    (state) => state.ingredient.isOpen
  );

  const selectedIngredients = useSelector((state) => state.constructorBurger);

  const currentIngredient = useSelector((state) => state.ingredient.ingredient);

  const countValue = (ingredient) => {
    if (ingredient.type !== "bun") {
      const countNumber = selectedIngredients.ingredients.filter(
        (item) => item.name === ingredient.name
      );
      return countNumber.length;
    } else {
      if (selectedIngredients.bun) {
        return ingredient.name === selectedIngredients.bun.name ? 2 : 0;
      } else {
        return 0;
      }
    }
  };

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const setCurrentBun = (e) => {
    setCurrent(e);
    const offSetPosition =
      bunRef.current.getBoundingClientRect().top -
      bunRef.current.parentNode.offsetTop;
    bunRef.current.parentNode.scrollBy({
      top: offSetPosition,
      behavior: "smooth",
    });
  };

  const setCurrentSauce = (e) => {
    setCurrent(e);
    const offSetPosition =
      sauceRef.current.getBoundingClientRect().top -
      sauceRef.current.parentNode.offsetTop;
    sauceRef.current.parentNode.scrollBy({
      top: offSetPosition,
      behavior: "smooth",
    });
  };

  const setCurrentMain = (e) => {
    setCurrent(e);
    const offSetPosition =
      mainRef.current.getBoundingClientRect().top -
      mainRef.current.parentNode.offsetTop;
    mainRef.current.parentNode.scrollBy({
      top: offSetPosition,
      behavior: "smooth",
    });
  };

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0,
  });

  const [mainsRef, inViewFilling] = useInView({
    threshold: 0,
  });
  const [saucesRef, inViewSauces] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("bun");
    } else if (inViewSauces) {
      setCurrent("sauce");
    } else if (inViewFilling) {
      setCurrent("main");
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  return (
    <section  className={styles.burgerSection}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.burgerNav}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrentBun}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={setCurrentSauce}
        >
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrentMain}>
          Начинки
        </Tab>
      </div>
      <div className={styles.burgerContainer}>
        <h2 id="bun" className="text text_type_main-medium" ref={bunRef}>
          Булки
        </h2>
        <ul className={styles.ingredientSet} ref={bunsRef}>
          {ingredients.map(
            (ingredient) =>
              ingredient.type === "bun" && (
                <Ingredient
                  key={ingredient._id}
                  ingredient={ingredient}
                  count={countValue(ingredient)}
                  onIngredientClick={() => openModal(ingredient)}
                />
              )
          )}
        </ul>
        <h2 id="sauce" className="text text_type_main-medium" ref={sauceRef}>
          Соусы
        </h2>
        <ul className={styles.ingredientSet} ref={saucesRef}>
          {ingredients.map(
            (ingredient) =>
              ingredient.type === "sauce" && (
                <Ingredient
                  key={ingredient._id}
                  ingredient={ingredient}
                  count={countValue(ingredient)}
                  onIngredientClick={() => openModal(ingredient)}
                />
              )
          )}
        </ul>

        <h2 id="main" className="text text_type_main-medium" ref={mainRef}>
          Начинки
        </h2>
        <ul className={styles.ingredientSet} ref={mainsRef}>
          {ingredients.map(
            (ingredient) =>
              ingredient.type === "main" && (
                <Ingredient
                  key={ingredient._id}
                  ingredient={ingredient}
                  count={countValue(ingredient)}
                  onIngredientClick={() => openModal(ingredient)}
                />
              )
          )}
        </ul>
      </div>
      {isIngredientInfoOpened && (
        <Modal closeModal={closeModal} onOverlayClick={closeModal}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
