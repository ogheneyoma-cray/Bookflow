export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: string;
};

export const products: Product[] = [
  {
    id: "EDX-DEV-01",
    sku: "EDX-DEV-01",
    name: "Full-Stack Web Dev Bootcamp",
    shortDesc: "Master HTML, CSS, React, and Node.js.",
    fullDesc: "A comprehensive 60-hour video course taking you from absolute beginner to job-ready full-stack developer. Includes real-world projects, source code, and a certificate of completion.",
    price: 149.00,
    category: "Programming"
  },
  {
    id: "EDX-DSG-01",
    sku: "EDX-DSG-01",
    name: "UI/UX Design Masterclass",
    shortDesc: "Learn Figma, wireframing, and user research.",
    fullDesc: "Discover the principles of user interface and user experience design. Over 40 hours of content covering design thinking, prototyping in Figma, and building a professional portfolio.",
    price: 129.00,
    category: "Design"
  },
  {
    id: "EDX-MKT-01",
    sku: "EDX-MKT-01",
    name: "Digital Marketing Fundamentals",
    shortDesc: "SEO, SEM, and Social Media strategies.",
    fullDesc: "Learn how to drive traffic and convert leads. This course covers SEO optimization, Google Ads, Facebook marketing, and email campaign strategies for modern businesses.",
    price: 99.00,
    category: "Marketing"
  },
  {
    id: "EDX-DAT-01",
    sku: "EDX-DAT-01",
    name: "Python for Data Science",
    shortDesc: "Analyze data with Pandas, NumPy, and Matplotlib.",
    fullDesc: "Dive deep into data manipulation and visualization using Python. Perfect for beginners looking to enter the high-demand field of data science and analytics.",
    price: 139.00,
    category: "Data Science"
  },
  {
    id: "EDX-BUS-01",
    sku: "EDX-BUS-01",
    name: "Agile Project Management",
    shortDesc: "Master Scrum and Agile methodologies.",
    fullDesc: "Learn how to lead teams and deliver projects faster. This course prepares you for foundational Agile certifications and includes practical Jira software tutorials.",
    price: 89.00,
    category: "Business"
  },
  {
    id: "EDX-DEV-02",
    sku: "EDX-DEV-02",
    name: "Advanced React.js Patterns",
    shortDesc: "Build scalable frontend applications.",
    fullDesc: "For developers who know the basics. Learn advanced hooks, state management with Redux, and performance optimization techniques to build enterprise-grade React apps.",
    price: 119.00,
    category: "Programming"
  },
  {
    id: "EDX-MKT-02",
    sku: "EDX-MKT-02",
    name: "Freelance Copywriting Guide",
    shortDesc: "Turn words into a profitable online business.",
    fullDesc: "Step-by-step guide to writing high-converting sales pages, emails, and ads. Includes templates, client acquisition strategies, and pricing frameworks.",
    price: 79.00,
    category: "Marketing"
  },
  {
    id: "EDX-DAT-02",
    sku: "EDX-DAT-02",
    name: "Machine Learning A-Z",
    shortDesc: "Build predictive models with Python.",
    fullDesc: "Learn to create machine learning algorithms from scratch. Covers regression, classification, clustering, and deep learning basics using Scikit-Learn and TensorFlow.",
    price: 159.00,
    category: "Data Science"
  },
  {
    id: "EDX-DSG-02",
    sku: "EDX-DSG-02",
    name: "Graphic Design Bootcamp",
    shortDesc: "Photoshop, Illustrator, and InDesign mastery.",
    fullDesc: "The ultimate guide to Adobe Creative Cloud. Create stunning logos, typography, and layout designs with hands-on projects and professional feedback techniques.",
    price: 119.00,
    category: "Design"
  },
  {
    id: "EDX-BUS-02",
    sku: "EDX-BUS-02",
    name: "Financial Modeling for Startups",
    shortDesc: "Build robust financial projections.",
    fullDesc: "Learn how to model revenue, forecast expenses, and prepare financial statements to pitch investors. Ideal for entrepreneurs and startup founders.",
    price: 149.00,
    category: "Business"
  },
  {
    id: "EDX-DEV-03",
    sku: "EDX-DEV-03",
    name: "iOS App Development",
    shortDesc: "Build Apple apps using Swift and Xcode.",
    fullDesc: "Create your first iOS application. This course covers Swift programming, user interface design in Xcode, and how to publish your app on the Apple App Store.",
    price: 139.00,
    category: "Programming"
  },
  {
    id: "EDX-MKT-03",
    sku: "EDX-MKT-03",
    name: "Social Media Branding",
    shortDesc: "Grow your audience on Instagram & TikTok.",
    fullDesc: "Master the algorithms. Learn content creation strategies, personal branding, and how to monetize your following across major social platforms.",
    price: 69.00,
    category: "Marketing"
  },
  {
    id: "EDX-DAT-03",
    sku: "EDX-DAT-03",
    name: "SQL for Business Intelligence",
    shortDesc: "Query databases and extract insights.",
    fullDesc: "Master SQL syntax, complex joins, and database design. Learn how to connect SQL databases to Tableau for powerful business intelligence dashboards.",
    price: 99.00,
    category: "Data Science"
  },
  {
    id: "EDX-BUS-03",
    sku: "EDX-BUS-03",
    name: "Leadership Communication",
    shortDesc: "Speak confidently and lead effectively.",
    fullDesc: "Enhance your public speaking, active listening, and conflict resolution skills. Essential training for new managers and aspiring corporate leaders.",
    price: 79.00,
    category: "Business"
  },
  {
    id: "EDX-DSG-03",
    sku: "EDX-DSG-03",
    name: "Video Editing with Premiere Pro",
    shortDesc: "Edit like a professional creator.",
    fullDesc: "Learn cutting, color grading, audio mixing, and motion graphics integration in Adobe Premiere Pro. Start editing YouTube videos, films, and commercials.",
    price: 109.00,
    category: "Design"
  },
];