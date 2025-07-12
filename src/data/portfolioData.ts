

import simpinImage from '../images/simpin.png'; 
import neurosortImage from '../images/neurosort.png';
import summaizeImage from '../images/summaize.png';
import wargabuatinImage from '../images/wargabuatin.png';
import insightiqImage from '../images/insightiq.png';
import skillshareImage from '../images/skillshare.png';


export const profile = {
  name: "CHRISTIAN JOHANNES HUTAHAEAN",
  title: "SOFTWARE ENGINEERING & FULL STACK DEVELOPER",
  bio: "Software Engineer & Full Stack Developer berpengalaman membangun aplikasi web end-to-end, mahir di backend (Golang, Node.js, PHP), REST API, dan database. Saat ini mendalami AI/ML Engineering dengan Python dan TensorFlow untuk solusi berbasis data.",
  contact: {
    phone: "+62 838 2175 1692",
    email: "chutahaean372@gmail.com",
    address: "Jl Danau Singkarak LK II, Binjai, North Sumatra, Indonesia",
    website: "www.reallygreatsite.com", // Ganti dengan website Anda jika ada
    github: "github.com/christia006",
    linkedin: "linkedin.com/in/christian-johannes-hutahaean", // Tambahkan LinkedIn
  },
  hobbies: ["Membaca", "Bermain Game"],
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
    title: "Machine Learning Intern",
    company: "Suvidha Foundation",
    duration: "JULI - AGUSTUS 2025",
    description: [
      "Pengumpulan Dataset 1000 artikel berita India untuk analisis data",
      "Melaksanakan kampanye fundraising beserta penanaman pohon sebagai wujud kontribusi sosial",
      "Mempelajari serta merangkum research paper terkini di bidang kecerdasan buatan",
      "Membangun hingga mendistribusikan model AI/ML sederhana",
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
  
    technologies: ["Java Swing", "MariaDB", "MVC"],
    imageUrl: simpinImage // Gunakan variabel yang diimpor
  },
  {
    title: "NeuroSort",
   
    technologies: ["NLP", "TF-IDF", "spaCy", "PostgreSQL"],
    imageUrl: neurosortImage // Gunakan variabel yang diimpor
  },
  {
    title: "SummAIze",
    
    technologies: ["React", "FastAPI", "Python", "spaCy", "scikit-learn", "CI/CD"],
    imageUrl: summaizeImage // Gunakan variabel yang diimpor
  },
  {
    title: "WargaBuatin",
    
    technologies: ["ReactJS", "Vite", "Node.js", "Express", "PostgreSQL"],
    imageUrl: wargabuatinImage // Gunakan variabel yang diimpor
  },
  {
    title: "InsightIQ",
    technologies: ["KMeans", "Event-driven", "Data Analytics"],
    imageUrl: insightiqImage // Gunakan variabel yang diimpor
  },
  {
    title: "SkillShare API",
    technologies: ["Go", "Echo", "JWT", "GORM", "PostgreSQL", "Swagger"],
    imageUrl: skillshareImage // Gunakan variabel yang diimpor
  },
];
