import apiMain from "./apiMain";
import { dummyRequests } from "./dummy/waiter.data";

const USE_DUMMY = true; // Set to false to use real API

export const WaiterAPI = {
  getNotifications: async () => {
    if (USE_DUMMY) return dummyRequests;

    const res = await apiMain.get("/waiter/requests");
    return res.data;
  },

  resolveRequest: async (requestId) => {
    if (USE_DUMMY) return { success: true };

    return apiMain.post("/waiter/requests/resolve", { requestId });
  },
};
