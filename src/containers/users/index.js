import React, { useState, useRef, useEffect } from 'react';//TODA FEZ QUE FOR COMEÇA TEM IMPORTA
import axios from "axios"

import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Inputlabel,
  Input,
  Button,
  User
} from './styles';



function Users() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

   async function addNewUser() {

    const {data:newUser} = await axios.post("http://localhost:3001/users",{
  
        name: inputName.current.value, 
        age: inputAge.current.value,
  
      })
      
      setUsers([...users, newUser ])


  }
  
  useEffect(() => {

    async function fetchUsers() {

      const {data:newUser} = await axios.get("http://localhost:3001/users");
      
      setUsers(newUser)
    }

fetchUsers()
  },[])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
     
    const newUser = users.filter( user => user.id !== userId)
    
     setUsers(newUser)
  }

 
  return (
    <Container>

      <Image alt="main image" src={Avatar} />

      <ContainerItens>

        <H1>Olá</H1>

        <Inputlabel>Usuário</Inputlabel>
        

     

        <ul>
          {users.map((user) => (

            <User key={user.id}>
              <p> {user.name}</p> <p>{user.age}</p>
              <button onClick={()=> deleteUser(user.id)}><img alt="trash" src={Trash} /></button>  

            </User>
          ))

          }
        </ul>
           <Button onClick={addNewUser}> <img alt="arrow" src={Arrow} /> VOLTAR
            </Button>

      </ContainerItens>

    </Container>
  );
}

export default Users
