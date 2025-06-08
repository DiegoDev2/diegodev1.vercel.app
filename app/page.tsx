import Header from "@/components/Header";
import Landing from "@/components/Landing";
import ProjectsSection from "@/components/Projects";
import Process from "@/components/Process";
import ThingsSection from "@/components/Things";
import { LenisProvider } from "@/components/ui/LenisProvider";

export default function Home() {
  return (
    <>
      <section className="section-down blur-progressive"></section>
      <Header />
      <LenisProvider />

      <Landing />
      <ThingsSection />
      <ProjectsSection />
      <Process />
    </>
  );
}
