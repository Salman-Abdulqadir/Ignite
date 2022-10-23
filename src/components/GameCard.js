import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { gameDetails } from "../actions/detailAction";

import { Link } from "react-router-dom";

const Game = ({ name, released, img, id }) => {
  const dispatch = useDispatch();
  const layId = id.toString();

  const getDetails = (id) => {
    dispatch(gameDetails(id));
  };
  return (
    <StyledGame layoutId={layId} onClick={() => getDetails(id)}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <div className="back_img">
          <img src={img} alt={name} />
        </div>
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow-y: hidden;
  padding-top: 3rem;
  h3 {
    padding: 0;
  }
  .back_img {
    width: 100%;
    height: 30vh;
    img {
      width: 100%;
      height: 40vh;
      display: block;
      object-fit: center;
    }
  }
`;
export default Game;
