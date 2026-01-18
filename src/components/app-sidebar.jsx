import {
  Boxes,
  Command,
  LayoutDashboard,
  Logs,
  PackagePlus,
  Truck,
} from "lucide-react";

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
            <SidebarMenuButton size="lg">
              <Link to={"/"} className="flex gap-1.5 items-center">
                <span
                  className={`text-lg bg-primary text-white p-1 rounded-lg`}
                >
                  SN
                </span>
                <span className={` font-bold text-primary`}>ShopNest</span>
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
