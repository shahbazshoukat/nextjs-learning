import httpClient from '../helpers/http_client/http_client';

export const getApps = async () => {
  try {
    const response = await httpClient.get(`/api/v1/apps/`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const getAppById = async (appId) => {
  try {
    const response = await httpClient.get(`/api/v1/apps/${appId}`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const createNewApp = async (appData) => {
  console.log('createNewApp: ', appData)
  try {
    console.log('createNewApp: ', appData)
    const response = await httpClient.post(`/api/v1/apps/`, {}, { withCredentials: true });
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return null;
  }
};

export const updateAnApp = async (appId, appData) => {
  try {
    const response = await httpClient.put(`/api/v1/apps/${appId}`, appData);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const deleteAnApp = async (appId) => {
  try {
    const response = await httpClient.delete(`/api/v1/apps/${appId}`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};
