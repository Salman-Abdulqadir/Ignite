const API_KEY = import.meta.env.VITE_API_KEY;

const buildUrl = (url, query) => {
  const mergedQuery = {
    ...(query || {}),
    ...(API_KEY ? { key: API_KEY } : {}),
  };

  const queryString =
    "?" +
    new URLSearchParams(
      Object.entries(mergedQuery).reduce((acc, [key, val]) => {
        if (val !== undefined && val !== null) acc[key] = String(val);
        return acc;
      }, {})
    ).toString();

  return `${url}${queryString}`;
};

const getHeaders = (customHeaders) => {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    ...(customHeaders || {}),
  };
};

const HttpService = {
  async get(url, options) {
    const response = await fetch(buildUrl(url, options?.query), {
      method: "GET",
      headers: getHeaders(options?.headers),
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  },

  async post(url, body, options) {
    const response = await fetch(buildUrl(url, options?.query), {
      method: "POST",
      headers: getHeaders(options?.headers),
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  },

  async patch(url, body, options) {
    const response = await fetch(buildUrl(url, options?.query), {
      method: "PATCH",
      headers: getHeaders(options?.headers),
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  },

  async delete(url, options) {
    const response = await fetch(buildUrl(url, options?.query), {
      method: "DELETE",
      headers: getHeaders(options?.headers),
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  },
};

export default HttpService;
