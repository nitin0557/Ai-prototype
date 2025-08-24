import React, {useCallback, useState} from "react";
import { Copy, Download, Share2, Trash } from "lucide-react";
import {Message} from "@/data/apis/mockApi";

type Props = {
    messages: Message[];
    onDelete: (id: string) => void;
};

export default function ChatOutput({ messages, onDelete }: Props) {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied!");
    };

    const handleDownload = useCallback((text: string) => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "chat.txt";
        a.click();
        URL.revokeObjectURL(url);
    },[]);

    return (
        <div className="space-y-4">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`p-4 rounded-lg ${
                        msg.role === "user"
                            ? "bg-blue-100 text-blue-900"
                            : "bg-gray-200 text-gray-900"
                    }`}
                >
                    <p>{msg.content}</p>
                    <div className="flex gap-3 mt-2 text-gray-600 text-sm">
                        <button onClick={() => handleCopy(msg.content)}>
                            <Copy size={16} />
                        </button>
                        <button onClick={() => handleDownload(msg.content)}>
                            <Download size={16} />
                        </button>
                        <button onClick={() => alert("Sharing...")}>
                            <Share2 size={16} />
                        </button>
                        <button onClick={() => onDelete(msg.id)}>
                            <Trash size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
