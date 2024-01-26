import styled from 'styled-components';
import Background from '../../assets/bg 45.png';


export const Container = styled.div`
width: 100vw;
height: 1000px;

background: url('${Background}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;

`;

export const Image = styled.img`
margin-top: 30px;
`;

export const User = styled.li`

display:flex;
justify-content: space-around;
align-items: center;
margin-top: 30px;
background: rgba(255,255,255,0.25);
box-shadow: 0 4px 4px rgba(0,0,0,0.25);
border-radius: 14px;
width: 362px;
height: 58px;
border: none;
outline: none;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color:#ffffff;
}

button{
    background: none;
    border:none;
    cursor: pointer;

&:hover{

    opacity: 0.3;
    
}}


`;
