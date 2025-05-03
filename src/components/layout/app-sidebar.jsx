import {
  Home,
  FileChartColumnIncreasing,
  Globe2,
  Dice6,
  FileText,
  UserPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeChanger from "./app-theme-changer";

const items = [
  { url: "/", icon: Home, title: "Home" },
  { url: "/creators", icon: UserPen, title: "Game Creators" },
];

const Header = () => {
  return (
    <SidebarHeader>
      <Dice6 size={30} />
    </SidebarHeader>
  );
};
const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (pathname, itemUrl) => {
    if (itemUrl === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemUrl);
  };

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Tools</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              const active = isActive(location.pathname, item.url);
              return (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => navigate(item.url)}
                >
                  <SidebarMenuButton
                    asChild
                    className={`cursor-pointer ${
                      active &&
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                    }`}
                  >
                    <a>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};
const Footer = () => {
  return (
    <SidebarFooter>
      <SidebarGroup>
        <SidebarGroupLabel>Theme Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <ThemeChanger />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarFooter>
  );
};
export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <Header />
      <Content />
      <Footer />
    </Sidebar>
  );
}
