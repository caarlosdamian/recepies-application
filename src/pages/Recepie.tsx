import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Details, Recipe } from "../interfaces/interfaces";
import { fallback } from "../utils/data";

const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  &.active {
    background: #313131;
    color: white;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export const Recepie = () => {
  const [details, setDetails] = useState<Details>(fallback);
  const [active, setactive] = useState("instructions");
  const params = useParams();

  const fetchDetails = async (id: string | undefined) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${
        params.id || 1
      }/information?apiKey=${import.meta.env.VITE_TEST_VAR}`
    );
    const recepies = await data.json();
    setDetails(recepies);
  };

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);
  return (
    <DetailWrapper
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    
    >
      <div>
        <h2>{details?.title}</h2>
        <img src={details?.image} alt="image" />
      </div>
      <Info>
        <Button
          className={(active === "instructions" && "active") || ""}
          onClick={() => setactive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={(active === "ingridients" && "active") || ""}
          onClick={() => setactive("ingridients")}
        >
          Ingridients
        </Button>

        {active === "ingridients" ? (
          <ul>
            {details?.extendedIngredients.map((ingridient) => (
              <li key={ingridient.id}>{ingridient.original}</li>
            ))}
          </ul>
        ) : (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
};
