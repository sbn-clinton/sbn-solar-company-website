import Hero from "@/components/Hero";
import Ourservices from "@/components/Ourservices";
import OurTestimonials from "@/components/OurTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-3.jpg"
        section="Our Services"
        desc="We offer a wide range of solar products and services to help you harness the power of the sun and make your business more sustainable."
      />
      <Ourservices />
      <WhyChooseUs />
      <OurTestimonials />
    </div>
  );
};

export default ServicesPage;
