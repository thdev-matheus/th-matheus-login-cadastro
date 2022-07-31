import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";

import { loginSchema } from "../../services/schema.js";
import DatabaseFunctions from "../../services/databaseFunctions";
import { useHistory } from "react-router-dom";
import { ToastMessage } from "../../components/ToastModals/toastMessage";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    reValidateMode: "onSubmit",
  });

  const history = useHistory();

  const testSubmitUser = (user) => {
    const userFound = DatabaseFunctions.searchUser(user.email);

    if (!userFound) {
      return ToastMessage.error("Usuário não encontrado");
    } else if (userFound.senha !== user.senha) {
      return ToastMessage.error("Senha inválida");
    } else {
      ToastMessage.success(`Sucesso! Bem vindo, ${userFound.nome}`);
      localStorage.setItem("id", userFound.id);
      setTimeout(() => {
        history.push(`/${userFound.usuario}`);
      }, 4000);
    }
  };

  errors.email && ToastMessage.warning(errors.email.message);
  errors.senha && ToastMessage.warning(errors.senha.message);

  console.log(errors);
  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Form height="20rem" onSubmit={handleSubmit(testSubmitUser)}>
        <h2>Login</h2>
        <input
          className="inputText"
          type="text"
          placeholder="E-mail"
          {...register("email")}
        />
        <input
          className="inputText"
          type="password"
          placeholder="Senha"
          {...register("senha")}
        />
        <Button
          width="280px"
          height="50px"
          borderRadius="0 0 15px 15px"
          boxShadow="-2px 2px 5px 0 #30395270"
          fontSize="14pt"
          bgColor="#303952"
          color="#f0f8ff"
          bgColorHover="#20273b"
        >
          Entrar
        </Button>
        <p>
          Ainda não tem cadastro? <Link to="/register">Cadastre-se</Link>
        </p>
      </Form>
      <ToastContainer />
    </Container>
  );
}
