import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { Recipe } from "../interfaces/interfaces";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`;

const Card = styled.div`
    
    img{
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;

    }

    h4{
        text-align: center;
        padding: 1rem;
    }
`

export const Cuisine = () => {
  const [cusine, setCusine] = useState([]);
  const params = useParams();
  const GetCuisine = async (name: string | undefined) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=10&cuisine=${name}&apiKey=${
        import.meta.env.VITE_TEST_VAR
      }`
    );
    const recepies = await data.json();
    setCusine(recepies.results);
  };

  useEffect(() => {
    GetCuisine(params.type);
  }, [params.type]);

  return <Grid>
      {cusine.map((recepie:Recipe)=>(
          <Card key={recepie.id}>
              <img src={recepie.image} alt={recepie.image} />
              <h4>{recepie.title}</h4>
          </Card>
      ))}
  </Grid>;
};
