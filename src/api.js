// BASE URL OF THE API
const api_key = "602fecd2b6894f548e7efd5e643a1b79";
const url_base = "https://api.rawg.io/api/";

// GETTING DAy AND MONTH
const get_year = (year_index = 0) => {
  const currentDate = new Date();
  const month =
    currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : currentDate.getMonth() + 1;
  const day =
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : currentDate.getDate();
  const year = currentDate.getFullYear() + year_index;
  return `${year}-${month}-${day}`;
};

// DATES
const currentYear = get_year();
const lastYear = get_year(-1);
const nextYear = get_year(1);

// POPULAR GAMES
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentYear}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${api_key}&dates=${currentYear},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?key=${api_key}&dates=${currentYear},${nextYear}&ordering=-released&page_size=20`;

export const upcomingGamesURL = () => url_base + upcoming_games;
export const popularGamesURL = () => url_base + popular_games;
export const newGamesURL = () => url_base + new_games;
export const gameDetailURL = (game_id) =>
  url_base + `games/${game_id}?key=${api_key}`;
export const gameScreenshotURL = (game_id) =>
  url_base + `games/${game_id}/screenshots?key=${api_key}`;

export const searchGamesURL = (gameName) => url_base+ `games?key=${api_key}&search=${gameName}`;
