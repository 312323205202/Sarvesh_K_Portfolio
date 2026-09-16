import type { PersonalInfo } from "@/types";

export const personal: PersonalInfo = {
  name: "Sarvesh Karthik",
  firstName: "Sarvesh",
  location: "Chennai, India",
  title: "Software Developer",
  focusAreas: ["AI/ML", "Data", "Backend"],
  tagline: "AI/ML · Data · Backend",
  summary:
    "B.Tech Information Technology student (class of 2027) in Chennai. I build backend and data systems in Python, Java, and PostgreSQL — a SQL-native recommendation engine over 100K+ MovieLens ratings, a Gmail-to-WhatsApp automation pipeline, and an AI interview-prep platform currently in development.",
  social: {
    github: "https://github.com/312323205202",
    linkedin: "https://www.linkedin.com/in/sarvesh-karthik30/",
    leetcode: "https://leetcode.com/u/Sarveshk30/",
    email: "sarveshkarthik007@gmail.com",
    phone: "+91 9940676007",
  },
  resumePath: "/Sarvesh-Karthik-Resume.pdf",
};

/** Compact facts shown alongside the About copy. */
export const quickFacts: { label: string; value: string }[] = [
  { label: "Degree", value: "B.Tech, Information Technology" },
  { label: "Institution", value: "St. Joseph's College of Engineering" },
  { label: "Graduating", value: "2027" },
  { label: "Location", value: "Chennai, India" },
  { label: "Open to", value: "Internships · new-grad SWE roles · collaborations" },
];
