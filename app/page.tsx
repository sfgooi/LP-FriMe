import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import MutualYes from "@/components/MutualYes";
import Solution from "@/components/Solution";
import FifteenMinutes from "@/components/FifteenMinutes";
import Weekend from "@/components/Weekend";
import AiPlan from "@/components/AiPlan";
import Safety from "@/components/Safety";
import Maker from "@/components/Maker";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      {/* Hero area — Nav + Hero fit in one viewport */}
      <div
        style={{
          backgroundColor: "var(--cream)",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Nav />
        <Hero />
      </div>

      {/* Main content — alternating sections */}
      <Problem />
      <Solution />
      <FifteenMinutes />
      <MutualYes />
      <Weekend />
      <AiPlan />
      <Safety />
      <Maker />
      <Cta source="mid" />
      <Faq />
      <Cta source="end" />
      <Footer />
    </main>
  );
}
