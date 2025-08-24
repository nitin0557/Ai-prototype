import { useState} from "react";
import {useChatStore} from "@/data/store/ChatStore";

type Props = {
    onSend?: (prompt: string, type?: "text" | "image" | "file") => void;
};

export default function PromptEditor({ onSend }: Props) {
    const [input, setInput] = useState("");
    const addMessage = useChatStore((s) => s.addMessage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        addMessage({ role: "user", content: input, type: "text" });

        onSend?.(input, "text");

        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border rounded-md"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-md"
            >
                Send
            </button>

            {/* Image Upload */}
            <label className="cursor-pointer bg-gray-200 px-3 py-2 rounded-md">
                📷
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            addMessage({
                                role: "user",
                                content: `Uploaded: ${file.name}`,
                                type: "image",
                            });
                            onSend?.(`Uploaded: ${file.name}`, "image");
                        }
                    }}
                />
            </label>

            {/* File Upload */}
            <label className="cursor-pointer bg-gray-200 px-3 py-2 rounded-md">
                📎
                <input
                    type="file"
                    hidden
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            addMessage({
                                role: "user",
                                content: `Uploaded: ${file.name}`,
                                type: "file",
                            });
                            onSend?.(`Uploaded: ${file.name}`, "file");
                        }
                    }}
                />
            </label>
        </form>
    );
}
