import styles from "./feed.module.css";
import { mockOrder } from "../../services/constants";
import {FeedOrder} from "../../components/feed-order/feed-order";
import {Link, useLocation} from "react-router-dom"
import { Summary } from "../../components/summary/summary";

export const Feed = () => {
const orders = mockOrder.orders;
const location = useLocation();

    return (
        <section className={styles.feed__section}>
            <div className={styles.orders__section}>
            <h1 className="text text_type_main-large mt-10 mb-5 ml-5">Лента заказов</h1>
            <div className={styles.orders__container}>
            {orders.map((order)=>{
                return(
                <Link 
                to={{
                    pathname: `/feed/${order._id}`,
                    state: { background: location },
                  }}
                  key={order._id}
                  className={styles.link}>
                <FeedOrder key={order._id} order={order}/>
                </Link>
            )})}
            
            </div>
             </div>
            
                  <Summary orders={mockOrder}/>
            

            
           
        </section>
    )
}