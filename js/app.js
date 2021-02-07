const inputMealName = document.getElementById('meal-name')

document.getElementById('search-btn').addEventListener('click', function () {
    if (inputMealName.value === '') {
        alert('please Input a valid name')
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMealName.value}`)
            .then(res => res.json())
            .then(data => mealName(data.meals))
    }

})

const mealName = meals => {
    const primaryDiv = document.getElementById('primary-div')
    document.getElementById('primary-div').innerHTML = "";
    document.getElementById('secondary-div').innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealDiv';

        const mealInfo = `
                <div onClick="mealDetailLink('${meal.strMeal}')">
                <div class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>           
                    </div>
                </div>

                </div>
                 `
        mealDiv.innerHTML = mealInfo;
        primaryDiv.appendChild(mealDiv);
    
    });

}

const mealDetailLink = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailInfo(data.meals[0]))
}

const detailInfo = info => {
    const secondaryDiv = document.getElementById('secondary-div');

    const information = `
        <div class="detail-div">
        <img class="card-img-top info-image" src="${info.strMealThumb}"/>
        <h4>${info.strMeal}</h4>
        <ul>
        <li>${info.strIngredient1}  </li>
        <li>${info.strIngredient2}  </li>
        <li>${info.strIngredient3}  </li>
        <li>${info.strIngredient4}  </li>
        <li>${info.strIngredient5}  </li>
        <li>${info.strIngredient6}  </li>
        </ul> 
        </div>
        `
    secondaryDiv.innerHTML = information;

}

