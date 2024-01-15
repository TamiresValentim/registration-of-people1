import styled from 'styled-components';
import Background from '../../assets/bg 45.png'

export const Container = styled.div`
width: 100vw;
height: 112vh;
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

export const ContainerItens = styled.div`
background: linear-gradient(
 157.44deg,
rgba(255, 255, 255, 0.6)0.84%,
rgba(255, 255, 255, 0.6)0.85%,
 rgba(255, 255, 255, 0.15)0.100%
);
height: 1000px;
border-radius: 61px 61px 0 0;
margin-left: 25px;
padding: 50px 30px;
display: flex;
flex-direction: column;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #ffffff;
margin-bottom: 60px;
`;
export const Inputlabel = styled.p`
letter-spacing: -0.408px;//É usada para controle o espaço em branco entre a letra
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color:#eeeeee
`;

export const Input = styled.input`
background: rgba(255,255,255,0.25);
box-shadow:0px 4px 4px rgba(0,0,0,0.25);
border-radius: 14px;
width: 362px;
height: 58px;
padding-left: 26px;
margin-bottom: 34px;
border: none;
outline: none;
color: #ffffff;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;

`;

export const Button = styled.button`
width: 342px;
height: 74px;
background: rgba(0,0,0,0.8);
border-radius: 14px;
border:none;
color: #ffffff;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height:28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap:10px;

&:hover{
    opacity: 0.3;
}

&:active{
    opacity: 0.9;
}
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
