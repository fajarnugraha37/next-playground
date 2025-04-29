import { create } from "zustand";
import { LocationState } from "./location.slice";
import { createLocationSlice } from "./location.slice";

export type CoreStore = LocationState;

export const createCoreStore = () =>
  create<CoreStore>((...a) => ({
    ...createLocationSlice(...a),
  }));
