import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

//REACT ROUTER
import { useLocation } from "react-router";

// COMPONENTS
import Games from "../components/Games";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimatePresence>{path && <GameDetail pathId={path} />}</AnimatePresence>

      {searched.length ? (
        <>
          <h2>Searched Games</h2>
          <Games gamesData={searched} />
        </>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <Games gamesData={upcoming} />
      <h2>New Games</h2>
      <Games gamesData={newGames} />
      <h2>Popular Games</h2>
      <Games gamesData={popular} />
    </GameList>
  );
};

//styles
const GameList = styled(motion.div)`
  padding: 0rem 4rem;
`;

export default Home;
