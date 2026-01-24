import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Package, LogOut, CircleUser } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";
import logo from "../../../public/shopnestlogo.png";

export default function Nav() {
  const { pathname } = useLocation();
  const { cartCountNum } = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <img
              src={logo}
              width={"70px"}
              height={"70px"}
              alt="shopNest-logo"
              className="object-cover w-17.5 h-17.5"
            />
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/" && "bg-accent"
                  }`}
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/products" && "bg-accent"
                  }`}
                >
                  <Link to="/products">Products</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Link to="/cart" className="rounded-md p-2 hover:bg-muted">
              <div className="relative">
                <ShoppingCart className="h-5 w-5 " />
                <div className=" absolute w-4 h-4 rounded-full -top-2 -right-2 bg-red-600 text-xs flex items-center justify-center text-white">
                  {cartCountNum ?? 0}
                </div>
              </div>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-md p-2 hover:bg-muted">
                  <User className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="flex items-center gap-2">
                    <CircleUser className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    My Orders
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
