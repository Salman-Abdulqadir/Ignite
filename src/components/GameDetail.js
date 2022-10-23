import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//IMPORTING IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import full from "../img/star-full.png";
import empty from "../img/star-empty.png";

const GameDetail = ({ pathId }) => {
  const { game, screenshot, isLoading } = useSelector((state) => state.details);
  const navigate = useNavigate();
  const closeDetails = (e) => {
    if (e.target.classList.contains("shadow")) {
      navigate("/");
    }
  };

  // get platform image
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;

      case "Xbox One":
        return xbox;

      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const getRating = (rating) => {
    let i = 0;
    let stars = [];
    for (i; i < Math.floor(rating); i++) {
      stars.push(full);
    }
    for (i; i < 5; i++) {
      stars.push(empty);
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={closeDetails}>
          <Details layoutId={pathId}>
            <Stats>
              <Rating>
                <h3>{game.name}</h3>
                <div className="rate">
                  {getRating(game.rating).map((star) => (
                    <img src={star} alt="star-rating"></img>
                  ))}
                </div>
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="gameData.game.name" />
            </Media>
            <Description>
              <h3>About the game: </h3>
              <p>{game.description}</p>
            </Description>
            <Gallery>
              {screenshot.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={`${screen.id}`} />
              ))}
            </Gallery>
          </Details>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
const Details = styled(motion.div)`
  padding: 2rem 5rem;
  width: 80%;
  border-radius: 1rem;
  position: absolute;
  left: 10%;
  background-color: white;
  h3 {
    margin-bottom: 1.5rem;
  }
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Rating = styled(motion.div)`
  img {
    width: 2rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 2rem;
    margin: 0rem 1rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
  img {
    width: 100%;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;
`;
export default GameDetail;
