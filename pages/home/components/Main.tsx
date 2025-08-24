import React, { useState } from "react";
import ModelSelector from "@/pages/home/components/ModelSelector";
import PromptEditor from "@/pages/home/components/PromptEditor";
import ChatOutput from "@/ChatOutput";
import SideNav from "@/pages/home/components/SideNav";
import { sendMessageToMockAPI, Message } from "@/data/apis/mockApi";

export default function Main () {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSend = async (prompt: string, type: "text" | "image" | "file") => {
        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: prompt,
            type,
        };
        setMessages((prev) => [...prev, userMessage]);

        const response = await sendMessageToMockAPI(prompt, type);
        setMessages((prev) => [...prev, response]);
    };

    const handleDelete = (id: string) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
    };

    return (
        <div className="flex h-screen">
            <SideNav />

            <div className="flex flex-col flex-1  dark:bg-sideNavDark dark:text-white">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-3 border-b  dark:bg-sideNavDark dark:text-white shadow-sm">
                    <ModelSelector />
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-6 dark:bg-sideNavDark dark:text-white">
                    <ChatOutput messages={messages} onDelete={handleDelete} />
                </main>

                {/* Footer */}
                <footer className="border-t p-4 dark:bg-sideNavDark dark:text-white dark:bg-gray-800">
                    <PromptEditor
                        onSend={(prompt, type) => {
                            void handleSend(prompt, type ?? "text");
                        }}
                    />
                </footer>
            </div>
        </div>
    );
};
