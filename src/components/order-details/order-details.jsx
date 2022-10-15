import styles from "./order-details.module.css";
import done from "../../images/done.jpg";

const OrderDetails = () => {
  return (
    <div className={`${styles.container} mt-30 mb-30 ml-25 mr-25`}>
      <p className="text text_type_digits-large">034536</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img src={done} alt="картинка заказ принят" className="mt-15" />
      <p className="text text_type_main-default mt-15">
        ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
