import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
//import { selectedIngredients } from "../../utils/data";
import { currentUrl } from "../../utils/data";
import { Api } from "../../utils/api";
import React, { useEffect, useState, useReducer } from "react";
import {
  BurgerContext,
  BurgerSelectedContext,
} from "../../utils/burger-context";

const newApi = new Api({ baseUrl: currentUrl });

const App = () => {
  const [ingredients, setIngredints] = useState([]);

  const getIngredients = () => {
    newApi
      .getInfo()
      .then((res) => {
        setIngredints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const initialBurgerState ={ingredients: []};

//TODO: default case in reducer to be adressed

  function reducer (state, action) {
    switch (action.type) {
      case "ADD":
        if (action.payload.type === "bun") {
          return {
            ...state,
            bun: action.payload,
          };
        } else {
          return {
            ...state,
            ingredients: [action.payload, ...state.ingredients]
          };
          };
        }
    }
  

  const [selectedIngredients, burgerDispatcher] = useReducer(reducer, initialBurgerState, undefined);

  return (
    <div className={styles.page}>
      <AppHeader />
      {ingredients.length && (
        <main className={styles.main}>
          <BurgerContext.Provider value={ingredients}>
            <BurgerSelectedContext.Provider value={[selectedIngredients, burgerDispatcher]}>
            <BurgerIngredients
            //ingredients={ingredients}
            //selectedIngredients={selectedIngredients}
          />
          
              <BurgerConstructor />
            </BurgerSelectedContext.Provider>
          </BurgerContext.Provider>
        </main>
      )}
    </div>
  );
};

export default App;
