import httpClient from '../helpers/http_client/http_client';

export const registerNewUser = async (data) => {
  try {
    const response = await httpClient.post(`/rest-auth/registration/`, data);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to register user:", error);
    return null;
  }
};

export const login = async (data) => {
  try {
    const response = await httpClient.post(`/rest-auth/login/`, data);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to login user:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    const response = await httpClient.post(`/rest-auth/logout/`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to logout user:", error);
    return null;
  }
};
