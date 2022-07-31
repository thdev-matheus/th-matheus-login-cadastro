import { ToastMessage } from "../components/ToastModals/toastMessage";
import { users } from "./database";

class DatabaseFunctions {
  static generatorID() {
    const id =
      Math.floor(Date.now() * Math.random()).toString(36) +
      Math.floor(Date.now() * Math.random()).toString(36) +
      Math.floor(Date.now() * Math.random()).toString(36);

    return id;
  }

  static searchUser(email) {
    return users.find((user) => user.email === email);
  }

  static pushUser(newUser) {
    if (
      users.some((user) => user.usuario === newUser.usuario) ||
      users.some((user) => user.email === newUser.email)
    ) {
      ToastMessage.error(
        "usuário ou e-mail já constam em nosso banco de dados!"
      );
      return false;
    } else {
      delete newUser.terms;
      delete newUser.confirmaSenha;
      newUser.id = DatabaseFunctions.generatorID();

      users.push(newUser);
      ToastMessage.success("Usuário cadastrado com sucesso!");
      return true;
    }
  }
}

export default DatabaseFunctions;
