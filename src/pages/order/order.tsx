import Modal from "../../components/modal/modal";

import { useHistory} from "react-router-dom";

import { FeedOrderDetails } from "../../components/feed-order-details/feed-order-details";
import { FunctionComponent } from "react";

export const Order:FunctionComponent = () => {
  const history = useHistory();

  const closeModal = () => {
    history.push("/feed");
  };

  return (
     (
      <Modal closeModal={closeModal}>
        <FeedOrderDetails />
      </Modal>
    )
  );
};
