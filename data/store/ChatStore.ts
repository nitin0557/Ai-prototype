import { create } from "zustand";

type Message = {
    role: "user" | "assistant";
    type: "text" | "image" | "file";
    content: string;
};

type ChatState = {
    model: string;
    // temperature: number;
    // maxTokens: number;
    messages: Message[];
    setModel: (m: string) => void;
    // setTemperature: (t: number) => void;
    // setMaxTokens: (n: number) => void;
    addMessage: (msg: Message) => void;
    reset: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
    model: "gpt-3.5",
    // temperature: 0.7,
    // maxTokens: 512,
    messages: [],
    setModel: (m) => set({ model: m }),
    // setTemperature: (t) => set({ temperature: t }),
    // setMaxTokens: (n) => set({ maxTokens: n }),
    addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
    reset: () =>
        set({
            model: "gpt-3.5",
            // temperature: 0.7,
            // maxTokens: 512,
            messages: [],
        }),
}));
