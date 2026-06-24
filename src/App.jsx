import Navbar from "./components/Navbar";
import ClinicIntro from "./components/ClinicIntro";
import AboutDoctor from "./components/AboutDoctor";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <ClinicIntro />
      </section>

      <section id="about">
        <AboutDoctor />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;