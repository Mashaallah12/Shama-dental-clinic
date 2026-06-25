import "./ClinicIntro.css";
import heroImage from "../assets/img.png";

function ClinicIntro() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Healthy Smile, Happy Life</h1>

        <h2>Welcome to Shama Dental Clinic</h2>

        <p>
          Providing quality dental care with modern technology and a
          compassionate approach. We help you achieve a healthy and
          confident smile.
        </p>

        <ul className="hero-list">
          <li>✔ Experienced Dentists</li>
          <li>✔ Modern Equipment</li>
          <li>✔ Emergency Dental Care</li>
          <li>✔ Affordable Treatments</li>
        </ul>

        <div className="hero-buttons">
          <button className="book-btn">Book Appointment</button>
          <button className="call-btn">Call Now</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Lady dentist treating patient"
        />
      </div>
    </section>
  );
}

export default ClinicIntro;