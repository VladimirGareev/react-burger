import styles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {ingredientList, selectedIngredients} from '../../utils/data';


const App = () => {
       
  return (
    <body className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
          <BurgerIngredients ingredients={ingredientList} />
          <BurgerConstructor ingredients={ingredientList} selectedIngredients={selectedIngredients}/>
        </main>
    </body>
  );
};

export default App;