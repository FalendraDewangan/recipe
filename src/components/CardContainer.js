import React from 'react'
import Card from './Card'

const CardContainer = (props) => {

  return (
    <div className="cardContainer">
      {
        props.hits.map((ele) => {
          return <Card recipeObj={ele} key={ele.recipe.uri}/>;
        })}
    </div>
  )
}

export default CardContainer
