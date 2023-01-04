import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Constructor from "../../pages/main/constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Switch, useLocation } from "react-router-dom";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import { ProtectedRoute } from "../protected-route/protected-route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../services/actions/user";
import Orders from "../../pages/orders/orders";
import { Ingredients } from "../../pages/ingredients/ingredients";
import { getIngredients } from "../../services/actions/ingredients";
import { Feed } from "../../pages/feed/feed";
import { Order } from "../../pages/order/order";
import { UserOrderDetails } from "../../pages/user-order-details/user-order-details";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const location = useLocation();

  const background = location.state?.background;

  return (
    <div className={styles.page}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Switch location={background || location}>
          <ProtectedRoute path="/login" exact onlyUnAuth>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/register" exact onlyUnAuth>
            <Register />
          </ProtectedRoute>
          <ProtectedRoute path="/forgot-password" exact onlyUnAuth>
            <ForgotPassword />
          </ProtectedRoute>
          <ProtectedRoute path="/reset-password" exact onlyUnAuth>
            <ResetPassword />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact>
            <Orders />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders/:userOrderId" exact>
            <UserOrderDetails />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" exact>
            <Profile />
          </ProtectedRoute>
          <Route path="/" exact>
            <Constructor />
          </Route>
          <Route path="/feed" exact>
            <Feed />
          </Route>
        </Switch>
        {background && (
          <Route path="/profile/orders/:userOrderId" exact>
            <UserOrderDetails />
          </Route>
        )}
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
        <Route path="/feed/:orderId">
          <Order />
        </Route>
      </DndProvider>
    </div>
  );
};

export default App;
