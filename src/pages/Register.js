import React, { useState } from "react";

const countries = [
  "United Kingdom",
  "United States",
  "Korea",
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Mexico",
  "Other"
];

function Register() {
  const [role, setRole] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    idDoc: null,
    agree: false,
    subject: "",
    message: ""
  });

  const isEligible = role === "Student" || role === "Business Owner";
  const paymentStatus = isEligible ? "Free" : "$50 (PayPal/Stripe)";

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : (type === "checkbox" ? checked : value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend and payment
    alert("Registration submitted! (Demo)");
  };

  return (
    <section className="section" style={{ maxWidth: 500 }}>
      <div className="section-title">Registration</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" type="text" required value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" required value={form.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Select Role</label>
          <select name="role" required value={role} onChange={e => setRole(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="Student">Student</option>
            <option value="Business Owner">Business Owner</option>
            <option value="General Public">General Public</option>
          </select>
        </div>
        {(role === "Student" || role === "Business Owner") && (
          <div className="form-group">
            <label>
              {role === "Student" ? "Upload Student ID/Proof" : "Upload Business Registration Document"}
              <span style={{color:"#888"}}> (PDF/JPG)</span>
            </label>
            <input type="file" name="idDoc" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleChange} />
          </div>
        )}

        <div className="form-group">
          <label>Payment Status</label>
          <input type="text" value={paymentStatus} disabled readOnly />
        </div>

        <div className="form-checkbox">
          <input type="checkbox" name="agree" checked={form.agree} required onChange={handleChange} />
          <span>
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">terms</a> and Microsoft’s <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>
          </span>
        </div>

        <button type="submit">Complete Registration</button>
      </form>
    </section>
  );
}

export default Register;