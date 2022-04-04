import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Conteiner = styled.div`
  width: 45%;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(38,42,51,1) 30%, rgba(12,15,20,1) 100%);
  color: #f2f2f2;
  margin: 9px;

  & h3 {
    font-size: 18px;
    font-weight: 400;
    padding: 7px;
  }

  & img {
    margin-top: 19px;
    width: 80%;
    border-radius: 20px;
  } 
`;
function Cards(props) {
  const { name, thumb, index, clickCard } = props;

  return (
    <Conteiner
      onClick={ clickCard }
      role="button"
      tabIndex={ 0 }
      aria-hidden="true"
    >
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt="Thumb"
        />
        <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
      </div>
    </Conteiner>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickCard: PropTypes.func.isRequired,
};

export default Cards;
