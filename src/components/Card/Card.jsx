import React from 'react'
import { Link } from 'react-router'
export default function Card({ meal }) {
  return <>


<div className="meal text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]">
  <img src={meal.strMealThumb} className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl" alt="" />
  <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider	 text-xl">{meal.strMeal}</h3>
  <button className="text-white  mt-4 bg-secondary bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full">
    <Link to={`/mealdetails/${meal.idMeal}`} data-discover="true"> View Recipe</Link> 
    
     </button>
     </div>


  </>
}
