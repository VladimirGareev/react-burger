import styles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {selectedIngredients} from '../../utils/data';
import {currentUrl} from '../../utils/data';
import { Api } from '../../utils/api';
import { useEffect, useState } from 'react';

const newApi = new Api({baseUrl:currentUrl});

const App = () => {

  const[ingredients, setIngredints] = useState([]);

const getIngredients = ()=>{
    newApi.getInfo().then((res) => {
       setIngredints(res.data);
  })
}

useEffect(()=>{
  getIngredients();
}, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      {ingredients.length &&(
      <main className={styles.main}>
          <BurgerIngredients ingredients={ingredients} selectedIngredients={selectedIngredients}/>
          <BurgerConstructor ingredients={ingredients} selectedIngredients={selectedIngredients}/>
        </main>)}
    </div>
  );
};

export default App;