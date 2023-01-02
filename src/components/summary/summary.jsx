import styles from "./summary.module.css";

export const Summary = ({orders}) => {
    const done=  orders.orders.filter((order) => order.status === "done");
    const pending=  orders.orders.filter((order) => order.status === "pending");
    const total = orders.total;
    const totalToday = orders.totalToday

    return (
        <div className={styles.summary}>
      <div className={styles.status}>
        {done.length && (
          <div >
            <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
            <div className={styles.numbers}>
              <ul className={styles.list}>
                {done.map(
                  (order, index) =>
                    index < 10 && (
                      <li
                        className={`${styles.done} text text_type_digits-default`}
                        key={order.number}
                      >
                        {order.number}
                      </li>
                    )
                )}
              </ul>
              <ul className={styles.list}>
                {done.map(
                  (order, index) =>
                    index >= 10 &&
                    index < 20 && (
                      <li
                        className={`${styles.done} text text_type_digits-default`}
                        key={order.number}
                      >
                        {order.number}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        )}
        {pending[0] && (
          <div>
            <h2 className="text text_type_main-medium mb-6">В работе:</h2>
            <div className={styles.numbers}>
              <ul className={styles.list}>
                {pending.map(
                  (order, index) =>
                    index < 10 && (
                      <li className="text text_type_digits-default" key={index}>
                        {order.number}
                      </li>
                    )
                )}
              </ul>
              <ul className={styles.list}>
                {pending.map(
                  (order, index) =>
                    index >= 10 &&
                    index < 20 && (
                      <li className="text text_type_digits-default" key={index}>
                        {order.number}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <span
          className={`${styles.digits} text text_type_digits-large`}
        >
          {total}
        </span>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <span
          className={`${styles.digits} text text_type_digits-large`}
        >
          {totalToday}
        </span>
      </div>
    </div>
    )
}
      