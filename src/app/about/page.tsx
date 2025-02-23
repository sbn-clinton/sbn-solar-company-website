import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Statistics from "@/components/Statistics";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-1.jpg"
        section="About Us"
        desc="We are a solar company that provides solar panels, solar systems, and solar energy systems to the renewable energy industry. We offer a wide range of solar products and services to help you harness the power of the sun and make your business more sustainable."
      />
      <Statistics />
      <AboutUs />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
