import {
  EmailInput,
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserRegistered } from "../../services/actions/user";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    if (userName) {
      history.push("/");
    }
  }, [userName, history]);

  const onButtonClick = () => {
    dispatch(getUserRegistered(user));
  };

  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.login}>
      <h2>Регистрация</h2>
      <Input
        onChange={onUserChange}
        value={user.name}
        name={"name"}
        placeholder="Имя"
        extraClass="mb-6"
      />
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
        Зарегистрироваться
      </Button>
      <div className={styles.additional}>
        <p
          className={`${styles.text} ext text_type_main-default text_color_inactive`}
        >
          Уже зарегистрированы?
        </p>
        <Link to="/login">
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
