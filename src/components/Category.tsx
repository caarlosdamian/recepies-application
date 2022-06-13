import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right:2rem;
  text-decoration: none;
  background: linear-gradient(35deg,#494949,#313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }

`

export const Category = () => {
  return (
    <List>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledLink>
    </List>
  );
};
