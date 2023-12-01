import Navbar from "../components/Navbar";
import VolunteerButton from "../components/VolunteerButton";
import asset1 from "../assets/box1.jpeg";
import asset2 from "../assets/box3.jpeg";
import asset3 from "../assets/img8.png";
function About() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "95%",
          backgroundColor: "white",
          marginTop: "140px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          margin: "140px auto 0",
          borderRadius: "13px",
          boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="contain" style={{ width: "100%" }}>
          <div className="row" style={{ display: "flex" }}>
            <div className="col-6" style={{ width: "50%" }}>
              <img
                src="https://cdn.givind.org/static/images/campaign/target-image1.jpg"
                alt=""
                style={{
                  maxHeight: "100%",
                  borderRadius: "13px 0 0 0",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div
              className="col-6"
              style={{
                display: "inline-block",
                padding: "120px 80px 30px",
                width: "50%",
                verticalAlign: "middle",
                textAlign: "justify",
                alignItems: "center",
              }}
            >
              <h2>Our Mission</h2>
              <span style={{ width: "70%" }}>
                At ShareABite, we are driven by a singular mission – to reduce
                food waste and contribute to a more sustainable future. Our
                mission is to bridge the gap between surplus food and those in
                need, cultivating a community where waste is minimized, and no
                one goes hungry.
              </span>
            </div>
          </div>
          <div className="row" style={{ display: "flex" }}>
            <div
              className="col-6"
              style={{
                display: "inline-block",
                padding: "120px 80px 30px",
                width: "50%",
                verticalAlign: "middle",
                textAlign: "justify",
                alignItems: "center",
              }}
            >
              <h2>Our Vision</h2>
              <span style={{ width: "70%" }}>
                "Our vision at ShareABite, is a world where leftover food
                transforms into a valuable resource, nurturing communities and
                preserving the environment. We see a future where individuals,
                businesses, and communities collaborate seamlessly to
                efficiently rescue and redistribute surplus food."
              </span>
            </div>
            <div className="col-6 " style={{ width: "50%" }}>
              <img
                src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
                alt=""
                style={{
                  maxHeight: "100%",
                  borderRadius: "0 0 13px 0",
                  verticalAlign: "middle",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "50px 0", padding: "30px 500px" }}>
        <h1>How We Help</h1>
        <br />
        <span>
          Getting the food to neighborhood organizations that assist those in
          need is, in our opinion, one of the best ways to minimize food waste
          because it guarantees that the food will be utilized where it is most
          needed.
        </span>
      </div>
      <div
        style={{
          margin: "50px 0",
          padding: "0 200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "420px",
            width: "370px",
            backgroundColor: "white",
            borderRadius: "20px",
            margin: "0 15px",
            boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={asset1}
            alt=""
            style={{ height: "180px", width: "180px", marginTop: "50px" }}
          />
          <h2>Donate Food</h2>
          <span style={{ width: "70%", padding: "0 15px", margin: "10px 0" }}>
            Reduce food waste and make a difference through donations.
          </span>
        </div>
        <div
          style={{
            height: "420px",
            width: "370px",
            backgroundColor: "white",
            borderRadius: "20px",
            margin: "0 15px",
            boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={asset2}
            alt=""
            style={{ height: "180px", width: "180px", marginTop: "50px" }}
          />

          <h2>Rescue Food</h2>
          <span style={{ width: "70%", padding: "0 15px" }}>
            "Rescue food and extend a lifeline to those in need."
          </span>
        </div>
        <div
          style={{
            height: "420px",
            width: "370px",
            backgroundColor: "white",
            borderRadius: "20px",
            margin: "0 15px",
            boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={asset3}
            alt=""
            style={{ height: "180px", width: "180px", marginTop: "50px" }}
          />

          <h2>Community Sustenance</h2>
          <span style={{ width: "70%" }}>"Feeding Those in Need."</span>
        </div>
      </div>
      <div
        style={{
          margin: "50px 0",
          padding: "0 200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VolunteerButton />
      </div>
      <div
        style={{ width: "100%", height: "250px", backgroundColor: "black" }}
      ></div>
    </>
  );
}
export default About;
