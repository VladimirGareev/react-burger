import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { newApi } from "../../utils/api";
import { useDispatch } from "react-redux";
import { PASSWORD_FORGOTTEN } from "../../services/constants";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "" });
  const history = useHistory();
  const onEmailChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const pressSubmit = () => {
    newApi.resetPassword(email).then((res) => {
      if (res.success) {
        dispatch({type:PASSWORD_FORGOTTEN})
        history.push({ pathname: "/reset-password" });
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    });
  };

  return (
    <div className={styles.login}>
      <h2>Восстановление пароля</h2>
      <EmailInput
        onChange={onEmailChange}
        value={email.email}
        name={"email"}
        placeholder="Укажите e-mail"
        isIcon={false}
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={pressSubmit}
      >
        Восстановить
      </Button>
      <div className={styles.additional}>
        <p
          className={`${styles.text} ext text_type_main-default text_color_inactive`}
        >
          Вспомнили пароль?
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

export default ForgotPassword;
