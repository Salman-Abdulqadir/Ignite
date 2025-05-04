import HttpService from "@/lib/http-helper";

export const CreatorsAPI = {
  getCreatorRoles: async (query) =>
    HttpService.get("/api/creator-roles", { query }),
  getCreators: async (query) => HttpService.get("/api/creators", { query }),
  getCreatorById: async (id) => HttpService.get(`/api/creators/${id}`),
};
