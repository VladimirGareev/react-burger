import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";

export const Ingredients = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { id } = useParams();

  const closeModal = () => {
    history.push("/");
  };

  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const currentIngredient = ingredients?.find(
    (ingredient) => ingredient._id === id
  );

  return (
    ingredients.length && (
      <Modal closeModal={closeModal} onOverlayClick={closeModal}>
        <IngredientDetails ingredient={currentIngredient} />
      </Modal>
    )
  );
};
