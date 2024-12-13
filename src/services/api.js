const baseUrl =
  import.meta.env.VITE_REACT_ENV == "development"
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

const auth = async (dataForm) => {
  return await fetch(`${baseUrl}/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });
};

const login = async (dataForm) => {
  const response = await fetch(`${baseUrl}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });

  return await response.json();
};

const createSim = async (dataForm) => {
  const response = await fetch(`${baseUrl}/api/simulation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });

  return await response.json();
};

const getSims = async (email, token) => {
  const response = await fetch(`${baseUrl}/api/simulation/user/${email}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};

const logout = async (token) => {
  return await fetch(`${baseUrl}/api/user/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });
};

const refreshToken = async (refresh_token) => {
  const response = await fetch(`${baseUrl}/api/user/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refresh_token}`,
    },
    /*withCredentials: true,
    crossorigin: true,*/
    mode: "no-cors",
  }).catch((error) => {
    console.log(error);
  });

  return await response.json();
};

export { auth, login, logout, createSim, getSims, refreshToken };
