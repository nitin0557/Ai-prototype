import React, { useState } from "react";
import ModelSelector from "@/pages/home/components/ModelSelector";
import PromptEditor from "@/pages/home/components/PromptEditor";
import ChatOutput from "@/ChatOutput";
import SideNav from "@/pages/home/components/SideNav";
import { sendMessageToMockAPI, Message } from "@/data/apis/mockApi";
import { Menu, X } from "lucide-react";

export default function Main() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // 👈 for mobile drawer

  const handleSend = async (
    prompt: string,
    type: "text" | "image" | "file",
  ) => {
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
      <div className="hidden md:block">
        <SideNav
          isNavOpen={isNavOpen}
          showProfileDropdown={showProfileDropdown}
          setShowProfileDropdown={setShowProfileDropdown}
        />
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-gray-900 text-white p-4 flex flex-col relative">
            <button
              className="self-end mb-4"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <SideNav
              isNavOpen={isNavOpen}
              showProfileDropdown={showProfileDropdown}
              setShowProfileDropdown={setShowProfileDropdown}
            />
          </div>

          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 dark:bg-sideNavDark dark:text-white">
        <header className="flex items-center justify-between px-4 py-2 border-b dark:bg-sideNavDark dark:text-white shadow-sm md:px-6 md:py-3">
          <button
            className="md:hidden mr-2"
            onClick={() => setIsNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <ModelSelector />
        </header>

        <main className="flex-1 overflow-y-auto p-3 md:p-6 dark:bg-sideNavDark dark:text-white">
          <ChatOutput messages={messages} onDelete={handleDelete} />
        </main>

        <footer className="border-t p-2 md:p-4 dark:bg-sideNavDark dark:text-white dark:bg-gray-800">
          <PromptEditor
            onSend={(prompt, type) => {
              void handleSend(prompt, type ?? "text");
            }}
          />
        </footer>
      </div>
    </div>
  );
}
