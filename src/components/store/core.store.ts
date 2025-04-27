import { create, StateCreator, StoreApi } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

/**
 * Generic Store Options
 *
 */
type StoreOptions<T> = {
  persistOptions?: PersistOptions<T>;
};

/**
 * Generic Store Creator for Nested State
 *
 * @param initialState
 * @param initializer
 * @param options
 * @returns
 */
export function createNestedStore<
  TState extends object,
  TAction extends object
>(
  initialState: TState,
  initializer: (
    set: StoreApi<TState>["setState"],
    get: StoreApi<TState>["getState"]
  ) => TAction,
  options?: StoreOptions<TState & TAction>
): StoreApi<TState & TAction> {
  return options?.persistOptions
    ? create<TState & TAction>()(
        persist(
          (set, get) => ({
            ...initialState,
            ...initializer(set, get),
          }),
          options.persistOptions
        )
      )
    : create<TState & TAction>()((set, get) => ({
        ...initialState,
        ...initializer(set, get),
      }));
}

/**
 * Generic Sub-Store Creator
 *
 * @param initialState
 * @param initializer
 * @returns
 */
export function createSubStore<T extends object>(
  initialState: T,
  initializer: (set: StoreApi<T>["setState"], get: StoreApi<T>["getState"]) => T
): StateCreator<T> {
  return (set, get) => ({
    ...initialState,
    ...initializer(set, get),
  });
}
