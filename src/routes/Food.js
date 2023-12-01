import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CheckboxForm from "../components/Foodform"
import background from "../assets/img5";
function Food() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={background}
        title=""
        text=<CheckboxForm/>
        buttonText=""
        url="/"
        btnClass=""
      />
    </>
  );
}
export default Food;