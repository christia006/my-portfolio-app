

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
  name: "CHRISTIAN JOHANNES HUTAHAEAN",
  title: "SOFTWARE ENGINEERING & FULL STACK DEVELOPER",
  bio: "Software Engineer & Full Stack Developer with experience in building end-to-end web applications, proficient in backend (Golang, Node.js, PHP), REST API, and databases. Currently exploring AI/ML Engineering with Python and TensorFlow for data-driven solutions.",
  contact: {
    phone: "+62 838 2175 1692",
    email: "chutahaean372@gmail.com",
    address: "Jl Danau Singkarak LK II, Binjai, North Sumatra, Indonesia",
    website: "my-portfolio-app-vpo5.vercel.app", // Ganti dengan website Anda jika ada
    github: "github.com/christia006",
    linkedin: "linkedin.com/in/christian-johannes-hutahaean", // Tambahkan LinkedIn
  },
  hobbies: [" reading   or  playing games."],
  reference: {
    name: "Amandeep KAUR HR",
    title: "Suvidha Foundation",
    phone: "+91 78144 87078",
    email: "amanvirdi364@gmail.com",
  },
  education: [
    {
      degree: "SI INFORMATIKA",
      institution: "INSTITUT TEKNOLOGI DEL",
      duration: "Sep 2023 - Sekarang",
      gpa: "2.8 / 4.0",
    },
  ],
};

export const skills = {
  languages: [
    "JAVA",
    "GO (GOLANG)",
    "Node.js (Express)",
    "PHP (Laravel, Blade)",
    "C++, C",
    "JavaScript",
    "TypeScript",
    "Haskell",
  ],
  frameworks: [
    "ReactJS",
    "Vue.js",
    "Flutter (Dart)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Gin (Golang)",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "MariaDB",
  ],
  tools: [
    "Git",
    "GitHub",
    "RESTful APIs",
    "JWT Authentication",
    "Postman",
    "npm",
  ],
  architecture: [
    "MVC & Clean Architecture",
    "ORM",
    "Event-driven",
  ],
  others: [
    "CI/CD with GitHub Actions",
    "JSON",
    "Markdown",
    "SQLAlchemy",
    "Chart.js",
    "Axios",
  ],
};

export const workExperience = [
  {
    title: "Fullstack D",
    company: "Codvedha Technology ",
    duration: "JULI - AGUSTUS 2025",
    description: [
      "Membangun full-stack app (MERN/MEVN) dengan JWT dan role-based access.",
      "Integrasi WebSockets (Socket.io) untuk notifikasi real-time.",
      "Mendesain GraphQL API (Apollo Server) dengan autentikasi.",
    ],
  },
];

export const achievements = [
  {
    title: "Winner",
    event: "Competitive Programming Competition, HIMASTI IT DEL",
    year: "APRIL 2025",
  },
  {
    title: "Winner",
    event: "Olimpiade Kimia Tingkat Kota, Lolos Tingkat Provinsi",
    year: "(2021, SAAT SMA)",
  },
];

export const projects = [
  {
    title: "Simpin",
  
    Description: ["SimPin: backend Java  untuk manajemen koperasi dengan login, transaksi, night mode, dan multi-language."],
    imageUrl: simpinImage 
  },
  {
    title: "NeuroSort",
   
    Description: ["AI Lokal: Pindai dan klasifikasikan berkas .txt/.pdf/.docx, pencarian kontekstual cepat, simpan metadata di PostgreSQL. Dibangun dengan Python, spaCy, scikit-learn, SQLAlchemy, Streamlit. Pribadi, cepat, tanpa kunci API."],
    imageUrl: neurosortImage 
  },
  {
    title: "SummAIze",
    
    Description: ["Ringkas file PDF dan .txt  dengan kecerdasan buatan lokal. Dibangun dengan Python, FastAPI, spaCy, scikit-learn, SQLAlchemy, React, dan TypeScript."],
    imageUrl: summaizeImage 
  },
  {
    title: "WargaBuatin",
    
    Description: ["Platform digital fullstack untuk aksi hijau: peta interaktif, laporan, pendidikan, forum komunitas, dan acara. Dibangun dengan React, Node.js, Express, PostgreSQL, dan Leaflet.js."],
    imageUrl: wargabuatinImage 
  },
  {
    title: "InsightIQ",
    Description: ["Analisis perilaku pengguna lokal: lacak klik, gulir, dan waktu interaksi; simpan di PostgreSQL; visualisasikan dengan Streamlit. Dibangun dengan Python, pandas, scikit-learn, matplotlib, dan clustering KMeans."],
    imageUrl: insightiqImage 
  },
  {
    title: "SkillShare API",
    Description: [" Go backend for sharing skills and short courses: JWT auth, class management, and user enrollments. Built with Go, Echo, GORM, PostgreSQL."],
    imageUrl: skillshareImage 
  },
   {
    title: "BukuNest",
    Description: [" Modern Laravel platform for digital library management: auth, CRUD books & genres, user profiles, comments, and role-based access. Built with Laravel, PHP, MySQL, JWT, Blade."],
    imageUrl: bukuImage 
  },
  {
    title: "GuardForms",
    Description: [" Backend Secure Google Forms data sync to PostgreSQL with JWT auth, audit logs, admin dashboard, multi-role access, and export features. Built with Node.js, Express.js, React, PostgreSQL."],
    imageUrl: guardImage 
  },
    {
    title: "BrightSeeds",
    Description: [" Fun learning & puzzle games: reading, writing, math, path finding, Wumpus World AI, and pattern challenges. Built with React + Vite."],
    imageUrl: brightImage 
  },
];
