# Sonita - Modern Bento Portfolio Website

A pixel-perfect, ultra-modern portfolio website created for **Sonita (IT Student & Digital Marketer)**, faithfully recreating the design template with modern responsive web standards, fluid animations, and rich interactive features.

---

## 🌟 Key Features & Sections

1. **Header & Navigation**:
   - Distinctive brand logo: `Sonita.` with signature purple accent dot.
   - Smooth-scrolling navigation links: `Home`, `About`, `Services`, `Projects`, `Blog`, `Contact`.
   - Primary `Let's Talk ->` action button with contact modal trigger.
   - Mobile responsive drawer menu with hamburger toggle.

2. **Hero Showcase**:
   - Tagline: `IT Student & Digital Marketer`
   - High-impact headline: `Turn Ideas Into Real Growth`
   - Bio copy highlighting marketing, IT, and content creation.
   - Dual CTAs: `View My Work ->` and `Download CV`.
   - Real-time animated counters:
     - **10+** Projects Completed
     - **5+** Happy Clients
     - **100K+** People Reached
   - Real photo portrait with Angkor Wat background, handwritten *"Digital Marketing Enthusiast"* script, floating *"Creating Impact Through Creativity & Data"* badge, and pastel squiggle doodle.

3. **My Services**:
   - 6 custom service cards with tailored iconography and hover glow:
     - 📢 Social Media Marketing
     - 🔍 SEO Optimization
     - ✍️ Content Creation
     - 📈 Paid Advertising
     - 👥 Brand Strategy
     - 📊 Analytics & Reporting
   - `View All Services ->` modal with service deliverables breakdown.

4. **About Me**:
   - Authentic portrait card with *"IT Student with a passion for digital marketing"* badge.
   - Executive summary and technical/marketing background.
   - 4 Core Pillars:
     - 💡 **Creative** (Think out of the box)
     - 🗄️ **Data-Driven** (Make decisions with data)
     - ⚙️ **Problem Solver** (Turn challenges into opportunities)
     - 🚀 **Fast Learner** (Always eager to learn new tools)

5. **My Skills & Goal**:
   - Animated progress bars with exact percentages:
     - Social Media Marketing: 90%
     - SEO & Content Strategy: 85%
     - Paid Advertising: 80%
     - Content Creation: 85%
     - Data Analytics: 75%
     - Project Management: 80%
   - **My Goal** card in dark indigo gradient featuring 3D dart target graphic, quote, and 3 achievement pills (*More Brands Online*, *More People Reaching*, *More Opportunities Creating*).

6. **Featured Projects**:
   - 3 project showcases with mockup screens and floating tags:
     - **E-commerce Brand Growth** (`Social Media`, `Content`)
     - **Website SEO Optimization** (`SEO`, `Analytics`)
     - **TikTok Ads Campaign** (`Paid Ads`, `Creative`)
   - Interactive **Case Study Modal** that pulls in client challenges, detailed strategies, and measurable KPI results.

7. **What Clients Say**:
   - Testimonials from Sarah Nguyen (*Business Owner*) and Minh Tran (*E-commerce Founder*).
   - 5-star ratings and interactive `<` `>` slider controls.

8. **Let's Work Together (Footer Banner)**:
   - Violet-to-pink gradient banner.
   - `Get In Touch ->` button triggering contact modal.
   - Direct social links for Email, LinkedIn, Instagram, and TikTok.

---

## 🚀 How to Run Locally

You can open the site directly without any build step:

### Option 1: Direct File Opening
Double click `index.html` in Finder or run:
```bash
open index.html
```

### Option 2: Local HTTP Server (Python)
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📁 File Structure

```
portfolio/
├── index.html                   # Main HTML document with semantic structure
├── styles.css                   # Custom design system & responsive Bento CSS
├── script.js                    # Interactive modals, sliders, and counter animations
├── me.jpeg                      # Original design template
├── assets/
│   └── images/
│       ├── sonita-original.jpg  # Original high-res photograph
│       ├── hero-sonita.png      # Hero photo with feathered blurry margins
│       ├── hero-sonita.jpg      # Hero section portrait photo source
│       ├── about-sonita.jpg     # About section photo card
│       ├── screen-ecommerce-pure.jpg
│       ├── screen-seo-pure.jpg
│       ├── screen-tiktok-pure.jpg
│       ├── target-dart.png      # 3D target with arrow graphic
│       ├── sarah.jpg            # Sarah Nguyen avatar
│       └── minh.jpg             # Minh Tran avatar
└── README.md                    # Documentation
```

---

## 🌐 Deploying to the Web

The website is 100% static, fast, and SEO-friendly. You can deploy it for free in seconds:
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in Settings.
- **Vercel**: Run `npx vercel` or import from GitHub.
- **Netlify**: Drag and drop the `portfolio` folder directly into https://app.netlify.com/drop.
