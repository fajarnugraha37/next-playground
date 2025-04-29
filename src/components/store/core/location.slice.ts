import { StateCreator } from "zustand";

export interface LocationState {
  location: {
    hostname: string;
    path: string;
    query: Record<string, any>;
  };
  getLocation: () => Pick<
    LocationState["location"],
    "hostname" | "path" | "query"
  >;
  updateLocation: () => void;
}

export const createLocationSlice: StateCreator<LocationState, [], []> = (
  set,
  get
) => ({
  location: {
    hostname: "",
    path: "",
    query: {},
  },
  getLocation: () => {
    const hostname = window.location.hostname ?? "";
    const path = window.location.pathname ?? "";
    const queryParams = new URLSearchParams(window.location.search ?? "");
    const query: Record<string, any> = {};
    queryParams.forEach((value, key) => (query[key] = value));

    return {
      hostname,
      path,
      query,
    };
  },
  updateLocation: () => {
    const newState = get().getLocation();
    set(() => ({ location: newState }));
  },
});
