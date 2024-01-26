import styled from 'styled-components';
import Background from '../../assets/bg image.png';


export const Container = styled.div`
height: 900px;
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







