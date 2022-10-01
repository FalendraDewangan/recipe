import React from 'react'

const Top = (props) => {
  
  function updateParameter()
  {
    let obj={};
    //update the obj object
    obj.q=document.getElementById('query').value;
    obj.diet = document.getElementById('diet').value;
    obj.health = document.getElementById('health').value;
    props.update(obj);
  }
  return (
    <div className="top">
        <h2>Welcome to food recipe app</h2>
        <form>
          <input type="text" id='query'/>
          <select id="diet">
            <option value="">Choose Diet</option>
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High Fiber</option>
            <option value="high-protein">High Protein</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-fat">Low Fat</option>
            <option value="low-sodium">Low Sodium</option>
          </select>
          <select id="health">
            <option value="">Health</option>
            <option value="alcohol-cocktail">Alcohol Cocktail</option>
            <option value="alcohol-free">Alcohol free</option>
            <option value="celery-free">celery free</option>
            <option value="crustacean-free">crustacean free</option>
            <option value="dairy-free">Dairy free</option>
            <option value="DASH">Dash</option>
            <option value="egg-free">Egg free</option>
            <option value="fish-free">Fish free</option>
            <option value="fodmap-free">Fodmap free</option>
            <option value="gluten-free">Gluten free</option>
            <option value="kidney-friendly">Kidney friendly</option>
            <option value="kosher">Kosher</option>
            <option value="low-sugar">Low sugar</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
          <button type="button" className="btn btn-success" onClick={updateParameter}>Search</button>
        </form>
    </div>
  )
}

export default Top
