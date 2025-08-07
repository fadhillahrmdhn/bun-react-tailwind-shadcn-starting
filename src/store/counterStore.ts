import type { CounterStore } from "@/interfaces";
import { create } from "zustand";

export const useCounterStore = create<CounterStore>()((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
        reset: () => set({ count: 0 }),
}));