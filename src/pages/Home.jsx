import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import franklin from '../images/franklinProfile.jpg';
import denis from '../images/denis.jpg';
import diogo from '../images/diogo.jpg';
import jadilson from '../images/jadeilson.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import logo from '../images/logoRed.png';

const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #f2f2f2;
    padding: 20px;
    text-align: justify;
  }
  
  h2 {
      margin-top: 40px;
      font-size: 24px;
      font-weight: 400;
      color: #f2f2f2;
      padding: 20px;
    }
  .main {
    opacity: 0;
    transform: translateY(50px);
    animation: form 1s cubic-bezier(.25,.46,.45,.94) 1.5s both;
    margin-bottom: 50px;
}
  .logo {
    width: 70%;
    margin-top: 50px;
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
  @keyframes form {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;
`;

const Card = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  background: linear-gradient(145deg, rgba(38,43,52,1) 0%, rgba(12,15,20,1) 100%);
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  div {
    text-align: center;
  }
  h3 {
    font-size: 25px;
  }
  .profile {
    width: 40%;
    border-radius: 20px;
    filter: grayscale(2);
  }
  .icon {
    filter: invert(1);
    width: 20%;
    margin: 5px;
  }
`;
const team = [
  { name: 'Dênis Rodrigues',
    linkedin: 'https://www.linkedin.com/in/denis-rodrigues-dev',
    gitHub: 'https://github.com/Denis-Rodrigues-dev',
    img: denis,
  },
  { name: 'Diogo Santos',
    linkedin: 'https://www.linkedin.com/in/diogonasci/',
    gitHub: 'https://github.com/diogonasci',
    img: diogo,
  },
  { name: 'Franklin Ramos',
    linkedin: 'https://www.linkedin.com/in/franklinrms/',
    gitHub: 'https://github.com/franklinrms/',
    img: franklin,
  },
  { name: 'Jadeilson Martinho',
    linkedin: 'https://www.linkedin.com/in/jadeilson-martinho/',
    gitHub: 'https://github.com/jadeilsonm',
    img: jadilson,
  },
];
export default function Home() {
  const history = useHistory();
  const reditectTo = () => history.push('/login');
  return (
    <ContainerHome>
      <img className="logo" alt="logo" src={ logo } />
      <div className="main">
        <h2>About</h2>
        <p>
          Recipehunter is an application that offers the user several recipes of
          different nationalities between food and drinks, the application was developed
          as a form of evaluation in the front-end course of trybe, during the development
          we were able to put into practice the main contents of React acquired in course.
          To style the project we use Styled Components and for deploy Firebase.
        </p>

        <h2>Developer Team</h2>
        <Members>
          {
            team.map((member) => (
              <Card key={ member.name }>
                <img className="profile" src={ member.img } alt={ member.name } />
                <div>
                  <h3>{member.name}</h3>
                  <a target="_blank" href={ member.linkedin } rel="noreferrer">
                    <img className="icon" alt="link linkedin" src={ linkedin } />
                  </a>
                  <a target="_blank" href={ member.gitHub } rel="noreferrer">
                    <img className="icon" alt="link gitHub" src={ github } />
                  </a>
                </div>
              </Card>
            ))
          }
        </Members>
        <Button label="Login" onClick={ reditectTo } />
      </div>
    </ContainerHome>
  );
}
