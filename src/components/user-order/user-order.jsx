import styles from "./user-order.module.css";
import {
  FormattedDate,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";


export const UserOrder = ({ order }) => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const selectedIngredients = order.ingredients.map((ingredientID) => {
    return ingredients.find((item) => item._id === ingredientID);
  });

  if (selectedIngredients[0]) {
    selectedIngredients.map((ingredient, index1) => {
      const countNumber = selectedIngredients.filter(
        (item) => item._id === ingredient._id
      );

      if (countNumber.length > 1) {
        selectedIngredients.forEach((item, index2) => {
          if (item._id === ingredient._id && index2 !== index1) {
            selectedIngredients.splice(index2, 1);
          }
        });
      }
      ingredient.count = countNumber.length;

      return selectedIngredients;
    });
  }

  const hiddenImagesCount = selectedIngredients.length - 5;

  const price =
    selectedIngredients[0] === undefined
      ? 0
      : selectedIngredients.reduce(
          (sum, ingredient) => sum + ingredient.price * ingredient.count,
          0
        );

  const status = (order) => {
    switch (order.status) {
      case "done": {
        return "Выполнен";
      }
      case "canceled": {
        return "Отменен";
      }
      case "pending": {
        return "Готовится";
      }
      default: {
        return "не удалось получить статус";
      }
    }
  };

  return (
    <div className={styles.order__container}>
      <div className={styles.order__numberanddate}>
        <p className="text text_type_digits-default">{`#${order.number}`}</p>
        <FormattedDate
          date={new Date(order.updatedAt)}
          className="text text_type_main-default text_color_inactive"
        />
      </div>
      <p
        className={`text text_type_main-medium ml-6 mb-2 mr-6 ${styles.order__name}`}
      >{`${order.name}`}</p>
      <p
        className={`text text_type_main-default ml-6 mb-6 ${styles.textsmall}`}
      >{`${status(order)}`}</p>
      <div className={styles.ingredients__container}>
        <ul className={`${styles.images} ml-6`}>
          {selectedIngredients[0] &&
            selectedIngredients.map((ingredient, index) => {
              if (index < 6) {
                return (
                  <li
                    className={styles.iconContainer}
                    key={ingredient._id}
                    style={{ zIndex: 6 - index }}
                  >
                    <img
                      className={styles.image}
                      src={ingredient.image}
                      alt={ingredient.name}
                    />
                    {index < 5 && ingredient.count > 1 && (
                      <Counter
                        count={ingredient.count}
                        size="small"
                        extraClass={styles.counter}
                      />
                    )}
                    {index === 5 && (
                      <>
                        <div className={styles.overlay}></div>
                        <span
                          className={`${styles.hiddenCount} text text_type_main-small`}
                        >{`+${hiddenImagesCount}`}</span>
                      </>
                    )}
                  </li>
                );
              }
            })}
        </ul>
        <div className={styles.price__container}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
