const initState = {
    game: {platforms: []},
    screenshot: {results: []},
    isLoading: true
  };
  const detailsReducer = (state = initState, action) => {
    switch (action.type) {
      case "GAME_DETAILS":
        return {
          ...state,
          game: action.payload.game,
          screenshot: action.payload.screenshots,
          isLoading: false
        };
        case "LOADING_DETAILS":
            return {...state, isLoading: true}
      default:
        return { ...state };
    }
  };
  
  export default detailsReducer;