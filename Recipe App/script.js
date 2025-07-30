let searchBox = document.getElementById("searchBox");
const searchBtn = document.querySelector(".searchbtn");
const recipes = document.querySelector(".recipe-container");
const recipeDetails = document.querySelector('.recipe-detail-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

//function to get recipes
const fetchRecipes = async (searchInput) => {
    recipes.innerHTML="<h2>fetching recipes.....</h2>";
 try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    console.log(data);

    recipes.innerHTML="";
    data.meals.forEach((meal) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p><span>${meal.strCategory}</span></p>
        `
        const button = document.createElement('button');
        button.textContent = "View Recipes";
        recipeDiv.appendChild(button);

        //adding eventlistener to recipe button
        button.addEventListener('click', ()=> {
          openRecipePopup(meal);
        });
        recipes.appendChild(recipeDiv);
    });
} 
catch(error){
    recipes.innerHTML="<h2>Sorry this recipe is not available.</h2>";
}
    //console.log(data.meals[0]);
};

//function to fetch ingredient and measurment
const fetchIngredient = (meal) =>{
  let ingredientsList = "";
  for(let i=1; i<=20; i++){
       const ingredient = meal[`strIngredient${i}`];
       if(ingredient){
        const measure = meal[`strMeasure${i}`];
        ingredientsList += `<li>${measure} ${ingredient}</li>`
       }
       else{
        break;
       }
  }
  return ingredientsList;
}
const openRecipePopup = (meal)=> {
    recipeDetails.innerHTML = `
    <h2 class="recipeName"> ${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientList">${fetchIngredient(meal)}</ul>
    <div class="foodInstruction">
        <h3>Instructions:</h3>
        <p class="recipeInstructions">${meal.strInstructions}</p>
    </div>
    `
    
    recipeDetails.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click', ()=> {
    recipeDetails.parentElement.style.display = "";
})

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let searchInput = searchBox.value.trim();
    if(!searchInput){
        recipes.innerHTML = `<h2>Type the meal in the search box.</h2>`;
        return;
    }
    fetchRecipes(searchInput);
});


