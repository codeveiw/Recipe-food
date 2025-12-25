// components/Home/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
      {meals?.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
