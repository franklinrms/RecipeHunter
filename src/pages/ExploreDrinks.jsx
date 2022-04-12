import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Conteiner, ConteinerCards } from './style';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';
import DrinkContext from '../context/DrinkContext';

export default function ExploreDrinks() {
  const { filteredData } = useContext(DrinkContext);
  const maxLength = 12;
  const newFilter = filteredData.slice(0, maxLength);
  const history = useHistory();
  const { handleSearchInfo } = useContext(UserContext);
  const location = useLocation();
  const magicNumber = 9;
  const path = location.pathname.slice(magicNumber);

  const reditectTo = (id) => {
    history.push(`/drinks/${id}`);
  };

  return (
    <Conteiner>
      <Header title="Explore Drinks" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        onClick={ () => {
          handleSearchInfo('random', '', path);
        } }
      />
      <ConteinerCards>
        { newFilter.length > 0 && newFilter.map((filterDrink, index) => (
          <Cards
            key={ index }
            name={ filterDrink.strDrink }
            thumb={ filterDrink.strDrinkThumb }
            clickCard={ () => reditectTo(filterDrink.idDrink) }
            index={ index }
          />

        ))}
      </ConteinerCards>
    </Conteiner>
  );
}

ExploreDrinks.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
}.isRequired;
