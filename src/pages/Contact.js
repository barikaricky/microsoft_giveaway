import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({...f, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend/email service
    alert("Message sent! (Demo)");
  };

  return (
    <section className="section" style={{ maxWidth: 500 }}>
      <div className="section-title">Contact Us</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" required value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input name="subject" type="text" required value={form.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows={5} required value={form.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: "1.5rem", color: "#555" }}>
        <b>Alternative Contact:</b>
        <div>
          Email: <a href="mailto:support@empower.microsoft.com">support@empower.microsoft.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;