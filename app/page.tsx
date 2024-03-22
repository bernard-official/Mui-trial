import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";
import { SideMenu } from "@/components/sideMenu";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SideMenu />
      <Dashboard />
     
    </main>
  );
}
