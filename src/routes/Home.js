import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import background from "../assets/img6";
import image from "../assets/img1";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={background}
        heroimg={image}
        title="Better Feed Than Waste"
        text="NO ONE CAN DO EVERYTHING, BUT EVERYONE CAN DO SOMETHING."        
      />
    <Footer />

    </>
  );
}
export default Home;
