import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FoodsDetail() {
  const location = useLocation();
  const magicNumber = 7;
  const foodId = location.pathname.slice(magicNumber);

  const [foodDetail, setFoodDetail] = useState({});
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [foodMeasures, setFoodMeasures] = useState([]);
  const [drinkRecomendation, setDrinkRecomendation] = useState([]);
  const [alreadyDone, setAlreadyDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const handleButton = () => {
    if (inProgress.length !== 0) {
      return (
        <button
          data-testid="start-recipe-btn"
          type="button"
          style={ { position: 'fixed', bottom: '0px' } }
        >
          Continue Recipe
        </button>
      );
    }

    if (alreadyDone.length === 0) {
      return (
        <button
          data-testid="start-recipe-btn"
          type="button"
          style={ { position: 'fixed', bottom: '0px' } }
        >
          Start Recipe
        </button>
      );
    }
    return false;
  };

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (doneRecipes !== null) {
      setAlreadyDone(doneRecipes.filter((recipe) => recipe.id === foodId));
    }

    if (inProgressRecipes !== null) {
      setInProgress(Object.keys(inProgressRecipes.meals).filter((id) => id === foodId));
    }

    const fetchFood = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
      );
      const data = await response.json();
      setFoodDetail(data.meals[0]);
    };

    fetchFood();
  }, [foodId]);

  useEffect(() => {
    const handleIngredient = () => {
      const arrIngredients = Object.entries(foodDetail)
        .filter(
          (item) => item[0].includes('strIngredient')
            && item[1] !== ''
            && item[1] !== null,
        )
        .map((ingredient) => ingredient[1]);
      setFoodIngredients(arrIngredients);
    };
    const handleMeasure = () => {
      const arrMeasures = Object.entries(foodDetail)
        .filter(
          (item) => item[0].includes('strMeasure') && item[1] !== '' && item[1] !== null,
        )
        .map((measure) => measure[1]);
      setFoodMeasures(arrMeasures);
    };
    handleIngredient();
    handleMeasure();
  }, [foodDetail]);

  useEffect(() => {
    const fetchDrink = async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      );
      const data = await response.json();
      const INDEX_LIMIT = 0;
      const INDEX_LIMIT2 = 6;
      setDrinkRecomendation(data.drinks.splice(INDEX_LIMIT, INDEX_LIMIT2));
    };
    fetchDrink();
  }, []);

  return (
    <div style={ { width: '100%' } }>
      <img
        style={ { width: '100%' } }
        data-testid="recipe-photo"
        alt="food"
        src={ foodDetail.strMealThumb }
      />
      <h1 data-testid="recipe-title">{foodDetail.strMeal}</h1>
      <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      <img
        src={ whiteHeartIcon }
        alt="whiteHeartIcon"
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">{foodDetail.strCategory}</p>
      <h3>Ingredients</h3>
      <ul>
        {foodIngredients.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
            -
            {foodMeasures[index]}
          </li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{foodDetail.strInstructions}</p>
      <h3>Video</h3>
      <iframe
        data-testid="video"
        title={ foodDetail.strMeal }
        src={ foodDetail.strYoutube }
      />
      <h3>Recommended</h3>
      {drinkRecomendation.map((drink, index) => (
        <div key={ drink.strDrink } data-testid={ `${index}-recomendation-card` }>
          <img src={ drink.strDrinkThumb } alt={ drink.strDrink } />
          <p>{drink.strAlcoholic}</p>
          <h3>{drink.strDrink}</h3>
        </div>
      ))}
      {handleButton()}
    </div>
  );
}
