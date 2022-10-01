import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Top from './components/Top';

function App() {

  const [result,setResult] = useState({to:0,count:0,hits:[],diet:""});
  async function update(obj) {
    let recipeLink = `https://api.edamam.com/api/recipes/v2?type=any&q=${obj.q}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
    if(obj.diet) recipeLink+=`&diet=${obj.diet}`;
    if(obj.health) recipeLink+=`&health=${obj.health}`;
    let res = await fetch(recipeLink);
    res = await res.json();
    setResult(res);
  }
   async function loadNext()
   {
      let res = await fetch(result._links.next.href);
      res = await res.json();
      setResult(res);      
   }
  return (
    <div className="App">
      <Top update={update}/>
      <CardContainer hits={result.hits}/>
      <div><button className='next' onClick={loadNext}>Next</button></div>
    </div>
  );
}

export default App;