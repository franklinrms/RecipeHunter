const endPoints = {
  name: 'www.themealdb.com/api/json/v1/1/search.php?s=',
  letter: 'www.themealdb.com/api/json/v1/1/search.php?f=',
  id: 'www.themealdb.com/api/json/v1/1/lookup.php?i=',
  category: 'www.themealdb.com/api/json/v1/1/list.php?c=list',
  ingredient: 'www.themealdb.com/api/json/v1/1/filter.php?i=',
  filterByCategory: 'www.themealdb.com/api/json/v1/1/filter.php?c=',
  random: 'www.themealdb.com/api/json/v1/1/random.php',
};

const fetchRecipesFoods = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export default fetchRecipesFoods;
