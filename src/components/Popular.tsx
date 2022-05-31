import { useEffect, useState } from "react";
import { Recipe } from "../interfaces/interfaces";

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
        import.meta.env.VITE_TEST_VAR
      }`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  useEffect(() => {
    getPopular();
  }, []);

  console.log(popular);

  return (
    <div>
      {popular?.map((recipe: Recipe) => (
        <>
          <p>{recipe.title}</p>
          {console.log(Object.keys(recipe))}
        </>
      ))}
    </div>
  );
};
