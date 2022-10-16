import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useState } from "react";
import { ingredient } from "../../utils/data";

const BurgerConstructor = (props) => {
  const bun = props.ingredients.find(
    (ingredient) => ingredient._id === "60d3b41abdacab0026a733c6"
  );

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

  const price =
    bun.price * 2 +
    props.selectedIngredients.reduce(
      (sum, ingredient) => sum + ingredient.price,
      0
    );

  const openModal = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeModal = () => {
    setIsOrderDetailsOpened(false);
  };

 
  return (
    <section className={`${styles.burgerConstructor} pt-25 pr-4 pl-4`}>
      <div className={styles.container}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={styles.list}>
          {props.selectedIngredients.map((ingredient, index) => {
            return (
              <li className={styles.item} key={index}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          })}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={`${styles.arrangeContainer} mt-10 pr-4`}>
        <div className={`${styles.totalPrice} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={openModal}
        >
          Оформить заказ
        </Button>
      </div>
      {isOrderDetailsOpened && (
        <Modal
          closeModal={closeModal}
          onOverlayClick={closeModal}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  props: PropTypes.shape({
    ingredients: PropTypes.arrayOf(ingredient).isRequired,
    selectedIngredients: PropTypes.arrayOf(ingredient).isRequired,
  }),
};

export default BurgerConstructor;
