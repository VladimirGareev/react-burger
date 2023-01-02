import styles from "./feed-order-details.module.css";
import { useSelector } from "react-redux";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation} from "react-router-dom"


export const FeedOrderDetails = ({order}) => {

    const location = useLocation();

    const background = location.state?.background;

    console.log(background)

    const status = (order) => {
        switch (order.status) {
            case "done" : {
                return "Выполнен"
            }
            case "canceled" : {
                return "Отменен"
            }
            case "cooking" : {
                return "Готовится"
            }
            default :{
                return "не удалось получить статус"
            }
        }
    }

    const ingredients = useSelector((state)=>state.ingredients.ingredients);
    
    const selectedIngredients = order.ingredients.map((ingredientID)=>{
       return ingredients.find((item) =>
           item._id === ingredientID
        )
    })
    
if(selectedIngredients[0]) {selectedIngredients.map((ingredient, index1)=>{
        const countNumber = selectedIngredients.filter(
            (item) => item._id === ingredient._id
          )

    if (countNumber.length > 1)
        {selectedIngredients.forEach(
        (item, index2) => {
            if (item._id === ingredient._id && index2!==index1) {
                selectedIngredients.splice(index2,1)
            }
        }
      )}
           ingredient.count = countNumber.length

           return selectedIngredients
    })
}  

console.log(selectedIngredients)

const price =
    selectedIngredients[0] === undefined
      ? 0
      : selectedIngredients.reduce(
          (sum, ingredient) => sum + ingredient.price*ingredient.count,
          0
        );

    return(
        <div className={styles.container}>
            { background? <p className="text text_type_digits-default mb-10">{`#${order.number}`}</p>
            : <p className={`text text_type_digits-default mb-10 ${styles.order__number}`}>{`#${order.number}`}</p>}
            
            <p className={`text text_type_main-medium  mb-2 ${styles.order__name}`}>{`${order.name}`}</p>
            <p className={`text text_type_main-default  mb-15 ${styles.textsmall}`}>{`${status(order)}`}</p>
            <p className={`text text_type_main-medium  mb-2 ${styles.order__name}`}>Состав:</p>
            <div className={styles.container__ingredients}>
                {selectedIngredients[0]&& selectedIngredients.map((ingredient)=>{
                    return(
                        <div className={styles.ingredient} key={ingredient._id}>
                            <div className={styles.additional}>
                           <img
                      className={styles.image}
                      src={ingredient.image}
                      alt={ingredient.name}
                    />
                    <p className={`text text_type_main-default  ml-6 ${styles.textsmall}`} style={{color: 'white'}}>{ingredient.name}</p>
                    </div>
                    <div className={styles.container__price}>
                    <p className="text text_type_digits-default mr-2">{`${ingredient.count} X ${ingredient.price}`}</p>
                    <CurrencyIcon type="primary" />
                    </div>
                    </div>
                    )
                })}
                

            </div>
            <div className={styles.container__date}>
            <FormattedDate date={new Date(order.updatedAt)} className="text text_type_main-default text_color_inactive mt-10"/>
            <div className={`${styles.container__price} mt-10`}>
                    <p className="text text_type_digits-default mr-2">{`${price}`}</p>
                    <CurrencyIcon type="primary" />
                    </div>
            </div>
        </div>
    )
}