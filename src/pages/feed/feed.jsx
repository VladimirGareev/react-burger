import styles from "./feed.module.css";
import { FeedOrder } from "../../components/feed-order/feed-order";
import { Link, useLocation } from "react-router-dom";
import { Summary } from "../../components/summary/summary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAllWs, connectAllWs } from "../../services/actions/web-socket";

export const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectAllWs());
    return () => dispatch(closeAllWs());
  }, [dispatch]);

  const orders = useSelector((store) => store.orders.public?.orders);
  const publicOrders = useSelector((store) => store.orders.public);

  const location = useLocation();

  return (
    <section className={styles.feed__section}>
      <div className={styles.orders__section}>
        <h1 className="text text_type_main-large mt-10 mb-5 ml-5">
          Лента заказов
        </h1>
        <div className={styles.orders__container}>
          {orders &&
            orders.map((order) => {
              return (
                <Link
                  to={{
                    pathname: `/feed/${order._id}`,
                    state: { background: location },
                  }}
                  key={order._id}
                  className={styles.link}
                >
                  <FeedOrder key={order._id} order={order} />
                </Link>
              );
            })}
        </div>
      </div>

      {orders && <Summary orders={publicOrders} />}
    </section>
  );
};
