# Microsoft Empower Giveaway Portal

A professional React web application for the Microsoft Empower Giveaway, designed to support students and business owners in select countries with free access to Microsoft resources, sponsorship, and global visibility.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Eligibility](#eligibility)
- [Supported Countries](#supported-countries)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Overview
The Microsoft Empower Giveaway Portal is a modern, responsive web application that enables students and business owners to register for Microsoft-sponsored benefits. The portal provides information about the campaign, eligibility, FAQs, and a simple registration process.

## Features
- **Home Page:** Highlights the giveaway and its benefits for students and business owners.
- **About:** Details about the campaign and sponsorship.
- **Who Can Apply:** Eligibility criteria for applicants.
- **Register:** Registration form with document upload and eligibility logic.
- **FAQ:** Frequently asked questions.
- **Contact:** Contact form for inquiries.
- **Responsive Design:** Works on desktop and mobile devices.

## Eligibility
- **Students:**
  - Must be enrolled in a recognized institution in the UK, US, Korea, or eligible American country.
  - Must upload valid student ID or proof.
- **Business Owners:**
  - Must provide valid business registration (in English or certified translation).
- **Registration Fee:** $50 (covered by Microsoft for eligible students and business owners).

## Supported Countries
- United Kingdom
- United States
- Korea
- Argentina
- Brazil
- Chile
- Colombia
- Mexico
- Other eligible American countries

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd microsoft_giveaway
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Available Scripts
- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.

## Project Structure
```
src/
  App.js            # Main application component
  index.js          # Entry point
  index.css         # Global styles
  components/
    Navbar.js       # Navigation bar
    Footer.js       # Footer
  pages/
    Home.js         # Home page
    About.js        # About the giveaway
    WhoCanApply.js  # Eligibility information
    Register.js     # Registration form
    FAQ.js          # Frequently asked questions
    Contact.js      # Contact form
```

## License
This project is licensed under the MIT License.

---
*This site is part of a Microsoft student partnership project. For more information, see the About page or contact us through the portal.*