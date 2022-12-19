import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./login.module.css";
import { Link} from "react-router-dom";
import { useDispatch} from "react-redux";
import { getUserLogged } from "../../services/actions/user";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onButtonClick = () => {
    dispatch(getUserLogged(user));
  };

  return (
    <div className={styles.login}>
      <h2>Вход</h2>
      <EmailInput
        onChange={onUserChange}
        value={user.email}
        name={"email"}
        placeholder="E-mail"
        isIcon={false}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={onUserChange}
        value={user.password}
        name={"password"}
        placeholder="Пароль"
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={onButtonClick}
      >
        Войти
      </Button>
      <div className={styles.additional}>
        <p
          className={`${styles.text} text_type_main-default text_color_inactive`}
        >
          Вы - новый пользователь?
        </p>
        <Link to="/register">
          <Button htmlType="button" type="secondary" size="medium">
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={styles.password}>
        <p
          className={`${styles.text} text_type_main-default text_color_inactive`}
        >
          Забыли пароль?
        </p>
        <Link to="/forgot-password">
          <Button htmlType="button" type="secondary" size="medium">
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
