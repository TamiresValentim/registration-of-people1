import styled from 'styled-components';

export const ContainerItens = styled.div`
background: linear-gradient(
 157.44deg,
rgba(255, 255, 255, 0.6)0.84%,
rgba(255, 255, 255, 0.6)0.85%,
 rgba(255, 255, 255, 0.15)0.100%
);

border-radius: 61px 61px 0 0;
margin-left: 25px;
padding: 50px 30px;
display: flex;
flex-direction: column;
height: 100%;

${prosp => prosp.isBlue &&`
 backdrop-filter: blur(55px);
 min-height: calc(100vh - 170px);
`}
`;