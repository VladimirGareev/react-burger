import styles from "./orders.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../types/store";
import { getUserLoggedOut } from "../../services/actions/user";
import { UserOrder } from "../../components/user-order/user-order";
import { getCookie } from "../../utils/cookie";
import { FunctionComponent, useEffect } from "react";
import { connectUserWs, closeUserWs } from "../../services/actions/web-socket";

const Orders:FunctionComponent = () => {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");

  const accessToken = token.replace("Bearer ", "");

  useEffect(() => {
    dispatch(connectUserWs(accessToken));
    return () => {dispatch(closeUserWs())};
  }, [dispatch, accessToken]);

  const orders = useSelector((store) => store.orders.personal?.orders);

  const userLogout = () => {
    dispatch(getUserLoggedOut());
  };

  const location = useLocation();

  return (
    <div className={styles.section}>
      <div className={styles.profile}>
        <div className={styles.container}>
          <NavLink
            exact
            to={"/profile"}
            className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.active}
          >
            Профиль
          </NavLink>
          <NavLink
            exact
            to={"/profile/orders"}
            className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.active}
          >
            История заказов
          </NavLink>
          <NavLink
            exact
            to={"/profile"}
            className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
            onClick={userLogout}
          >
            Выход
          </NavLink>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            В этом разделе вы можете просмотреть свою историю заказов
          </p>
        </div>
        <div className={styles.orders__container}>
          {orders &&
            orders.map((order) => {
              return (
                <Link
                  to={{
                    pathname: `/profile/orders/${order._id}`,
                    state: { background: location },
                  }}
                  key={order._id}
                  className={styles.link}
                >
                  <UserOrder order={order} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
