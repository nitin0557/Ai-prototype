import React, {useState, useEffect, useCallback} from "react";
import { Plus, Menu } from "lucide-react";
import { useAuth } from "@/data/contexts/AuthContext";
import SearchList from "@/pages/home/components/SearchList";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useTheme } from "next-themes";
import ProfileDropdown from "@/pages/home/components/ProfileDropdown";

type Chat = {
    id: string;
    title: string;
};

export default function SideNav() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const [chats, setChats] = useState<Chat[]>([
        { id: "1", title: "Chat 1" },
        { id: "2", title: "Chat 2" },
        { id: "3", title: "Project Ideas" },
        { id: "4", title: "Shopping List" },
    ]);
    const [filtered, setFiltered] = useState(chats);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    // ✅ Theme handling
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const handleNewChat = () => {
        const newChat: Chat = {
            id: Date.now().toString(),
            title: `New Chat ${chats.length + 1}`,
        };
        setChats((prev) => [...prev, newChat]);
        setFiltered((prev) => [...prev, newChat]);
    };

    const handleSearch = (query: string) => {
        if (!query.trim()) {
            setFiltered(chats);
        } else {
            setFiltered(
                chats.filter((c) =>
                    c.title.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    };

    return (
        <div
            className={`${
                isOpen ? "w-64" : "w-16"
            }  dark:bg-sideNavDark  dark:text-white h-screen transition-all duration-300 flex flex-col 
        `}
        >
            {/* Search */}
            <SearchList onSearch={handleSearch} />

            {/* Header / Toggle */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {isOpen && <h2 className="text-lg font-semibold">Chats</h2>}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* New Chat Button */}
            <button
                onClick={handleNewChat}
                className="m-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg"
            >
                <Plus size={18} />
                {isOpen && "New Chat"}
            </button>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto px-2 space-y-1">
                {filtered.map((chat) => (
                    <div
                        key={chat.id}
                        className="p-2  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded cursor-pointer"
                    >
                        {isOpen ? chat.title : chat.title.charAt(0)}
                    </div>
                ))}
            </div>


            {/* Footer */}
            <div className="relative border-t border-gray-700 p-3 flex flex-row justify-between items-center">
                {isOpen && (
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                        Welcome, {user} 🎉
                    </span>
                )}


                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="px-3 py-1 rounded bg-gray-200  text-sm text-black dark:text-white mr-2"
                >
                    {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                </button>

                {/* Profile dropdown toggle */}
                <MoreVertOutlinedIcon
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="cursor-pointer"
                />
                {showProfileDropdown && <ProfileDropdown />}
            </div>


        </div>
    );
}
