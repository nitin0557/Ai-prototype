import React, {useCallback, useState} from "react";

type Props = {
    onSearch: (query: string) => void;
};

export default function SearchList({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    },[]);

    return (
        <div className="p-3 ">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search chats..."
                className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md
               text-sm bg-white dark:bg-sideNavDark text-gray-900 dark:text-white
               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
}
