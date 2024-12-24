import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SituationSection } from "@/components/sections/SituationSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ActionsSection } from "@/components/sections/ActionsSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    console.log("Home page mounted");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-green to-earth-blue">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-white text-center animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">Protect Our Planet</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to preserve and protect Earth's precious ecosystems
            for future generations.
          </p>
          <Link
            to="/action"
            className="bg-accent-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full 
            transition-all transform hover:scale-105 inline-block"
          >
            Take Action Now
          </Link>
        </div>
      </section>

      <SituationSection />
      <NewsSection />
      <ActionsSection />
      <Footer />
    </div>
  );
};

export default Index;