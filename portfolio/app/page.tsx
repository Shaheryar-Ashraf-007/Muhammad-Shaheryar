import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-paper text-ink dark:bg-ink dark:text-paper">

      <main id="top" className="pt-16 lg:ml-[340px] lg:pt-0">
        <HomeSection />
        <Footer/>
      </main>
    </div>
  );
}