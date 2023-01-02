import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";
import { mockOrder } from "../../services/constants";
import { FeedOrderDetails } from "../../components/feed-order-details/feed-order-details";

export const Order = () => {
  const dispatch = useDispatch();

  const history = useHistory();

//   useEffect(() => {
//     dispatch(getIngredients());
//   }, [dispatch]);

  const { orderId } = useParams();

  const order = mockOrder.orders.find((order)=>order._id === orderId);

  const closeModal = () => {
    history.push("/feed");
  };

//   const ingredients = useSelector((state) => state.ingredients.ingredients);

//   const currentIngredient = ingredients?.find(
//     (ingredient) => ingredient._id === id
//   );

  return (
    mockOrder.orders.length && (
      <Modal closeModal={closeModal} onOverlayClick={closeModal}>
        <FeedOrderDetails order={order} />
      </Modal>
    )
  );
};
