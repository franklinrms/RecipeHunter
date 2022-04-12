import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Conteiner, ConteinerCards, ConteinerTabs } from './style';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const { dataCategory, dataAllFoods, filteredData } = useContext(FoodContext);

  const [filter, setFilter] = useState([]);
  const [isFilterAll, setIsFilterAll] = useState(false);
  const [arrCards, setArrCard] = useState([]);
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (filteredData.length !== 0) {
      setArrCard(filteredData);
    } else setArrCard(dataAllFoods);

    if (isFilterAll) {
      setArrCard(dataAllFoods);
    }
  }, [dataAllFoods, filteredData, isFilterAll]);

  useEffect(() => {
    if (filter.length === 0) { setArrCard(dataAllFoods); }
    if (filter.length >= 2) {
      setFilter([]);
    }
  }, [filter, dataAllFoods]);

  const clickByCategory = (value) => {
    setIsFilterAll(false);
    handleSearchInfo('filterByCategory', value, 'foods');
    if (filter.includes(value)) {
      setFilter([...filter, value]);
    } else setFilter([value]);
  };

  return (
    <Conteiner>
      <Header title="Foods" />
      <ConteinerTabs>
        {
          dataCategory.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
            <button
              key={ cat }
              type="button"
              value={ cat }
              data-testid={ `${cat}-category-filter` }
              onClick={ ({ target: { value } }) => clickByCategory(value) }
            >
              {cat}
            </button>
          ))
        }
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => setIsFilterAll(true) }
        >
          All
        </button>
      </ConteinerTabs>
      <ConteinerCards>
        { arrCards.slice(0, LIMIT_MAX_CARDS)
          .map(({ strMealThumb, strMeal, idMeal }, i) => {
            const clickCard = ({ target: { value } }) => {
              if (!value) {
                history.push(`/foods/${idMeal}`);
              }
            };
            return (<Cards
              key={ i }
              name={ strMeal }
              id={ idMeal }
              thumb={ strMealThumb }
              clickCard={ clickCard }
              index={ i }
            />);
          })}
      </ConteinerCards>
      <Menu />
    </Conteiner>
  );
}
