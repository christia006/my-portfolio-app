import simpinImage from '../images/simpin.png'; 
import neurosortImage from '../images/neurosort.png';
import summaizeImage from '../images/summaize.png';
import wargabuatinImage from '../images/wargabuatin.png';
import insightiqImage from '../images/insightiq.png';
import skillshareImage from '../images/skillshare.png';
import bukuImage from '../images/buku.png';
import guardImage from '../images/guard.png';
import brightImage from '../images/bright.png';

export const profile = {
  name: "Christian Johannes Hutahaean",
  title: "Software Engineering & Full Stack Developer",
  email: "chutahaean372@gmail.com",
  github: "github.com/christia006",
  hackerrank: "hackerrank.com/profile/chutahaean372",
  bio: "Software Engineer & Full Stack Developer berpengalaman membangun aplikasi web end-to-end, mahir di backend (Golang, Node.js, PHP), REST API, database, serta sedang mendalami AI/ML Engineering untuk solusi berbasis data dan automasi cerdas.",
  contact: {
    phone: "+62 838 2175 1692",
    address: "Jl Danau Singkarak LK II, Binjai, North Sumatra, Indonesia",
    website: "my-portfolio-app-vpo5.vercel.app",
    linkedin: "linkedin.com/in/christian-johannes-hutahaean",
  },
  languages: ["English (Fluent)", "Bahasa Indonesia", "Batak"]
};

export const education = [
  {
    degree: "S1 Informatika",
    institution: "Institut Teknologi Del – Laguboti, Sumatera Utara",
    duration: "Sep 2023 – Present",
    gpa: "2.8 / 4.0"
  }
];

export const workExperience = [
  {
    title: "Fullstack Development Intern",
    company: "Codveda Technology",
    duration: "Jul – Aug 2025",
    description: [
      "Membangun full-stack app (MERN/MEVN) dengan JWT dan role-based access.",
      "Integrasi WebSockets (Socket.io) untuk notifikasi real-time.",
      "Mendesain GraphQL API (Apollo Server) dengan autentikasi."
    ],
  }
];

export const projects = [
  {
    title: "Simpin",
    Description: ["SimPin: backend Java 23 untuk manajemen koperasi dengan login, transaksi, night mode, dan multi-language."],
    imageUrl: simpinImage 
  },
  {
    title: "NeuroSort",
    Description: ["Local AI: scan & classify .txt/.pdf/.docx, fast contextual search, store metadata in PostgreSQL. Built with Python, spaCy, scikit-learn, SQLAlchemy, Streamlit. Private, fast, no API keys."],
    imageUrl: neurosortImage 
  },
  {
    title: "SummAIze",
    Description: ["Summarize PDF and .txt files into actionable insights with local AI. Built with Python, FastAPI, spaCy, scikit-learn, SQLAlchemy, React, TypeScript."],
    imageUrl: summaizeImage 
  },
  {
    title: "WargaBuatin",
    Description: ["Fullstack Digital platform for green action: interactive maps, reports, education, community forum, and events. Built with React, Node.js, Express, PostgreSQL, Leaflet.js, Google Maps API."],
    imageUrl: wargabuatinImage 
  },
  {
    title: "InsightIQ",
    Description: ["Local user behavior analytics: track clicks, scrolls, and interaction time; store in PostgreSQL; visualize with Streamlit. Built with Python, pandas, scikit-learn, matplotlib, KMeans clustering."],
    imageUrl: insightiqImage 
  },
  {
    title: "SkillShare API",
    Description: [" Go backend for sharing skills and short courses: JWT auth, class management, and user enrollments. Built with Go, Echo, GORM, PostgreSQL."],
    imageUrl: skillshareImage 
  },
  {
    title: "BukuNest",
    Description: ["Modern Laravel platform for digital library management: auth, CRUD books & genres, user profiles, comments, and role-based access. Built with Laravel, PHP, MySQL, JWT, Blade."],
    imageUrl: bukuImage 
  },
  {
    title: "GuardForms",
    Description: ["Backend Secure Google Forms data sync to PostgreSQL with JWT auth, audit logs, admin dashboard, multi-role access, and export features. Built with Node.js, Express.js, React, PostgreSQL."],
    imageUrl: guardImage 
  },
  {
    title: "BrightSeeds",
    Description: ["Fun learning & puzzle games: reading, writing, math, path finding, Wumpus World AI, and pattern challenges. Built with React + Vite."],
    imageUrl: brightImage 
  },
];

export const skills = {
  languages: ["Python", "Java", "Golang", "Node.js (Express)", "PHP (Laravel)", "C++, C", "JavaScript", "TypeScript", "Dart", "SQL"],
  ai_ml: ["TensorFlow", "PyTorch", "scikit-learn", "pandas", "NumPy", "OpenCV", "NLTK"],
  frontend: ["ReactJS", "Vue.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Router 6", "Redux"],
  backend: ["Express.js", "Laravel", "Sequelize", "Mongoose"],
  databases: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"],
  cloud_devops: ["Docker", "basic AWS & Azure", "RESTful APIs"],
  architecture: ["MVC", "Clean Architecture", "ORM"],
  tools: ["Git", "GitHub", "Jest", "CLI tools", "JWT"],
};

export const certifications = [
  { title: "Hackfest Hackathon – Build to Billions", place: "Universitas Ciputra Surabaya", year: "2025" },
  { title: "Competitive Programming: Winner", place: "HIMASTI IT Del", year: "2025" },
  { title: "Bootcamp Infinite Learning: Modern UI Android Development with Jetpack Compose", year: "2024" },
  { title: "Bootcamp Sanbercode: Mastery in Golang – Backend Development", year: "2025" },
  { title: "Dicoding Certificate: Learn JavaScript Programming", year: "2024" },
];

export const achievements = [
  { title: "Winner", event: "Competitive Programming Competition, HIMASTI IT DEL", year: "Apr 2025" },
  { title: "Winner", event: "Olimpiade Kimia Tingkat Kota, Lolos Provinsi", year: "2021 (SMA)" },
];

export const hobbies = ["Membaca", "Bermain Game"];

export const reference = {
  company: "Codveda Technology",
  email: "support@codveda.com",
  website: "www.codveda.com",
  instagram: "@codveda"
};
