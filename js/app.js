const inputMealName = document.getElementById('meal-name')

document.getElementById('search-btn').addEventListener('click', function () {
    if (inputMealName.value === '') {
        alert('please Input a valid name')
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMealName.value}`)
            .then(res => res.json())
            .then(data => mealName(data.meals))
            .catch(err=>errorMessage(err))     
    }

})

const mealName = meals => {
    const primaryDiv = document.getElementById('primary-div')
    document.getElementById('primary-div').innerHTML = "";
    document.getElementById('secondary-div').innerHTML = "";
    document.getElementById('error-message').innerText="";
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealDiv';

        const mealInfo = `
                <div class="meal-container" onClick="mealDetailLink('${meal.strMeal}')">
                  <div class="card">
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
        .catch(err => errorMessage(err))
    }

const detailInfo = info => {
    const secondaryDiv = document.getElementById('secondary-div');

    const information = `
        <div class="detail-div">
            <img class="card-img-top info-image" src="${info.strMealThumb}"/>
            <h4>${info.strMeal}</h4>
              <ul>
                 <li>${info.strIngredient1} </li>
                 <li>${info.strIngredient2} </li>
                 <li>${info.strIngredient3} </li>
                 <li>${info.strIngredient4} </li>
                 <li>${info.strIngredient5} </li>
                 <li>${info.strIngredient6} </li>
                 <li>${info.strIngredient7} </li>
                 <li>${info.strIngredient8} </li>
                 <li>${info.strIngredient9} </li>
                 <li>${info.strIngredient10}</li>
                 <li>${info.strIngredient11}</li>
                 <li>${info.strIngredient12}</li>
                 <li>${info.strIngredient13}</li>
                 <li>${info.strIngredient14}</li>
                 <li>${info.strIngredient15}</li>
              </ul> 
        </div>
        `
    secondaryDiv.innerHTML = information;
}

const errorMessage=error=>{
    document.getElementById('error-message').innerText='Sorry!!! Something Went Wrong.Try Again Later...'
}
