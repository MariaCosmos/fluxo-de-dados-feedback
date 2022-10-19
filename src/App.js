import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [nome, setNome] = useState("")

  function onChangeNome(event){
    console.log(event.target.value)
    setNome(event.target.value)
  }

  const [foto, setFoto] = useState("")

  function onChangeFoto(event){
    console.log(event.target.value)
    setFoto(event.target.value)
  }

  const {infoUsuario, setInfoUsuario} = useState({nome:nome, foto:foto})

  function onClickFazerLogin(event){

  }


  const [pageFlow, setPageFlow] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header nome={nome} foto={foto}/>
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} nome={nome} foto={foto} onChangeNome={onChangeNome} onChangeFoto={onChangeFoto}/>
          ) : (
            <FormularioPostagem />
          )}
        </aside>
        <TelaDaPostagem />
      </Container>
    </>
  );
}

export default App;
