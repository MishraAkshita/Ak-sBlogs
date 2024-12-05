import React from 'react';
import './Newsletter.css';

const newsletters = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Explore the trends shaping the web development industry in 2024.",
    date: "1 Dec 2024",
  },
  {
    id: 2,
    title: "AI in Everyday Life",
    description: "Discover how AI is revolutionizing daily tasks and industries.",
    date: "24 Nov 2024",
  },
  {
    id: 3,
    title: "10 Productivity Hacks for Developers",
    description: "Tips to boost your coding efficiency and manage time effectively.",
    date: "10 Nov 2024",
  },
  // Add more newsletters as needed
];

const Newsletter = () => {
  return (
    <div className="newsletter-page">
      <header className="newsletter-header">
        <h1>Stay Updated with Our Newsletter</h1>
        <p>Get the latest updates, trends, and insights directly to your inbox.</p>
      </header>

      <section className="subscription-section">
        <h2>Subscribe Now</h2>
        <form className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
        <p className="disclaimer">We respect your privacy. Unsubscribe anytime.</p>
      </section>

      <section className="recent-newsletters">
        <h2>Recent Newsletters</h2>
        <div className="newsletter-list">
          {newsletters.map((item) => (
            <div key={item.id} className="newsletter-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="newsletter-date">{item.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
