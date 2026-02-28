export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface NavLink {
  label: string;
  href: string;
}

export const personalInfo = {
  name: "Artur Mistiuk",
  title: "Data Analyst",
  location: "Stockholm, Sweden",
  tagline:
    "Detail-oriented Data Analyst specializing in predictive analytics and Machine Learning.",
  email: "mistiuka@visa.com",
  phone: "+46762541491",
  linkedin: "https://www.linkedin.com/in/artur-mistiuk-9a9a31234/",
  github: "https://github.com/ArturMistiuk",
};

export const about =
  "I am a detail-oriented Data Analyst specializing in predictive analytics and Machine Learning. With a background in software engineering and hands-on experience at Tink (a Visa company), I develop ML models and analyze large-scale datasets to drive business impact. I thrive on turning raw data into actionable insights that inform strategic decisions.";

export const experiences: Experience[] = [
  {
    company: "Tink (a Visa company)",
    role: "Data Analyst",
    period: "2024 — Present",
    description: [
      "Data Labelling in Named Entity Recognition (NER), enhancing transaction categorization accuracy.",
      "Developing and refining ML models for large-scale financial data analysis.",
      "Collaborating with cross-functional teams to deliver data-driven insights.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "WaveLip",
    description:
      "A fully autonomous deepfake creator utilizing pre-trained deep learning models and Python scripts for YouTube video scraping and lip-sync generation.",
    technologies: ["Python", "Deep Learning", "Video Processing"],
    github: "https://github.com/ArturMistiuk/WaveLip",
  },
  {
    title: "Customer Segmentation",
    description:
      "Applies unsupervised machine learning (KMeans Clustering) to segment customers for targeted marketing strategies.",
    technologies: ["Python", "Scikit-learn", "KMeans", "Pandas"],
    github: "https://github.com/ArturMistiuk/Customer_Segmentation",
  },
  {
    title: "Death Causes Analysis: Sweden & Ukraine",
    description:
      "Comparative analysis of causes of death across Sweden and Ukraine with interactive data visualizations.",
    technologies: ["Python", "Plotly", "Pandas", "Data Visualization"],
    github: "https://github.com/ArturMistiuk/Data_Visualization",
  },
  {
    title: "Gender Prediction (SVM)",
    description:
      "Predicts gender from facial images using Support Vector Machines with image preprocessing pipelines.",
    technologies: ["Python", "SVM", "OpenCV", "Scikit-learn"],
    github:
      "https://github.com/ArturMistiuk/Gender_Prediction_from_Photos/tree/main",
  },
  {
    title: "Business EDA & Optimization",
    description:
      "Exploratory Data Analysis for strategic business decisions — uncovering sales patterns and optimization opportunities.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github:
      "https://github.com/ArturMistiuk/Company_Sales_Analysis_Insights_and_Visualization",
  },
  {
    title: "Solar Panel Farm Optimization",
    description:
      "Identifies optimal solar farm locations using NASA API data, analyzing solar irradiance and geographic factors.",
    technologies: ["Python", "NASA API", "Pandas", "Geospatial"],
    github: "https://github.com/ArturMistiuk/NASA_Project/tree/main",
  },
];

export const education: Education[] = [
  {
    institution: "Stockholm",
    degree: "Data Analytics Coding Bootcamp",
    period: "2023 — 2024",
  },
  {
    institution: "GoIT",
    degree: "Python Developer Course",
    period: "2022 — 2023",
  },
  {
    institution: "Zaporizhzhia National University",
    degree: "BSc Software Engineering",
    period: "2017 — 2021",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    category: "Data & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "NER",
      "EDA",
    ],
  },
  {
    category: "Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jupyter", "VS Code", "Google Colab"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: personalInfo.github, icon: "github" },
  { label: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { label: "Email", url: `mailto:${personalInfo.email}`, icon: "email" },
  { label: "Phone", url: `tel:${personalInfo.phone}`, icon: "phone" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
