import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import background from "../assets/img5";
import CheckboxForm from "../components/Foodform";
import Footer from '../components/Footer';


function Donate() {
  return (
    <>
      <Navbar />
      <Hero


cName="Hero"
        heroImg={background}
        title=""
        text=<CheckboxForm/>
        buttonText=""
        url=""
        btnClass=""
      />
    <Footer />
      
    </>
  );
}
export default Donate;
