import {
  EmailInput,
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect, FormEvent, FunctionComponent } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "../../types/store";
import { useHistory } from "react-router-dom";
import { getUserRegistered } from "../../services/actions/user";

const Register:FunctionComponent = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    if (userName) {
      history.push("/");
    }
  }, [userName, history]);

  const onFormSubmit= (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(getUserRegistered(user));
  };

  const onUserChange = (e:FormEvent<HTMLInputElement>) => {
    setUser({ ...user, [(e.target as HTMLFormElement).name]: (e.target as HTMLFormElement).value });
  };

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={onFormSubmit}>
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
        htmlType="submit"
        type="primary"
        size="medium"
      >
        Зарегистрироваться
      </Button>
      </form>
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
