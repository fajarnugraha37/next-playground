import { StateCreator } from "zustand";

export interface LocationState {
  location: {
    hostname: string;
    path: string;
    query: Record<string, any>;
  };
}

export type LocationAction = {
  getLocation: () => Pick<
    LocationState["location"],
    "hostname" | "path" | "query"
  >;
  updateLocation: () => void;
};

export type LocationStore = LocationState & LocationAction;

const defaultInitState: LocationState = {
  location: {
    hostname: "",
    path: "",
    query: {},
  },
};

export const createLocationSlice: StateCreator<LocationStore, [], []> = (
  set,
  get
) => ({
  ...defaultInitState,
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
