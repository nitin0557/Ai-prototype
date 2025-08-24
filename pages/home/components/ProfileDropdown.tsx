import React from "react";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Link from "next/link";
import { useTheme } from "next-themes";
import { useAuth } from "@/data/contexts/AuthContext"; // ✅ import your auth context

export default function ProfileDropdown () {
    const { theme, setTheme } = useTheme();
    const { logout } = useAuth(); // ✅ assuming you have a logout function in context

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const ProfieJson = [
        { icon: <Person2OutlinedIcon />, name: "Username", link: "/username" },
        { icon: <SettingsOutlinedIcon />, name: "Settings", link: "/settings" },
        { icon: <ToggleOffOutlinedIcon />, name: theme === "dark" ? "Light Mode" : "Dark Mode", action: handleToggleTheme },
        { icon: <FeedOutlinedIcon />, name: "Terms and Conditions", link: "/feed" },
        { icon: <HelpCenterOutlinedIcon />, name: "Help", link: "/help" },
        { icon: <LogoutOutlinedIcon />, name: "Logout", action: logout }, // ✅ fixed
    ];

    return (
        <div className="absolute bottom-15 left-2.5 p-4 rounded dark:border-white dark:bg-sideNavDark  dark:text-white   shadow">
            <ul>
                {ProfieJson.map((item, index) => (
                    <li
                        key={index}
                        className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        onClick={item.action ? item.action : undefined}
                    >
                        {item.icon}
                        {item.link && !item.action ? (
                            <Link href={item.link}>{item.name}</Link>
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
