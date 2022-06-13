import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Recipe } from "../interfaces/interfaces";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const Searched = () => {
  const [search, setSearch] = useState([]);
  const params = useParams();
  const getSearch = async (name: string | undefined) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=10&query=${name}&apiKey=${
        import.meta.env.VITE_TEST_VAR
      }`
    );
    const recepies = await data.json();
    setSearch(recepies.results);
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    
    >
      {search.map((recepie: Recipe) => (
        <Card key={recepie.id}>
          <Link to={`/recepie/${recepie.id}`}>
            <img src={recepie.image} alt={recepie.image} />
            <h4>{recepie.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};
