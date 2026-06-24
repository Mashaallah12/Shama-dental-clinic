import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h1>Contact Us</h1>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <h2>📍 Address</h2>
            <p>123 Main Street, City, Country</p>
          </div>

          <div className="contact-card">
            <h2>📞 Phone</h2>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h2>✉ Email</h2>
            <p>info@shamadentalclinic.com</p>
          </div>

          <div className="contact-card">
            <h2>🕒 Working Hours</h2>
            <p>Mon - Sat : 9 AM - 8 PM</p>
            <p>Sunday : Closed</p>
          </div>

        </div>

        <div className="contact-map">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Hyderabad&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;