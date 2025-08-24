import React from "react";
import { Settings, Archive, Star } from "lucide-react";

export default function ChatListNav() {
    return (
        <div className="border-t border-gray-700 p-3 flex flex-col gap-2">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                <Star size={16} /> Pinned
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                <Archive size={16} /> Archived
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                <Settings size={16} /> Settings
            </button>
        </div>
    );
}
