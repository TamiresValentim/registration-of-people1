import React, { useState, useEffect } from 'react';//TODA FEZ QUE FOR COMEÇA TEM IMPORTA
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";
import H1 from "../../components/Title";
import ContainerItens from "../../components/containeritens"
import Button from "../../components/Button"
import {
  Container,
  Image,
  User
} from './styles';



function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {

    async function fetchUsers() {

      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUser = users.filter(user => user.id !== userId)

    setUsers(newUser)
  }
  function goBackPage() {
    navigate("/")
  }


  return (
    <Container>

      <Image alt="main image" src={Avatar} />

      <ContainerItens isblur={true}>

        <H1>Usuário</H1>

       <ul>
          {users.map((user) => (

            <User key={user.id}>
              <p> {user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt="trash" src={Trash} /></button>

            </User>
          ))

          }
        </ul>
        <Button isBack={true} onClick={goBackPage} > <img alt="arrow" src={Arrow} /> VOLTAR
        </Button>

      </ContainerItens>

    </Container>
  );
}

export default Users
