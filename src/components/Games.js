import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "./GameCard";

const Games = ({ gamesData }) => {
  return (
    <StyledGames>
      {gamesData.map((game) => (
        <Game
          name={game.name}
          released={game.released}
          img={game.background_image}
          id = {game.id}
          key={game.id}
        />
      ))}
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  padding: 5rem 0rem;
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;
export default Games;
