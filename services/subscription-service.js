import httpClient from 'helpers/http_client/http_client';

export const getSubscriptions = () => async () => {
  try {
    const response = await httpClient.get(`/api/v1/subscriptions/`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const getSubscriptionById = (appId) => async () => {
  try {
    const response = await httpClient.get(`/api/v1/subscriptions/${appId}`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const createNewSubscription = (appData) => async () => {
  try {
    const response = await httpClient.post(`/api/v1/subscriptions/`, appData);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const updateASubscription = (appId, appData) => async () => {
  try {
    const response = await httpClient.put(`/api/v1/subscriptions/${appId}`, appData);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const deleteASubscription = (appId) => async () => {
  try {
    const response = await httpClient.delete(`/api/v1/subscriptions/${appId}`);
    return response && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

