import "./styles.css";
import { Container } from "@chakra-ui/react";
import { Signup } from "./components/Signup";

export default function App() {
  return (
    <div className="App">
      <Container border={"1px solid black"}>
        <Signup />
      </Container>
    </div>
  );
}
