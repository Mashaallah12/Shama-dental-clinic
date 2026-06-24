import "./AboutDoctor.css";

function AboutDoctor() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600"
          alt="Doctor"
        />
      </div>

      <div className="about-content">
        <h1>About Doctor</h1>

        <h2>Dr. Shama Yasmin</h2>

        <h3>Senior Dental Surgeon</h3>

        <p>
          With over 10 years of experience, Dr. Shama Yasmin provides personalized
          dental treatments using advanced techniques and state-of-the-art
          equipment. We are committed to delivering quality dental care with
          compassion and excellence.
        </p>

        <button>Read More</button>
      </div>
    </section>
  );
}

export default AboutDoctor;