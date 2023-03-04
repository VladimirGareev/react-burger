import styles from "./private-order-details.module.css";
import { useSelector } from "../../types/store";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "../../types/store";
import { FunctionComponent, useEffect } from "react";
import { connectUserWs } from "../../services/actions/web-socket";
import { getIngredients } from "../../services/actions/ingredients";
import { getCookie } from "../../utils/cookie";
import { TIngredient } from "../../types/ingredients";
import { TWSOrder } from "../../types/wsTypes";

export const PrivateOrderDetails:FunctionComponent = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.personal?.orders);
  const ingredients = useSelector((state) => state.ingredients?.ingredients);

  const token = getCookie("accessToken");
  const accessToken = token.replace("Bearer ", "");

  useEffect(() => {
    if (!orders) {
      dispatch(connectUserWs(accessToken));
    }
  }, [dispatch, accessToken, orders]);


  useEffect(() => {
    if (!ingredients) {
      dispatch(getIngredients());
    }
  }, [dispatch, ingredients]);

  const { userOrderId } = useParams() as {userOrderId:string};

  const order = orders?.find((order) => order._id === userOrderId);

  const location = useLocation();

  const background = (location.state as {background:string}).background;

  const status = (order:TWSOrder) => {
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

  const selectedIngredients = order?.ingredients.map((ingredientID) => {
    return ingredients.find((item) => item._id === ingredientID);
  }) as TIngredient[];

  if (selectedIngredients) {
    selectedIngredients.map((ingredient, index1) => {
      const countNumber = selectedIngredients.filter(
        (item) => item?._id === ingredient?._id
      );

      if (countNumber.length > 1) {
        selectedIngredients.forEach((item, index2) => {
          if (item?._id === ingredient?._id && index2 !== index1) {
            selectedIngredients.splice(index2, 1);
          }
        });
      }
      ingredient.count = countNumber.length;

      return selectedIngredients;
    });
  }

  const price =
    selectedIngredients === undefined
      ? 0
      : selectedIngredients.reduce(
          (sum, ingredient) => ingredient.count?sum + ingredient.price * ingredient.count:sum+0,
          0
        );
return(order?
   (
    order && (
      <div className={styles.container}>
        {background ? (
          <p className="text text_type_digits-default mb-10">{`#${order.number}`}</p>
        ) : (
          <p
            className={`text text_type_digits-default mb-10 ${styles.order__number}`}
          >{`#${order.number}`}</p>
        )}

        <p
          className={`text text_type_main-medium  mb-2 ${styles.order__name}`}
        >{`${order.name}`}</p>
        <p
          className={`text text_type_main-default  mb-15 ${styles.textsmall}`}
        >{`${status(order)}`}</p>
        <p className={`text text_type_main-medium  mb-2 ${styles.order__name}`}>
          Состав:
        </p>
        <div className={styles.container__ingredients}>
          {selectedIngredients &&
            selectedIngredients.map((ingredient) => {
              return (
                <div className={styles.ingredient} key={ingredient._id}>
                  <div className={styles.additional}>
                    <img
                      className={styles.image}
                      src={ingredient.image}
                      alt={ingredient.name}
                    />
                    <p
                      className={`text text_type_main-default  ml-6 ${styles.textsmall}`}
                      style={{ color: "white" }}
                    >
                      {ingredient.name}
                    </p>
                  </div>
                  <div className={styles.container__price}>
                    <p className="text text_type_digits-default mr-2">{`${ingredient.count} X ${ingredient.price}`}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.container__date}>
          <FormattedDate
            date={new Date(order.updatedAt)}
            className="text text_type_main-default text_color_inactive mt-10"
          />
          <div className={`${styles.container__price} mt-10`}>
            <p className="text text_type_digits-default mr-2">{`${price}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div> 
    ) 
  ) : null);
};
