import React from "react";

function WhoCanApply() {
  return (
    <section className="section">
      <div className="section-title">Who Can Apply?</div>
      <h3>Eligibility</h3>
      <ul>
        <li>
          <b>Students:</b>
          <ul>
            <li>Must be enrolled in a recognized institution in the UK, US, Korea, or eligible American country</li>
            <li>Must upload valid student ID or proof</li>
          </ul>
        </li>
        <li>
          <b>Business Owners:</b>
          <ul>
            <li>Must provide valid business registration (in English or certified translation)</li>
          </ul>
        </li>
      </ul>
      <h3>Registration Fee</h3>
      <ul>
        <li><b>$50 flat fee</b></li>
        <li>Covered by Microsoft if you're a student or business owner</li>
      </ul>
    </section>
  );
}

export default WhoCanApply;