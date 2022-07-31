import * as yup from "yup";

export const registerSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Campo Nome obrigatório")
    .min(3, "Minimo de 3 characters")
    .max(18, "Máximo de 18 caracteres"),
  usuario: yup
    .string()
    .required("Campo Usuário obrigatório")
    .min(5, "usuário deve conter ao menos 5 caracteres"),
  img: yup.string().required("Campo obrigatório").url("digite uma URL válida"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("digite um e-mail Válido"),
  senha: yup
    .string()
    .required("Require field!")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Sua senha deve ter ao menos uma letra maiúscula e minúscula, um número e um caracter especial."
    ),
  confirmaSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "A confirmação de senha não confere"),
  terms: yup.boolean().isTrue("Você ainda não aceitou os termos"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Preencha o campo E-mail")
    .email("Insira um e-mail válido!"),
  senha: yup.string().required("Preencha o campo Senha"),
});
