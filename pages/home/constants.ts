export const sidebarMenu = [
    {
        title: "Home",
        icon: "home",
        link: "/",
    },
    {
        title: "Dashboard",
        icon: "layout",
        link: "/dashboard",
    },

    {
        title: "Analytic",
        icon: "bar",
        children: [
            { title: "Traffic", link: "/traffic" },
            { title: "Earning", link: "/earning" },
        ],
    },

    {
        title: "Help And Support",
        icon: "help",
        link: "/support",
    },
];
