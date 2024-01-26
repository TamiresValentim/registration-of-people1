import React from "react"
import {ContainerItens as Container} from "./styles"
   

function ContainerItens ({children,isBlue}){
    
    return <Container isBlue={isBlue}>{children}</Container>

    }

    export default ContainerItens