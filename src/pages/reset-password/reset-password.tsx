import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect, FormEvent, FunctionComponent } from "react";
import styles from "./reset-password.module.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../../types/store";
import { newApi } from "../../utils/api";
import { PASSWORD_RESTORED } from "../../services/constants";

const ResetPassword:FunctionComponent = () => {

  const passwordForgotten = useSelector((state)=> state.user.passwordForgotten);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(!passwordForgotten){
      history.push("/login")
    }
  },[])

  const [newPassword, setNewPassword] = useState({ password: "", token: "" });

  const history = useHistory();
  const onNewPasswordChange = (e:FormEvent<HTMLInputElement>) => {
    setNewPassword({ ...newPassword, [(e.target as HTMLFormElement).name]: (e.target as HTMLFormElement).value });
  };

  const pressSubmit = () => {
    newApi.submitNewPassword(newPassword).then((res) => {
      if (res.success) {
        history.push({ pathname: "/login" });
        dispatch({type: PASSWORD_RESTORED});
      } else {
        return Promise.reject(`Ошибка ${res.message}`);
      }
    });
  };

  return (
    <div className={styles.login}>
      <h2>Восстановление пароля</h2>
      <PasswordInput
        onChange={onNewPasswordChange}
        value={newPassword.password}
        name={"password"}
        placeholder="Введите новый пароль"
        extraClass="mb-6"
      />
      <Input
        onChange={onNewPasswordChange}
        value={newPassword.token}
        name={"token"}
        placeholder="Введите код из письма"
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={pressSubmit}
      >
        Сохранить
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

export default ResetPassword;
