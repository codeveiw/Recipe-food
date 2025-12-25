import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function getMeal() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    }
    getMeal();
  }, [id]);

  if (!meal) return <p className="mt-24 text-center">Loading...</p>;

  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="container p-4 mt-24">
      <div className="flex gap-6 flex-col lg:flex-row">
        
        {/* LEFT */}
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-semibold mb-6 font-Pacifico">
            {meal.strMeal}
          </h1>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <img
                className="w-full rounded-2xl mb-6"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />

              <div className="flex gap-4 justify-center">
                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white py-2 px-4 rounded-lg"
                  >
                    YouTube
                  </a>
                )}

                {meal.strSource && (
                  <a
                    href={meal.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>

            <p className="leading-relaxed whitespace-pre-line">
              {meal.strInstructions}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl p-4">
            <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
              Ingredients
            </h3>

            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex justify-between p-2 border-b last:border-b-0"
              >
                <span>{item.name}</span>
                <span>{item.measure}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
