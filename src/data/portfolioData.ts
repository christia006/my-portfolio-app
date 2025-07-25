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
    Description: ["SimPin: Backend Java 23 untuk manajemen kooperatif dengan fitur login, transaksi, mode malam, dan dukungan multibahasa."],
    imageUrl: simpinImage 
  },
  {
    title: "NeuroSort",
    Description: ["AI Lokal: Pindai dan klasifikasikan berkas .txt/.pdf/.docx, pencarian kontekstual cepat, simpan metadata di PostgreSQL. Dibangun dengan Python, spaCy, scikit-learn, SQLAlchemy, Streamlit. Pribadi, cepat, tanpa kunci API."],
    imageUrl: neurosortImage 
  },
  {
    title: "SummAIze",
    Description: ["Ringkas file PDF dan .txt menjadi wawasan yang dapat ditindaklanjuti dengan kecerdasan buatan lokal. Dibangun menggunakan Python, FastAPI, spaCy, scikit-learn, SQLAlchemy, React, dan TypeScript."],
    imageUrl: summaizeImage 
  },
  {
    title: "WargaBuatin",
    Description: ["Fullstack Platform digital lengkap untuk aksi hijau: peta interaktif, laporan, pendidikan, forum komunitas, dan acara. Dibangun dengan React, Node.js, Express, PostgreSQL, Leaflet.js, dan Google Maps API."],
    imageUrl: wargabuatinImage 
  },
  {
    title: "InsightIQ",
    Description: ["Analisis perilaku pengguna lokal: lacak klik, gulir, dan waktu interaksi; simpan di PostgreSQL; visualisasikan dengan Streamlit. Dibangun dengan Python, pandas, scikit-learn, matplotlib, dan clustering KMeans."],
    imageUrl: insightiqImage 
  },
  {
    title: "SkillShare API",
    Description: [" Platform backend untuk berbagi keterampilan dan kursus singkat: Otentikasi JWT, manajemen kelas, dan pendaftaran pengguna. Dibangun dengan Go, Echo, GORM, dan PostgreSQL."],
    imageUrl: skillshareImage 
  },
  {
    title: "BukuNest",
    Description: ["Platform Laravel modern untuk pengelolaan perpustakaan digital: otentikasi, CRUD buku dan genre, profil pengguna, komentar, dan akses berdasarkan peran. Dibangun dengan Laravel, PHP, MySQL, JWT, dan Blade."],
    imageUrl: bukuImage 
  },
  {
    title: "GuardForms",
    Description: ["Sinkronisasi data Google Forms yang aman ke PostgreSQL dengan otentikasi JWT, log audit, dasbor admin, akses multi-peran, dan fitur ekspor. Dibangun dengan Node.js, Express.js, React, dan PostgreSQL."],
    imageUrl: guardImage 
  },
  {
    title: "BrightSeeds",
    Description: ["Permainan belajar yang menyenangkan dan teka-teki: membaca, menulis, matematika, pencarian jalur, kecerdasan buatan Wumpus World, dan tantangan pola. Dibangun dengan React + Vite."],
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
