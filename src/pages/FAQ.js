import React from "react";

const faqs = [
  {
    q: "Who is eligible for free registration?",
    a: "Students and business owners from the supported countries (UK, US, Korea, and eligible American countries) with valid documents."
  },
  {
    q: "What countries are included?",
    a: "United Kingdom, United States, Korea, Argentina, Brazil, Chile, Colombia, Mexico, and other eligible American countries."
  },
  {
    q: "How do I know my registration was successful?",
    a: "You will receive an email confirmation at the address you provided during registration."
  },
  {
    q: "Is this officially from Microsoft?",
    a: "Yes, this giveaway is sponsored by the Microsoft Global Outreach Team."
  },
  {
    q: "Will Microsoft contact me directly?",
    a: "Yes, Microsoft will contact you via the email address you registered with."
  }
];

function FAQ() {
  return (
    <section className="section">
      <div className="section-title">Frequently Asked Questions</div>
      <ul style={{ maxWidth: 700, margin: "0 auto" }}>
        {faqs.map((f, i) => (
          <li key={i} style={{marginBottom: '1.2rem'}}>
            <b>Q: {f.q}</b>
            <div>A: {f.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;