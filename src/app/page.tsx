import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CarePlanSection from "@/components/CarePlanSection";
import Methodology from "@/components/Methodology";
import AntiTemplate from "@/components/AntiTemplate";
import About from "@/components/About";
import FAQSection from "@/components/FAQSection";
import ContactFunnel from "@/components/ContactFunnel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-200">

      <PromoBanner />
      <Navbar />
      <Hero />
      <StatsBar />
      <ProjectsShowcase />
      <Services />
      <Pricing />
      <CarePlanSection />
      <Methodology />
      <AntiTemplate />
      <About />
      <FAQSection />
      <ContactFunnel />
      <Footer />
    </main>
  );
}
