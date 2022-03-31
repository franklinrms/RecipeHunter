const endPoints = {
  name: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  letter: 'www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  id: 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
  ingredient: 'www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  category: 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  filterByCategory: 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
  filterByIngredient: 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  random: 'www.thecocktaildb.com/api/json/v1/1/random.php',
};

const fetchRecipesDrinks = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};

export default fetchRecipesDrinks;
