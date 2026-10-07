import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import { siteConfig } from "@/data/config";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const CarePlanSection = dynamic(() => import("@/components/CarePlanSection"));
const Methodology = dynamic(() => import("@/components/Methodology"));
const AntiTemplate = dynamic(() => import("@/components/AntiTemplate"));
const About = dynamic(() => import("@/components/About"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactFunnel = dynamic(() => import("@/components/ContactFunnel"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const showPlans = siteConfig.sections.plans === "VISIVEL";

  return (
    <main className="min-h-screen flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-200">

      <PromoBanner />
      <Navbar />
      <Hero />
      <StatsBar />
      <ProjectsShowcase />
      <Services />
      {showPlans && <Pricing />}
      {showPlans && <CarePlanSection />}
      <Methodology />
      <AntiTemplate />
      <About />
      <FAQSection />
      <ContactFunnel />
      <Footer />
    </main>
  );
}
