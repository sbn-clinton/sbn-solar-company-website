import Hero from "@/components/Hero";
import OurProjects from "@/components/OurProjects";
import OurTestimonials from "@/components/OurTestimonials";

const ProductPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-2.jpg"
        section="Our Products"
        desc="We offer a wide range of solar products and services to help you harness the power of the sun and make your business more sustainable."
      />
      <OurProjects />
      <OurTestimonials />
    </div>
  );
};

export default ProductPage;
