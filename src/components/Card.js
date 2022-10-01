import React from 'react'

const Card = (props) => {
    return (
        <>
            <a href={props.recipeObj.recipe.url} target='blank'>
            <div className="card">
                <img src={props.recipeObj.recipe.image}  alt="..."/>
                    <div className="card-body">
                        <h3>{props.recipeObj.recipe.label}</h3>
                        <p>Read about this...</p>
                    </div>
            </div>
            </a>
        </>
    )
}

export default Card
