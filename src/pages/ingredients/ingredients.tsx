import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "../../types/store";
import { useHistory, useParams } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";

export const Ingredients:FunctionComponent = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { id } = useParams() as {id:string};

  const closeModal = () => {
    history.push("/");
  };

  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const currentIngredient = ingredients?.find(
    (ingredient) => ingredient._id === id
  );

  return ( ingredients.length?
    (
      <Modal closeModal={closeModal} >
        <IngredientDetails ingredient={currentIngredient!} />
      </Modal>
    ):null
  );
};
