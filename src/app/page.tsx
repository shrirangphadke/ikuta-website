import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import HeritageStrip from "@/components/home/heritage-strip";
import IndiaOperations from "@/components/home/india-operations";
import Products from "@/components/home/products";
import Industries from "@/components/home/industries";
import WhyUs from "@/components/home/why-us";
import ContactCTA from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <HeritageStrip />

      <IndiaOperations />

      <Products />

      <Industries />

      <WhyUs />

      <ContactCTA />

      <Footer />
    </main>
  );
}
