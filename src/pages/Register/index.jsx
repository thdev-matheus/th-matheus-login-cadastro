import DatabaseFunctions from "../../services/databaseFunctions";
import { registerSchema } from "../../services/schema.js";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { ToastMessage } from "../../components/ToastModals/toastMessage.js";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { useHistory } from "react-router-dom";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    reValidateMode: "onSubmit",
  });

  errors.nome && ToastMessage.warning(errors.nome.message);
  errors.usuario && ToastMessage.warning(errors.usuario.message);
  errors.img && ToastMessage.warning(errors.img.message);
  errors.email && ToastMessage.warning(errors.email.message);
  errors.senha && ToastMessage.warning(errors.senha.message);
  errors.confirmaSenha && ToastMessage.warning(errors.confirmaSenha.message);
  errors.terms && ToastMessage.warning(errors.terms.message);

  const history = useHistory();

  const testNewUser = (newUser) => {
    DatabaseFunctions.pushUser(newUser) &&
      setTimeout(() => {
        history.push("/login");
      }, 4000);
  };

  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Form onSubmit={handleSubmit(testNewUser)}>
        <h2>Cadastro</h2>
        <input
          className="inputText"
          type="text"
          placeholder="Nome"
          {...register("nome")}
        />
        <input
          className="inputText"
          type="text"
          placeholder="Usuário"
          {...register("usuario")}
        />
        <input
          className="inputText"
          type="text"
          placeholder="Link da imagem"
          {...register("img")}
        />
        <input
          className="inputText"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <div>
          <input
            className="inputText"
            type="password"
            placeholder="Senha"
            {...register("senha")}
          />
          <input
            className="inputText"
            type="password"
            placeholder="Confirme a senha"
            {...register("confirmaSenha")}
          />
        </div>
        <div>
          <input type="checkBox" {...register("terms")} />
          <span>Eu aceito os termos</span>
        </div>
        <Button
          type="submit"
          width="280px"
          height="50px"
          borderRadius="0 0 15px 15px"
          boxShadow="-2px 2px 5px 0 #30395270"
          fontSize="14pt"
          bgColor="#303952"
          color="#f0f8ff"
          bgColorHover="#20273b"
        >
          Cadastrar
        </Button>
        <p>
          Já é cadastrado? <Link to="/login">Faça login</Link>
        </p>
      </Form>
      <ToastContainer />
    </Container>
  );
}
