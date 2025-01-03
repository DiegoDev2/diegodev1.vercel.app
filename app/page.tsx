import Header from "@/components/Header";
import Landing from "@/components/Landing";
import ThingsSection from '@/components/Things';




export default function Home() {
  return (
    <>
      <section className="section-down blur-progressive"></section>
      <Header/>
      <Landing />
      <ThingsSection />

    </>
  );
};

