import SidebarAdmin from "@/components/sidebar-admin";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <header className="h-90 w-full bg-red-500">t</header> */}
      <SidebarProvider>
        <SidebarAdmin />
        <main className="h-full w-full">
          <SidebarTrigger className="fixed m-4" />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
