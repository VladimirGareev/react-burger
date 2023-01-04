import Modal from "../../components/modal/modal";

import { useHistory} from "react-router-dom";

import { FeedOrderDetails } from "../../components/feed-order-details/feed-order-details";

export const Order = () => {
  const history = useHistory();

  const closeModal = () => {
    history.push("/feed");
  };

  return (
     (
      <Modal closeModal={closeModal} onOverlayClick={closeModal}>
        <FeedOrderDetails />
      </Modal>
    )
  );
};
