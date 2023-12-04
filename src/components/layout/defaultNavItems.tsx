import React from "react";
import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Files", 
    href: "/files",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "People", 
    href: "/people",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Services",   
    href: "/services",
    icon: <BriefcaseIcon className="w-6 h-6" />,
  },
  {
    label: "Statistics",
    href: "/statistics",
    icon: <ChartBarIcon className="w-6 h-6" />,
  },
];
