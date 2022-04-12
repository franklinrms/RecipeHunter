import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background-color: #0C1015;
    color: #D62D51;
    font-family: 'PT Sans Caption', sans-serif;
  }
`;
export const Conteiner = styled.div`
  background-color: #0C1015;
  width: 100%;
  margin: 72px 0px 50px 0px;
`;
export const ConteinerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0C0F14;
`;
export const ConteinerTabs = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  display: flex;
  overflow-y: scroll;
  background-color: #0C1015;
  border: none;
  padding: 2px;
  button {
    background: transparent;
    border: none;
    color: #AABAC1;
    font-size: 16px;
    margin: 2px;
  }
  button:hover, button:active  {
    margin-top: 2px;
    color: #D62D51;
  }
  p {
    color: #AABAC1;
    font-size: 16px;
    margin: 5px 15px;
  }
  p:hover, p:active  {
    color: #D62D51;
  }
`;
export const ImgDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: end;
  justify-content: end;
  img{
   border-radius: 25px;
   width: 100%;
   margin-bottom: 62px;
  }
  `;
export const TitleDetail = styled.div`
  border-radius: 25px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  position: absolute;
  background-color: rgba(12,15,20,0.65);
  backdrop-filter: blur(10px);
  .buttons {
    display: flex;
    align-items: center;
    width: 30%;
  }
  .texts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 55%;
  }
  h1 {
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
  p {
    color: #AABAC1;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }
`;
export const ContainerDetails = styled.div`
  width: 92%;
  margin: 0 auto;
  h1, h3 {
    color: #f2f2f2 ;
    font-size: 20px;
    font-weight: 400;
    margin-top: 25px;
    margin-bottom: 20px;
  }
  p, li, label {
    color: #b6bbc7 ;
  }
  .paragraph {
    text-align: justify;
    margin: 5px;
  }
  iframe {
    width: 100%;
    height: 190px;
    margin-bottom: 25px;
  }
`;
export const Button = styled.button`
  background-color: #D62D51;
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px ;
  :active {
    margin-top: 18px;
  }
`;
export const ContainerExplore = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: #f2f2f2;
    font-size: 24px;
  }
`;
export const LargeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around ;
  width: 90%;
  border-radius: 25px;
  background: linear-gradient(145deg, rgba(38,43,52,1) 0%, rgba(12,15,20,1) 100%);
  margin: 9px;
  a {
    width: 70%;
  }
  .main {
    display: flex;
    align-items: center;
    margin: 5px;
    color: #f2f2f2;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    background: transparent;
  }
  h4, h5 {
    font-size: 12px;
  }
  img {
    width: 40%;
    border-radius: 20px;
    background: transparent;
    padding: 5px;
    margin-right: 10px;
  } 
`;
export const Form = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  animation: form 1s cubic-bezier(.25,.46,.45,.94) 1.5s both;
  input {
    width: 90%;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    background-color: #141921;
    color: #f8f8f8;
    font-size: 18px;
    margin: 10px;
  }
  @keyframes form {
  100% {
    opacity: 1;
    transform: translateY(0);
  }}
`;
export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #D62D51;
    margin-bottom: 50px;
  }
  img {
    width: 70%;
    margin-bottom: 50px;
    transform: scale(1.3);
    opacity: 0;
    animation: logo 1s cubic-bezier(.25,.46,.45,.94) both;
  }
  @keyframes logo {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
`;
