import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-3.jpg"
        section="Contact Us"
        desc="Contact us today and let's talk about your solar projects. We're here to help you make the most of your solar energy."
      />
      <ContactUs />
    </div>
  );
};

export default ContactPage;
