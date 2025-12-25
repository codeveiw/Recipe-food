// pages/MealDetails.jsx
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardDetails from "../components/CardDetails/CardDetails";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function getMealDetails() {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    }

    getMealDetails();
  }, [id]);

  if (!meal) return <p className="mt-24 text-center">Loading...</p>;

  return (
    <div className="">
      <CardDetails meal={meal} />
      
    </div>
  );
}
