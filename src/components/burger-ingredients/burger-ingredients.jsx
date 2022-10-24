import { useState, useRef, useContext } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredients/ingredient";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {
  BurgerContext,
  BurgerSelectedContext,
} from "../../context/burger-context";

function BurgerIngredients() {
  const ingredients = useContext(BurgerContext);

  const [selectedIngredients, burgerDispatcher] = useContext(
    BurgerSelectedContext
  );

  const [current, setCurrent] = useState("bun");
  const [isIngredientInfoOpened, setisIngredientInfoOpened] = useState(false);
  const [ingredientInfo, setIngredeintInfo] = useState(null);
  const openModal = (ingredient) => {
    setisIngredientInfoOpened(true);
    setIngredeintInfo(ingredient);
    burgerDispatcher({
      type: "ADD",
      payload: ingredient,
    });
  };
  const closeModal = () => {
    setisIngredientInfoOpened(false);
    setIngredeintInfo(null);
  };

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

  return (
    <section style={{ justifySelf: "end" }}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <nav style={{ display: "flex" }}>
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
      </nav>
      <div className={styles.burgerContainer}>
        <h2 id="bun" className="text text_type_main-medium" ref={bunRef}>
          Булки
        </h2>
        <ul className={styles.ingredientSet}>
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
        <ul className={styles.ingredientSet}>
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
        <ul className={styles.ingredientSet}>
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
          <IngredientDetails ingredient={ingredientInfo} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
