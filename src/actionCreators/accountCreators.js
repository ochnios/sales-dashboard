export const login = (username, errorFunc) => {
  return {
    type: "LOGIN",
    payload: {
      login: username,
      setError: errorFunc,
    },
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

export const switchStore = (storeAccId) => {
  return { type: "SELECT_STORE", payload: storeAccId };
};
