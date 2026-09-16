import type { SkillCategory, CourseworkGroup } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    items: ["Python", "Java", "C"],
  },
  {
    id: "web",
    label: "Web",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["SQL", "PostgreSQL"],
  },
  {
    id: "apis",
    label: "APIs",
    items: ["Gmail API", "Twilio WhatsApp API", "Gemini API"],
  },
  {
    id: "libraries",
    label: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    id: "tools",
    label: "Developer Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const coursework: CourseworkGroup = {
  category: "Coursework",
  courses: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};
