import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { orderBurger } from "../../services/actions/order";
import {
  SET_ORDER_MODAL,
  RESET_ORDER_MODAL,
  CONSTRUCTOR_ADD,
} from "../../services/constants";
import { useDrop } from "react-dnd";
import SelectedComponent from "../selected-component/selected-component";

const BurgerConstructor = () => {
  const selectedIngredients = useSelector((state) => state.constructorBurger);
  const dispatch = useDispatch();

  const bun = selectedIngredients.bun;

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch({ type: CONSTRUCTOR_ADD, payload: item });
    },
  });

  const ingredientList =
    selectedIngredients.ingredients.length !== 0
      ? selectedIngredients.ingredients.map((ingredient) => {
          return ingredient._id;
        })
      : [];

  const orderList = bun ? ingredientList.concat(bun._id) : ingredientList;

  const order = useSelector((state) => state.order.order);

  const isOrderDetailsOpened = useSelector(
    (state) => state.order.isOrderModalOpen
  );

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

  const getOrder = (data) => {
    dispatch(orderBurger(data));
  };

  const openModal = () => {
    bun && orderList.unshift(bun._id);
    getOrder(orderList);
    dispatch({ type: SET_ORDER_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: RESET_ORDER_MODAL });
  };

  return (
    <section
      className={`${styles.burgerConstructor} pt-25 pr-4 pl-4`}
      ref={dropTarget}
    >
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
            .map((ingredient, index) => (
              <SelectedComponent
                ingredient={ingredient}
                index={index}
                key={ingredient.id}
              ></SelectedComponent>
            ))}
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
      {isOrderDetailsOpened && order && (
        <Modal closeModal={closeModal} onOverlayClick={closeModal}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
