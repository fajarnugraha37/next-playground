import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LocationStore, createLocationSlice } from "../location/location.slice";
import { AuthStore, createAuthSlice } from "../auth/auth.slice";
import { CommonStore, createCommonSlice } from "../common/common.slice";

export type CoreStore = CommonStore & AuthStore & LocationStore;

export const createCoreStore = () =>
  create<CoreStore>()(
    persist(
      (...a) => ({
        ...createCommonSlice(...a),
        ...createAuthSlice(...a),
        ...createLocationSlice(...a),
      }),
      {
        name: "core-store",
      }
    )
  );
