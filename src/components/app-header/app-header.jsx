import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${styles.header} pl-10 pr-10 pb-10 pt-10`}>
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li className="pt-4 pr-5 pb-4 pl-5 mr-2">
            <a href="#" className={styles.link}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default ml-2">Конструктор</p>
            </a>
          </li>
          <li className="pt-4 pr-5 pb-4 pl-5 mr-2">
            <a href="#" className={styles.link}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default ml-2">Лента заказов</p>
            </a>
          </li>
        </ul>
        <Logo />
        <a href="#" className={styles.link}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
