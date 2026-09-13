import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-paper text-ink dark:bg-ink dark:text-paper">
      <Sidebar />
      <Navbar/>
      <main id="top" className="pt-16 lg:ml-[340px] lg:pt-0">
        <HomeSection />
      </main>
    </div>
  );
}
