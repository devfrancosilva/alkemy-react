import { API_AUTH } from "../API";

export const useAuthRequest = () => {
  const authRequest = async ({ email, password }) => {
    try {
      const {
        data: { token },
      } = await API_AUTH.post("/", { email, password });

      if (token) {
        localStorage.setItem("userAuth", token);
        return token;
      }
      return null;
    } catch (e) {
      console.error(e);
      return e.response.data;
    }
  };

  return {
    authRequest,
  };
};
