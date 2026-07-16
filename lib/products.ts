export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "BFP-FIC-001",
    sku: "BFP-FIC-001",
    name: "The Crimson Cipher",
    shortDesc: "A fast-paced international thriller involving a stolen artifact and a deadly secret society.",
    fullDesc: "Dive into an explosive mystery. When a cryptographer uncovers a hidden message in a centuries-old manuscript, she becomes the target of an underground syndicate. Formatted perfectly for Kindle, Apple Books, and PDF reading.",
    price: 8.99,
    category: "Fiction & Thriller",
    image: "/products/crimson-cipher.jpg"
  },
  {
    id: "BFP-BUS-001",
    sku: "BFP-BUS-001",
    name: "Startup Scaling Secrets",
    shortDesc: "The ultimate guide to taking your business from zero to $1 million in revenue.",
    fullDesc: "Stop guessing and start growing. This comprehensive ebook breaks down the exact marketing funnels, hiring strategies, and financial models used by today's fastest-growing startups. Includes actionable templates.",
    price: 14.99,
    category: "Business & Entrepreneurship",
    image: "/products/startup-scaling-secrets.jpg"
  },
  {
    id: "BFP-SLF-001",
    sku: "BFP-SLF-001",
    name: "Mindful Mornings",
    shortDesc: "Transform your day with a science-backed morning routine.",
    fullDesc: "Win your morning, win your day. Learn how to eliminate snooze-button guilt, establish a 15-minute meditation practice, and boost your daily productivity without burning out.",
    price: 11.50,
    category: "Self-Help",
    image: "/products/mindful-mornings.jpg"
  },
  {
    id: "BFP-SCI-001",
    sku: "BFP-SCI-001",
    name: "Echoes of the Void",
    shortDesc: "An award-winning sci-fi epic spanning three solar systems.",
    fullDesc: "Earth is gone. Follow the last human fleet as they navigate hostile alien territories and internal political betrayals in search of a new home. A sweeping space opera.",
    price: 9.99,
    category: "Sci-Fi & Fantasy",
    image: "/products/echoes-of-the-void.jpg"
  },
  {
    id: "BFP-BUS-002",
    sku: "BFP-BUS-002",
    name: "The Art of Digital Negotiation",
    shortDesc: "Master the psychology of deal-making over email, Zoom, and Slack.",
    fullDesc: "Remote work has changed how we negotiate. Learn how to read digital cues, draft persuasive emails, and close high-stakes deals without ever meeting face-to-face.",
    price: 16.00,
    category: "Business & Career",
    image: "/products/digital-negotiation.jpg"
  },
  {
    id: "BFP-SLF-002",
    sku: "BFP-SLF-002",
    name: "Minimalist Living Masterclass",
    shortDesc: "Declutter your physical space to free your mental space.",
    fullDesc: "A practical, room-by-room guide to living with less. Discover proven methods to organize your home, simplify your wardrobe, and reduce daily anxiety through minimalism.",
    price: 12.99,
    category: "Self-Help",
    image: "/products/minimalist-living.jpg"
  },
  {
    id: "BFP-FIC-002",
    sku: "BFP-FIC-002",
    name: "Whispers in the Highlands",
    shortDesc: "A sweeping historical romance set against the backdrop of the Scottish rebellions.",
    fullDesc: "Love, loyalty, and betrayal. When an English aristocrat is rescued by a Scottish rebel, a dangerous romance ignites that could alter the course of a nation's history.",
    price: 7.99,
    category: "Fiction & Romance",
    image: "/products/whispers-highlands.jpg"
  },
  {
    id: "BFP-EDU-001",
    sku: "BFP-EDU-001",
    name: "Python for Absolute Beginners",
    shortDesc: "Learn to code in Python with this step-by-step, interactive guide.",
    fullDesc: "Launch your tech career today. This ebook takes you from writing your first line of code to building fully functional web scrapers and automation scripts in just 30 days.",
    price: 18.99,
    category: "Education & Tech",
    image: "/products/python-beginners.jpg"
  },
  {
    id: "BFP-NON-001",
    sku: "BFP-NON-001",
    name: "The Plant-Based Athlete",
    shortDesc: "75 high-protein vegan recipes for peak performance.",
    fullDesc: "Fuel your workouts with plants. Written by a certified sports nutritionist, this digital cookbook provides meal plans, prep strategies, and delicious recipes designed for active lifestyles.",
    price: 14.50,
    category: "Non-Fiction & Lifestyle",
    image: "/products/plant-based-athlete.jpg"
  },
  {
    id: "BFP-SCI-002",
    sku: "BFP-SCI-002",
    name: "Shadows of the Crown",
    shortDesc: "A dark fantasy novel filled with magic, assassins, and royal intrigue.",
    fullDesc: "Magic has a price. Follow a young assassin forced to protect the very prince she was hired to kill in a kingdom teetering on the edge of a magical war.",
    price: 8.50,
    category: "Sci-Fi & Fantasy",
    image: "/products/shadows-of-the-crown.jpg"
  },
  {
    id: "BFP-BUS-003",
    sku: "BFP-BUS-003",
    name: "Financial Independence 101",
    shortDesc: "A beginner's roadmap to investing, saving, and retiring early.",
    fullDesc: "Take control of your financial future. This plain-English guide demystifies index funds, 401(k)s, and real estate investing to help you build a sustainable wealth portfolio.",
    price: 15.00,
    category: "Business & Finance",
    image: "/products/financial-independence.jpg"
  },
  {
    id: "BFP-NON-002",
    sku: "BFP-NON-002",
    name: "The Resilient Child",
    shortDesc: "Modern parenting strategies for raising emotionally intelligent kids.",
    fullDesc: "Navigate the complexities of parenting in the digital age. Learn how to foster open communication, set healthy screen-time boundaries, and build lasting resilience in your children.",
    price: 13.99,
    category: "Non-Fiction & Lifestyle",
    image: "/products/resilient-child.jpg"
  },
  {
    id: "BFP-BUS-004",
    sku: "BFP-BUS-004",
    name: "Mastering SEO in 2026",
    shortDesc: "Rank higher, drive traffic, and dominate Google search results.",
    fullDesc: "Stay ahead of the algorithm. This advanced marketing guide covers technical SEO, link-building outreach, and AI-driven content strategies for modern websites.",
    price: 19.99,
    category: "Business & Marketing",
    image: "/products/seo-2026.jpg"
  },
  {
    id: "BFP-FIC-003",
    sku: "BFP-FIC-003",
    name: "Poetry of the Concrete",
    shortDesc: "A breathtaking collection of modern urban poetry.",
    fullDesc: "Raw, emotional, and unapologetic. This collection explores the themes of isolation, love, and ambition in the modern city landscape.",
    price: 6.99,
    category: "Literature & Poetry",
    image: "/products/poetry-of-the-concrete.jpg"
  },
  {
    id: "BFP-BUS-005",
    sku: "BFP-BUS-005",
    name: "Freelance Freedom",
    shortDesc: "How to quit your 9-to-5 and build a six-figure freelance business.",
    fullDesc: "Turn your skills into a profitable independent career. Learn how to pitch high-paying clients, set profitable rates, and manage your time as a successful freelancer.",
    price: 14.99,
    category: "Business & Career",
    image: "/products/freelance-freedom.jpg"
  },
];