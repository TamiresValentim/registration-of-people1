import React, { useState, useRef } from 'react';//TODA FEZ QUE FOR COMEÇA TEM IMPORTA

import axios from "axios"
import { useNavigate } from 'react-router-dom';
import People from "../../assets/Consulting_Isometric 1.png";
import Arrow from "../../assets/arrow.png";

import ContainerItens from "../../components/containeritens"
import H1 from "../../components/Title"
import Button from "../../components/Button"


import {
  Container,
  Image,
  Inputlabel,
  Input,
 
} from './styles';



function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {

      name: inputName.current.value,
      age: inputAge.current.value,

    })

    setUsers([...users, newUser])
  navigate("/cadastro")
   
  }


  return (
    <Container>

      <Image alt="main image" src={People} />

      <ContainerItens>

        <H1>Olá</H1>

        <Inputlabel>Nome</Inputlabel>
        <Input ref={inputName} placeholder="Nome" />

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastro <img alt="arrow" src={Arrow} /></Button>

      </ContainerItens>

    </Container>
  );
}

export default App
