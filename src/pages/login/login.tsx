import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, FormEvent, FunctionComponent } from "react";
import styles from "./login.module.css";
import { Link} from "react-router-dom";
import { useDispatch} from "../../types/store";
import { getUserLogged } from "../../services/actions/user";

const Login:FunctionComponent = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const onUserChange = (e:FormEvent<HTMLInputElement>) => {
    setUser({ ...user, [(e.target as HTMLFormElement).name]: (e.target as HTMLFormElement).value });
  };

  const onFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getUserLogged(user));
  };

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={onFormSubmit}>
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
        htmlType="submit"
        type="primary"
        size="medium"
      >
        Войти
      </Button>
      </form>
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
