import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <h1>What Our Patients Say</h1>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Johnson"
          />

          <h2>Sarah Johnson</h2>

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            Excellent service and friendly staff. The treatment was painless
            and I highly recommend Shama Dental Clinic.
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Michael Smith"
          />

          <h2>Michael Smith</h2>

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            Professional doctors and modern facilities. Very satisfied with
            the treatment and care.
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Emily Davis"
          />

          <h2>Emily Davis</h2>

          <h3>⭐⭐⭐⭐⭐</h3>

          <p>
            Clean clinic, caring staff, and advanced equipment. A wonderful
            experience from start to finish.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;