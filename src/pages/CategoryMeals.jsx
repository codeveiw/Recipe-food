// pages/CategoryMeals.jsx
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card.jsx";


export default function CategoryMeals() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .then((res) => setMeals(res.data.meals));
  }, [category]);

  return (
      <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
      {meals?.map((meal) => (
       <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
