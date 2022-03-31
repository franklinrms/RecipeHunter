import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodContext from './FoodContext';
import UserContext from './UserContext';
import fetchRecipesFoods from '../services/apiFood';

export default function FoodProvider({ children }) {
  const [filteredData, setFilteredData] = useState([]);
  const [dataAllFoods, setDataAllFoods] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataIngredients, setDataIngredients] = useState([]);
  const { searchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const { type, searchValue, model } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const result = await fetchRecipesFoods(type, searchValue);
      if (result === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      if (result === null) return setFilteredData([]);
      setFilteredData(result);
    };

    if (type.length !== 0 && model === 'foods') fetchApi();
  }, [searchInfo]);

  useEffect(() => {
    const redirectToDetail = () => history.push(`/foods/${filteredData[0].idMeal}`);
    if (
      filteredData.length === 1
      && filteredData[0].strMeal !== 'Mbuzi Choma (Roasted Goat)'
    ) { redirectToDetail(); }
  }, [filteredData, history]);

  useEffect(() => {
    const fetchAllFoods = async () => {
      const responseFoods = await fetchRecipesFoods('name', '');
      const responseCategory = await fetchRecipesFoods('category', '');
      setDataCategory(responseCategory);
      setDataAllFoods(responseFoods);
    };
    fetchAllFoods();
  }, []);

  useEffect(() => {
    const fetchIngredientsFoods = async () => {
      const maxLength = 12;
      const responseIngredients = await fetchRecipesFoods('ingredientList', '');
      setDataIngredients(responseIngredients.slice(0, maxLength));
    };
    fetchIngredientsFoods();
  }, []);

  const contextValue = {
    filteredData,
    dataCategory,
    dataAllFoods,
    dataIngredients,
  };

  return (
    <FoodContext.Provider value={ contextValue }>{children}</FoodContext.Provider>
  );
}
FoodProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
