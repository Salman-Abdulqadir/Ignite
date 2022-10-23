import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//LOGO
import logo from "../img/logo.svg";

//REDUX
import { useDispatch } from "react-redux";
import { clearSearch } from "../actions/gamesAction";
import { searchGames } from "../actions/gamesAction";

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  }
  const  search = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchQuery));
    setSearchQuery('');
  }

  const removeSearch = () => {
    dispatch(clearSearch());
  };

  return (
    <StyledNav>
      <Logo onClick={removeSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form>
        <input onChange={inputHandler} value={searchQuery} type="text" />
        <button onClick={search} className="search-btn">search</button>
      </form>
    </StyledNav>
  );
};

// STYLED COMPONENTS
const StyledNav = styled(motion.div)`
  text-align: center;
  input,
  button {
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    border: 1px solid #771c2d79;
  }

  .search-btn {
    background-color: #771c2d79;
    transition: all 0.5s ease;
    color: white;
    &:hover {
      background-color: white;
      color: #771c2d79;
    }
  }
`;
const Logo = styled(motion.div)`
  margin: 3rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Search;
