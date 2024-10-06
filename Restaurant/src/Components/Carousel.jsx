import React from 'react'
import Func from './Func'
export default function Carouse() {
  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
      <h1>Discover Delicious Restaurant Recipes</h1>
      <p>
          Explore our curated collection of mouth-watering recipes from the best
          restaurants. Bring the flavors of your favorite dining spots to your
          home kitchen.
        </p>
        <a href="#" className="hero-btn text-light">View Recipes &rarr;</a>
      </div>
      <div className="hero-image">
        <img src='https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg' alt="Delicious Food" />
      </div>
    </div>
    <Func />
    </>
  )
}

