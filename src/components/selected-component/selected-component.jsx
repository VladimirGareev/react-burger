import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrop, useDrag } from "react-dnd";
import { useRef } from "react";
import styles from "./selected-component.module.css";
import { CONSTRUCTOR_DELETE } from "../../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { constructorReorder } from "../../services/actions/constructor";

const SelectedComponent = ({ ingredient, index }) => {
  const selectedIngredients = useSelector(
    (state) => state.constructorBurger.ingredients
  );
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = ingredient.id;
  const [, drop] = useDrop({
    accept: "сonstructor",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(constructorReorder(selectedIngredients, dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "сonstructor",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  return (
    <li
      className={styles.item}
      ref={ref}
      // data-handler-id={handlerId}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        index={index}
        thumbnail={ingredient.image}
        handleClose={() => {
          dispatch({
            type: CONSTRUCTOR_DELETE,
            payload: ingredient,
          });
        }}
      />
    </li>
  );
};

export default SelectedComponent;

SelectedComponent.propTypes = {
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
