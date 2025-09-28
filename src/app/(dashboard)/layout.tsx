import SidebarDashboard from "@/components/template/sidebar-dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <header className="h-90 w-full bg-green-500">t</header> */}
      <SidebarProvider>
        <SidebarDashboard />
        <main className="h-full w-full">
          <SidebarTrigger className="fixed m-4" />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
