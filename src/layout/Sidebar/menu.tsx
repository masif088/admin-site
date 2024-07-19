import { sidebarMenuType } from "Types/LayoutDataType";

export const MenuList: sidebarMenuType[] = [
  {
    title: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      // {
      //   title: "Dashboards",
      //   id: 1,
      //   icon: "home",
      //   pathSlice: "dashboard",
      //   type: "sub",
      //   badge: "badge badge-light-primary",
      //   badgetxt: "8",
      //   children: [
      //     { path: "/dashboard/default", title: "Default", type: "link" },
      //     { path: "/dashboard/e-commerce", title: "Ecommerce", type: "link" },
      //     {
      //       path: "/dashboard/online-course",
      //       title: "Online Course",
      //       type: "link",
      //     },
      //     { path: "/dashboard/crypto", title: "Crypto", type: "link" },
      //     { path: "/dashboard/social", title: "Social", type: "link" },
      //     { path: "/dashboard/nft", title: "NFT", type: "link" },
      //     {
      //       path: "/dashboard/school-management",
      //       title: "School Management",
      //       type: "link",
      //     },
      //     { path: "/dashboard/pos", title: "POS", type: "link" },
      //   ],
      // },
      {
        path: "dashboard",
        icon: "home",
        type: "link",
        active: false,
        title: "Dashboard",
      },
      {
        title: "Widgets",
        id: 2,
        icon: "widget",
        pathSlice: "widgets",
        type: "sub",
        active: false,
        children: [
          { path: "/widgets/general", title: "General", type: "link" },
          { path: "/widgets/chart", title: "Chart", type: "link" },
        ],
      },
    ],
  },
];
