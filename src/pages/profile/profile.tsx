import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { useState, FormEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "../../types/store";
import { getUserLoggedOut, updateUser } from "../../services/actions/user";

const Profile:FunctionComponent = () => {
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(getUserLoggedOut());
  };

  const user = useSelector((state) => state.user);
  const [value, setValue] = useState({
    email: user.email,
    password: "",
    name: user.name,
  });

  const onInputChange = (e:FormEvent<HTMLInputElement>) => {
    setValue({ ...value, [(e.target as HTMLFormElement).name]: (e.target as HTMLFormElement).value });
  };

  const onCancelClick = () => {
    setValue({ email: user.email, password: "", name: user.name });
  };

  const onSubmit = () => {
    dispatch(updateUser(value));
  };

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <NavLink
          exact
          to={"/profile"}
          className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
          activeClassName={styles.active}
        >
          Профиль
        </NavLink>
        <NavLink
          exact
          to={"/profile/orders"}
          className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
          activeClassName={styles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          exact
          to={"/profile"}
          className={`${styles.navLink} text text_type_main-medium text_color_inactive`}
          onClick={userLogout}
        >
          Выход
        </NavLink>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.inputContainer}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onInputChange}
          icon={"EditIcon"}
          value={value.name}
          name={"name"}
          error={false}
          //onIconClick={""}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <Input
          type={"email"}
          placeholder={"Логин"}
          onChange={onInputChange}
          icon={"EditIcon"}
          value={value.email}
          name={"email"}
          error={false}
          //onIconClick={""}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={onInputChange}
          icon={"EditIcon"}
          value={value.password}
          name={"password"}
          error={false}
          //onIconClick={""}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <div className={styles.buttonContainer}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={onCancelClick}
          >
            Отмена
          </Button>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onSubmit}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
