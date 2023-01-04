import Modal from "../../components/modal/modal";
import { useHistory} from "react-router-dom";
import { PrivateOrderDetails } from "../../components/private-order-details/private-order-details";

export const UserOrderDetails = () => {

  const history = useHistory();

  const closeModal = () => {
    history.push("/profile/orders");
  };

  return ( (
      <Modal closeModal={closeModal} onOverlayClick={closeModal}>
        <PrivateOrderDetails />
      </Modal>
    )
  );
};
