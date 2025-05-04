import HttpService from "@/lib/http-helper";

export const GamesAPI = {
  /**
     * @param
     * Query:
     *      page,
            page_size,
            search = "",
            search_precise = false,
            search_exact = false,
            parent_platforms = "",
            platforms = "",
            stores = "",
            developers = "",
            publishers = "",
            geners = "",
            tags = "",
            dates = "",
            updated = "",
            platforms_count = 0,
            metacritic = "",
            exclude_collection = "",
            exclude_parents = "",
            exclude_additions = false,
            exclude_game_series = false,
            exclude_stores = "",
            ordering = ""
     */
  getGames: async (query) => HttpService.get("/games", query),
};
