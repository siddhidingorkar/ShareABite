import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import background from "../assets/img4";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={background}
        title="Contact Us"
        text=""
        buttonText=""
        url="/"
        btnClass=""
      />
    </>
  );
}
export default Contact;
