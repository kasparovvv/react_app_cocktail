import React from "react";

const Card  = ({cocktail}) => {





    return (
        <div className="col">
            <div className="card shadow-sm rounded  bg-dark">
                <img src={cocktail.strDrinkThumb} className="card-img-top" alt="cocktail cap"/>
                <div className="card-body">
                    <h5 className="card-title text-white" > - {cocktail.strDrink} - </h5>
                </div>
            </div>
        </div>
    )
}

export default Card;