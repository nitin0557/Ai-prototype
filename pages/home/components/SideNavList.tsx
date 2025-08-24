import { useCallback, useState } from "react";
import {
    Home,
    LayoutDashboard,
    Store,
    BarChart,
    CreditCard,
    Settings,
    HelpCircle,
    ChevronDown,
} from "lucide-react";
import { sidebarMenu } from "@/pages/home/constants";
import Link from "next/link";

const icons = {
    home: Home,
    layout: LayoutDashboard,
    store: Store,
    bar: BarChart,
    credit: CreditCard,
    settings: Settings,
    help: HelpCircle,
};

export default function SideNavList() {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = useCallback((title: string) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    }, []);

    return (
        <div className="h-screen w-64 bg-gray-100 p-4 flex flex-col shadow-md bg-customLight dark:bg-customDark dark:text-white">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">B</span>
                </div>
                <span className="font-semibold text-lg">Bitstore</span>
            </div>

            {/* Nav Menu */}
            <nav className="flex-1 space-y-2">
                {sidebarMenu.map((item, idx) => {
                    const Icon = icons[item.icon as keyof typeof icons] || Home;
                    const hasChildren = item.children && item.children.length > 0;
                    const isOpen = openMenus[item.title];

                    return (
                        <div key={idx}>
                            <button
                                onClick={() => hasChildren && toggleMenu(item.title)}
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 w-full text-left"
                            >
                                <div className="flex items-center space-x-2">
                                    <Icon className="h-5 w-5" />
                                    {item.link ? (
                                        <Link
                                            href={item.link}
                                            className="hover:text-black text-gray-700"
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <span>{item.title}</span>
                                    )}
                                </div>

                                {hasChildren && (
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                )}
                            </button>

                            {/* Submenu */}
                            {hasChildren && isOpen && (
                                <div className="ml-8 mt-2 space-y-1">
                                    {item.children.map((child, cIdx) => (
                                        <Link
                                            key={cIdx}
                                            href={child.link}
                                            className="block p-2 rounded-md hover:bg-gray-200 text-sm text-gray-700"
                                        >
                                            {child.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}
