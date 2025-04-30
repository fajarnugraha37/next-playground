import { StateCreator } from "zustand";

export type CommonState = {
  isLoading: boolean;
};

export type CommonAction = {
  processStart: () => void;
  processDone: () => void;
};

export type CommonStore = CommonState & CommonAction;

const defaultInitState: CommonState = {
  isLoading: false,
};

export const createCommonSlice: StateCreator<
  CommonStore,
  [],
  [],
  CommonStore
> = (set) => ({
  ...defaultInitState,
  processStart: () => set(() => ({ isLoading: true })),
  processDone: () => set(() => ({ isLoading: false })),
});
