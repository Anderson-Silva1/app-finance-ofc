import { Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";

// Menu items.
const items = [
  {
    title: "Admin",
    url: "/admin",
    icon: Home,
  },
];

const SidebarAdmin = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex">
        <div className="flex items-center justify-between">
          <div className="h-16 w-16 bg-blue-500">logo</div>
          <ModeToggle />
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default SidebarAdmin;
