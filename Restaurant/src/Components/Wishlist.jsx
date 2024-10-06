import React from 'react';
import { useSelector } from 'react-redux';
import {FaTrash}  from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import {remtocart}  from '../Function/Action'


export default function Wishlist() {
    const dispatch = useDispatch();
    const likedRecipes = useSelector(state => state.resData.liked);
    console.log('Liked Recipes in Wishlist:', likedRecipes);

    return (
        <div className="recipe-container">
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {likedRecipes.length === 0 ? (
                <p>No recipes in wishlist</p>
            ) : (
                likedRecipes.map(recipe => (
                    <div key={recipe.idMeal} className="recipe-card">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
                        <div className="recipe-content">
                            <h3 className="recipe-title">{recipe.strMeal}</h3>
                        </div>
                        <div className="icon-wrapper">
                <button
                  className="icon-button"onClick={()=>dispatch(remtocart(recipe.idMeal))}>
                  <FaTrash className="icon" />
                </button>
                </div>
                    </div>
                ))
            )}
        </div>
        </div>
    );
}
