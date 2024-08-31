
import AnimatedBackground from "@/components/BackgroundAnimated";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import Work from "@/components/Work"
import Projects from "@/components/Projects"
export default function Home() {
  return (

    <AnimatedBackground>
        <Header />
        <Projects />
    </AnimatedBackground>
  ); 
}
