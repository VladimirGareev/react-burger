import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import {FC} from 'react';

const AppHeader:FC = () => {
  const constructorMatch = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
    exact: true,
  });

  const profileMatch = useRouteMatch({
    path: "/profile",
    strict: true,
    sensitive: true,
  });

  const orderMatch = useRouteMatch({
    path: "/profile/orders",
    strict: true,
    sensitive: true,
    exact: true,
  });

  return (
    <header className={`${styles.header} pl-10 pr-10 pb-10 pt-10`}>
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li className="pt-4 pr-5 pb-4 pl-5 mr-2">
            <NavLink
              to={"/"}
              className={styles.link}
              activeClassName={styles.active}
            >
              {constructorMatch ? (
                <BurgerIcon type="primary" />
              ) : (
                <BurgerIcon type="secondary" />
              )}
              <p className="text text_type_main-default ml-2">Конструктор</p>
            </NavLink>
          </li>
          <li className="pt-4 pr-5 pb-4 pl-5 mr-2">
            <NavLink
              to={"/feed"}
              className={styles.link}
              activeClassName={styles.active}
            >
              {orderMatch ? (
                <ListIcon type="secondary" />
              ) : (
                <ListIcon type="primary" />
              )}
              <p className="text text_type_main-default ml-2">Лента заказов</p>
            </NavLink>
          </li>
        </ul>
        <Logo />
        <NavLink
          to={"/profile"}
          className={styles.link}
          activeClassName={styles.active}
        >
          {profileMatch ? (
            <ProfileIcon type="primary" />
          ) : (
            <ProfileIcon type="secondary" />
          )}
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
