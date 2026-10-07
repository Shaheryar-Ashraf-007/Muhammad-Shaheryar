import About from "./page";
import GlowingDotsBackground from "./Animation";
import AboutPage from "@/app/about/page";


export default function HomeSection() {
  return (
    <div className="">
      <GlowingDotsBackground>
        <AboutPage/>
       </GlowingDotsBackground>
    </div>
  )
}

