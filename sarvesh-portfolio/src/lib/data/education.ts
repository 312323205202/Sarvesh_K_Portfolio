import type { EducationEntry, Certification } from "@/types";

export const education: EducationEntry[] = [
  {
    institution: "St. Joseph's College of Engineering",
    credential: "B.Tech in Information Technology",
    period: "2023 – 2027",
    detail: "CGPA: 7.96 / 10",
  },
  {
    institution: "PSBB Millennium School",
    credential: "Higher Secondary & Secondary Education",
    period: "",
    detail: "HSC: 82% · SSLC: 86%",
  },
];

export const certifications: Certification[] = [
  { name: "Git for Beginners", issuer: "KodeKloud", year: "2025" },
  { name: "Python and Cybersecurity", issuer: "Udemy", year: "2023" },
  { name: "Digital 101", issuer: "FutureSkills", year: "2024" },
];
