import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import Logo from "../../img/images.png";

export function Home() {
  const history = useHistory();
  return (
    <>
      <Header>
        <img src={Logo} alt="Fragment" title="Fragment" />
        <div>
          <Button
            width="100px"
            height="40px"
            borderRadius="10px 0 10px 0"
            fontSize="11pt"
            fontWeight="bold"
            bgColor="#786fa6"
            color="#fff"
            bgColorHover="#574b90"
            onClick={() => history.push("/login")}
          >
            Sign in
          </Button>
          <Button
            width="100px"
            height="40px"
            borderRadius="10px 0 10px 0"
            fontSize="11pt"
            fontWeight="bold"
            bgColor="#cf6a87"
            color="#fff"
            bgColorHover="#c44569"
            onClick={() => history.push("/register")}
          >
            Sign up
          </Button>
        </div>
      </Header>
      <Container
        width="100vw"
        height="91vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h1 style={{ textAlign: "center" }}>Bem-vindo!</h1>
      </Container>
    </>
  );
}
