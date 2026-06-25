import "./Contact.css";

function Contact() {
return ( <section className="contact-section"> <h1>Contact Us</h1>

```
  <div className="contact-container">

    <div className="contact-info">

      <div className="contact-card">
        <h2>📍 Address</h2>
        <p>Near Farhan Juice Corner, Batla House, New Delhi - 110025</p>
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
        <p>Monday - Saturday : 9 AM - 8 PM</p>
        <p>Sunday : Closed</p>
      </div>

    </div>

    <div className="contact-map">
      <a
        href="https://maps.google.com/?q=Farhan+Juice+Corner+Batla+House+New+Delhi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <iframe
          title="Clinic Location"
          src="https://maps.google.com/maps?q=Farhan%20Juice%20Corner%20Batla%20House%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </a>
    </div>

  </div>
</section>


);
}

export default Contact;
