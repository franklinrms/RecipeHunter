import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Conteiner, ConteinerCards, ConteinerTabs } from './style';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Menu from '../components/Menu';
import DrinkContext from '../context/DrinkContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Drinks() {
  const { dataAllDrinks, dataCategory, filteredData } = useContext(DrinkContext);
  const [filter, setFilter] = useState([]);
  const [arrCards, setArrCard] = useState([]);
  const [isFilterAll, setIsFilterAll] = useState(false);
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (filteredData.length !== 0) {
      setArrCard(filteredData);
    } else setArrCard(dataAllDrinks);
    if (isFilterAll) { setArrCard(dataAllDrinks); }
  }, [dataAllDrinks, filteredData, isFilterAll]);

  useEffect(() => {
    if (filter.length === 0) { setArrCard(dataAllDrinks); }
    if (filter.length >= 2) {
      setFilter([]);
    }
  }, [filter, dataAllDrinks]);

  const newArrCategory = [...new Set(dataCategory)];

  const clickByCategory = (value) => {
    setIsFilterAll(false);
    handleSearchInfo('filterByCategory', value, 'drinks');
    if (filter.includes(value)) {
      setFilter([...filter, value]);
    } else setFilter([value]);
  };

  return (
    <Conteiner>
      <Header title="Drinks" />
      <Menu />
      <ConteinerTabs>
        {
          newArrCategory.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
            <button
              key={ cat }
              type="button"
              value={ cat }
              data-testid={ `${cat}-category-filter` }
              onClick={ ({ target: { value } }) => clickByCategory(value) }
            >
              {cat === 'Ordinary Drink' ? 'Ordinary' : cat }
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
          .map(({ strDrinkThumb, strDrink, idDrink }, i) => {
            const clickCard = () => history.push(`/drinks/${idDrink}`);
            return (<Cards
              key={ i }
              id={ idDrink }
              name={ strDrink }
              thumb={ strDrinkThumb }
              clickCard={ clickCard }
              index={ i }
            />);
          })}
      </ConteinerCards>
    </Conteiner>
  );
}
