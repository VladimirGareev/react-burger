import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = (props) => {

  
  return (
    <section className={`${styles.burgerConstructor} pt-25 pr-4 pl-4`}>
      <div className={styles.container}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={
              props.ingredients.find((ingredient) =>
                ingredient._id === "60666c42cc7b410027a1a9b1"
              ).image}
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
              )
            })
          }
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={
              props.ingredients.find((ingredient) =>
                ingredient._id === "60666c42cc7b410027a1a9b1"
              ).image}
          />
        </div>
      </div>
      <div className={`${styles.arrangeContainer} mt-10 pr-4`}>
        <div className={`${styles.totalPrice} mr-10`}>
          <p className="text text_type_digits-medium mr-2">4284</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}


export default BurgerConstructor;