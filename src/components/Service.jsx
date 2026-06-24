import "./Service.css";

function Service() {
  return (
    <section className="service-section">
      <h1>Our Services</h1>

      <div className="service-container">

        <div className="service-card">
          <h2>🦷 Teeth Cleaning</h2>
          <p>Professional cleaning for healthy teeth and gums.</p>
        </div>

        <div className="service-card">
          <h2>🦷 Root Canal Treatment</h2>
          <p>Pain-free treatment to save damaged teeth.</p>
        </div>

        <div className="service-card">
          <h2>🦷 Dental Implants</h2>
          <p>Permanent replacement for missing teeth.</p>
        </div>

        <div className="service-card">
          <h2>🦷 Teeth Whitening</h2>
          <p>Brighten your smile with advanced whitening techniques.</p>
        </div>

        <div className="service-card">
          <h2>🦷 Braces & Aligners</h2>
          <p>Correct teeth alignment for a perfect smile.</p>
        </div>

        <div className="service-card">
          <h2>🦷 Crowns & Bridges</h2>
          <p>Restore damaged or missing teeth.</p>
        </div>

      </div>
    </section>
  );
}

export default Service;