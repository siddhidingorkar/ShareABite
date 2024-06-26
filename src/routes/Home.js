import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import background from "../assets/img6";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={background}
        title="Better Feed Than Waste"
        text="NO ONE CAN DO EVERYTHING, BUT EVERYONE CAN DO SOMETHING."
        buttonText="Donate Now"
        url="/donate"
        btnClass="show"
      />
    </>
  );
}
export default Home;
