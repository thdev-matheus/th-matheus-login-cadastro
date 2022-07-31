import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import { useParams, useHistory } from "react-router-dom";

import { users } from "../../services/database.js";
import { UserCard } from "../../components/UserCard";

export function User() {
  const userParam = useParams();
  const history = useHistory();

  const user = users.find((user) => {
    return user.usuario === userParam.user && user.id === localStorage.id;
  });

  !user && history.push("/login");

  const logout = () => {
    localStorage.removeItem("id");
    history.push("/");
  };

  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
    >
      <UserCard>
        <div>
          <img src={user.img} alt={user.nome} />
        </div>
        <h2>{user.usuario}</h2>
        <h3>
          <span>Nome:</span> {user.nome}
        </h3>
      </UserCard>
      <Button
        width="130px"
        height="50px"
        borderRadius="0 0 10px 10px"
        boxShadow="-2px 2px 3px 0 #141a2b"
        fontSize="14pt"
        bgColor="#596275"
        color="#f0f8ff"
        bgColorHover="#4b5570"
        onClick={logout}
      >
        Log out
      </Button>
    </Container>
  );
}
