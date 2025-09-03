import { useCallback } from "react";
import Cookies from "js-cookie";

export const useAuthToken = () => {
  const getToken = useCallback(() => {
    return Cookies.get("adminToken");
  }, []);

  const getAuthHeaders = useCallback(() => {
    const token = getToken();
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }, [getToken]);

  const getAuthHeadersForFormData = useCallback(() => {
    const token = getToken();
    return {
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }, [getToken]);

  return {
    getToken,
    getAuthHeaders,
    getAuthHeadersForFormData,
  };
};
