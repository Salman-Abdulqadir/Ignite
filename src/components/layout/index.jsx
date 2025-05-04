import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="m-4 flex flex-col h-full">
          <SidebarTrigger className="bg-background sticky top-4" />
          <section className="flex flex-col flex-1 p-3">
            <Outlet />
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
