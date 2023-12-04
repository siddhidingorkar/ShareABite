import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import background from "../assets/img5";
import CheckboxForm from "../components/Foodform";

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
      
    </>
  );
}
export default Donate;
