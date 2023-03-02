import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Mínimo de 2 caracteres")
    .max(50, "Máximo de 50 caracteres")
    .required("Insira um nome"),
  email: yup.string().email("E-mail inválido").required("Insira seu e-mail"),
  message: yup
    .string()
    .min(5, "Mínimo de 5 caracteres")
    .required("Insira sua mensagem"),
});
