import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useContext, useState } from "react";
import { BurgerSelectedContext } from "../../utils/burger-context";
import { Api } from "../../utils/api";

const BurgerConstructor = () => {
  const [selectedIngredients] = useContext(BurgerSelectedContext);

  const bun = selectedIngredients.bun;

  const ingredientList =
    selectedIngredients.ingredients.length !== 0
      ? selectedIngredients.ingredients.map((ingredient) => {
          return ingredient._id;
        })
      : [];

  const orderList = bun ? ingredientList.concat(bun._id) : ingredientList;

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

  const bunPrice = selectedIngredients.bun
    ? selectedIngredients.bun.price * 2
    : 0;

  const ingredientsPrice =
    selectedIngredients.ingredients.length === 0
      ? 0
      : selectedIngredients.ingredients.reduce(
          (sum, ingredient) => sum + ingredient.price,
          0
        );

  const price = bunPrice + ingredientsPrice;

  const orderApi = new Api({
    baseUrl: "https://norma.nomoreparties.space/api/orders",
  });

  const [order, setOrder] = useState([]);

  const getOrder = (data) => {
    orderApi
      .getOrder(data)
      .then((res) => {
        setOrder(res);
        setIsOrderDetailsOpened(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
   bun && orderList.unshift(bun._id);
    getOrder(orderList);
  };

  const closeModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const trigger =
    selectedIngredients.ingredients.length || selectedIngredients.bun;

  return (
    trigger && (
      <section className={`${styles.burgerConstructor} pt-25 pr-4 pl-4`}>
        <div className={styles.container}>
          <div className="ml-8">
            {" "}
            {bun && (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} верх`}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
          </div>
          <ul className={styles.list}>
            {selectedIngredients.ingredients
              .filter((item) => item.type !== "bun")
              .map((ingredient, index) => {
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
            {" "}
            {bun && (
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} низ`}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
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
          <Modal closeModal={closeModal} onOverlayClick={closeModal}>
            <OrderDetails order={order} />
          </Modal>
        )}
      </section>
    )
  );
};

export default BurgerConstructor;
