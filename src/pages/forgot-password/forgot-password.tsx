import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState, FormEvent, FunctionComponent } from "react";
import { newApi } from "../../utils/api";
import { useDispatch } from '../../types/store';
import { PASSWORD_FORGOTTEN } from "../../services/constants";

const ForgotPassword:FunctionComponent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "" });
  const history = useHistory();
  const onEmailChange = (e:FormEvent<HTMLInputElement>) => {
    setEmail({ ...email, [(e.target as HTMLFormElement).name]: (e.target as HTMLFormElement).value });
  };

  const pressSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    newApi.resetPassword(email.email).then((res) => {
      if (res.success) {
        dispatch({type:PASSWORD_FORGOTTEN})
        history.push({ pathname: "/reset-password" });
      } else {
        return Promise.reject(`Ошибка ${res.message}`);
      }
    });
  };

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={pressSubmit}>
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
        htmlType="submit"
        type="primary"
        size="medium"
      >
        Восстановить
      </Button>
      </form>
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
