import React, { useEffect } from 'react'
import {  NavLink } from 'react-router'



export default function Navbar() {


  return <>
  <h1 className="text-4xl ps-4 font-bold title mt-4  bg-clip-text text-transparent">Learn, Cook, Eat Your Food</h1>
<ul className="sm:flex hidden m-4  mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
  <li className="me-2"><NavLink aria-current="page" className="inline-block catLink px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:bg-black hover:text-white " end to="/" data-discover="true">All</NavLink></li>
  <li className="me-2"><NavLink className=" inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:bg-black hover:text-white" to="/category/beef" data-discover="true">Beef</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:bg-black hover:text-white" to="/category/Breakfast" data-discover="true">Breakfast</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Chicken" data-discover="true">Chicken</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Dessert" data-discover="true">Dessert</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Goat" data-discover="true">Goat</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Lamb" data-discover="true">Lamb</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Miscellaneous" data-discover="true">Miscellaneous</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Pasta" data-discover="true">Pasta</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Pork" data-discover="true">Pork</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Seafood" data-discover="true">Seafood</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Side" data-discover="true">Side</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Starter" data-discover="true">Starter</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Vegan" data-discover="true">Vegan</NavLink></li>
  <li className="me-2"><NavLink className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-black" to="/category/Vegetarian" data-discover="true">Vegetarian</NavLink></li>
</ul>

  
  </>
}
