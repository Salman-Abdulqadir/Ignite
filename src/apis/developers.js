import HttpService from "@/lib/http-helper";

export const DeveloperAPI = {
  getDevelopers: async (query) => HttpService.get("/api/developers", { query }),
  getDeveloperById: async (id) => HttpService.get(`/api/developers/${id}`),
};
