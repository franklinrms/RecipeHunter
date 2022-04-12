import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Conteiner, ConteinerCards } from './style';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';
import FoodContext from '../context/FoodContext';

export default function ExploreFoods() {
  const { filteredData } = useContext(FoodContext);
  const maxLength = 12;

  const newFilter = filteredData.slice(0, maxLength);
  const history = useHistory();

  const { handleSearchInfo } = useContext(UserContext);
  const location = useLocation();
  const magicNumber = 9;
  const path = location.pathname.slice(magicNumber);

  const reditectTo = (id) => {
    history.push(`/foods/${id}`);
  };

  return (
    <Conteiner>

      <Header title="Explore Foods" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      />
      <Button
        label="By Nationality"
        dataTest="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        onClick={ () => {
          handleSearchInfo('random', '', path);
        } }
      />
      <ConteinerCards>
        { newFilter.length > 0 && newFilter.map((filterFood, index) => (
          <Cards
            key={ index }
            name={ filterFood.strMeal }
            thumb={ filterFood.strMealThumb }
            clickCard={ () => reditectTo(filterFood.idMeal) }
            index={ index }
          />

        ))}
      </ConteinerCards>
    </Conteiner>
  );
}
