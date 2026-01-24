import { Boxes, LayoutDashboard, Logs, PackagePlus, Truck } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/shopnestlogo.png";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/vendor/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Orders",
      url: "/vendor/orders",
      icon: Logs,
    },
    {
      title: "Create Product",
      url: "/vendor/new-product",
      icon: PackagePlus,
    },
    {
      title: "Products",
      url: "/vendor/products",
      icon: Boxes,
    },
    {
      title: "Delivery Partner",
      url: "/vendor/delivery-partner",
      icon: Truck,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="shopNest-logo"
                  className="w-12 h-12 object-contain"
                />
                <span className="font-semibold text-lg">ShopNest</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
