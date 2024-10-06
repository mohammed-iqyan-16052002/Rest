import React, { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaShareAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../Function/Action";
import {WhatsappShareButton} from 'react-share'

export default function Func() {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  const [recipes, setRecipes] = useState([]);

  const read = (e) => {
    setInp(e.target.value);
  };

  const search = () => {
    if (inp.trim() === "") {
      console.log("Search input is empty");
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          alert("No recipes found");
          setRecipes([]);
        }
      })
      .catch((error) => console.error("Error:", error));

    setInp("");
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          console.log("No default recipes found");
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="text-center">Restaurant Recipes</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search Recipe"
            className="search-input"
            value={inp}
            onChange={read}
          />
          <button className="search-button" onClick={search}>
            <FaSearch className="search-icon" />
          </button>
        </div>
      </div>

      <div className="content">
        <p>
          Welcome to our restaurant recipe collection! Explore various dishes,
          discover new favorites, and refine your culinary skills.
        </p>
        <p>
          Use the search bar above to find specific recipes or browse our
          collection to get inspired!
        </p>
      </div>

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="recipe-image"
            />
            <div className="recipe-content">
              <h3 className="recipe-title">{recipe.strMeal}</h3>
              <p className="recipe-description">Description not available</p>
              <div className="icon-wrapper">
                <button
                  className="icon-button"
                  onClick={() => dispatch(addtocart(recipe))}
                >
                  <FaHeart className="icon" />
                </button>
                <WhatsappShareButton
                  url={`https://recipestalk.vercel.app/`}
                  title={recipe.strMeal}>
                <button className="icon-button">
                  <FaShareAlt className="icon" />
                </button>
                </WhatsappShareButton>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
