import type { Project } from "@/types";

/**
 * Project data — single source of truth for the Projects section.
 *
 * `github` points to the GitHub profile as a placeholder for every project,
 * because individual repository URLs were not provided. Replace each `github`
 * with the real repository URL and set `githubIsProfile: false`.
 */

const GITHUB_PROFILE = "https://github.com/312323205202";

export const projects: Project[] = [
  {
    slug: "cinematch",
    title: "CineMatch",
    subtitle: "Movie recommendation & analytics on PostgreSQL",
    description:
      "Relational recommendation and analytics system over the MovieLens dataset — normalized schema, SQL-native recommenders, and query-plan-driven optimization.",
    status: "completed",
    technologies: ["PostgreSQL", "Python", "Pandas", "psycopg2"],
    stack: [
      { label: "Database", items: ["PostgreSQL"] },
      { label: "Language", items: ["Python", "SQL"] },
      { label: "Libraries", items: ["Pandas", "psycopg2"] },
      { label: "Data", items: ["MovieLens (100K+ ratings)"] },
    ],
    facts: [
      { label: "Ratings", value: "100K+" },
      { label: "Users", value: "610" },
      { label: "Movies", value: "9,742" },
    ],
    features: [
      "Normalized 3NF relational schema",
      "CTEs and window functions (RANK, LAG)",
      "Popularity-, genre- and collaborative-filtering recommenders in SQL",
      "Indexes and views for common query paths",
      "Query plans inspected with EXPLAIN ANALYZE",
      "Python/Pandas ingestion and transformation",
    ],
    concepts: ["CTEs", "Window functions", "Ranking", "Aggregation", "Query optimization"],
    architecture: [
      { label: "MovieLens", detail: "Raw CSVs: 100K+ ratings, 610 users, 9,742 movies" },
      { label: "Python / Pandas", detail: "Clean, reshape, and load via psycopg2" },
      { label: "PostgreSQL", detail: "3NF schema with indexes and views" },
      { label: "Recommenders", detail: "Popularity, genre, collaborative filtering" },
      { label: "Analytics", detail: "CTEs, RANK/LAG, EXPLAIN ANALYZE" },
    ],
    caseStudy: {
      problem:
        "MovieLens ships as flat CSVs. Recommending films and answering analytical questions over it efficiently requires a proper relational model, not ad-hoc scripts.",
      approach:
        "Designed a normalized 3NF PostgreSQL schema for users, movies, genres, and ratings. Python and Pandas handle cleaning and loading through psycopg2. Recommendation logic lives in SQL — popularity ranking, genre-based filtering, and collaborative filtering — so it runs where the data is.",
      implementation:
        "Analytical queries use CTEs and window functions (RANK, LAG) for ranking and trend analysis. Indexes and views cover the common access paths, and EXPLAIN ANALYZE was used to check plans and confirm that indexing decisions actually changed execution.",
    },
    github: GITHUB_PROFILE,
    githubIsProfile: true,
  },
  {
    slug: "ai-interview-prep",
    title: "AI Interview Preparation Platform",
    subtitle: "Resume analysis, mock interviews, and feedback with Gemini",
    description:
      "End-to-end interview preparation: ATS-style resume analysis, generated questions, mock interviews, AI evaluation, and performance tracking. In active development.",
    status: "ongoing",
    technologies: ["Gemini API"],
    stack: [
      { label: "AI", items: ["Gemini API"] },
      { label: "Status", items: ["In development"] },
    ],
    features: [
      "ATS-style resume analysis",
      "Interview question generation",
      "Mock interviews with AI evaluation",
      "Personalized feedback and recommendations",
      "Performance tracking and skill-gap analytics",
    ],
    architecture: [
      { label: "Resume", detail: "Candidate input" },
      { label: "ATS Analysis", detail: "Resume evaluation" },
      { label: "Question Gen", detail: "Role-targeted prompts" },
      { label: "Mock Interview", detail: "Simulated session" },
      { label: "AI Evaluation", detail: "Gemini-scored responses" },
      { label: "Feedback", detail: "Personalized guidance" },
      { label: "Analytics", detail: "Skill-gap tracking" },
    ],
    caseStudy: {
      problem:
        "Interview preparation is spread across separate tools for resume review, question practice, and feedback, with nothing tracking progress across them.",
      approach:
        "A single platform that takes a candidate from resume analysis through mock interviews to structured feedback, using the Gemini API to generate questions and evaluate answers.",
      implementation:
        "In progress. The resume analysis and mock interview flow are being built first; performance tracking, skill-gap analytics, and dashboards follow as the core loop stabilizes.",
    },
    github: GITHUB_PROFILE,
    githubIsProfile: true,
  },
  {
    slug: "ai-resume-screening",
    title: "AI Resume Screening System",
    subtitle: "ATS-style parsing, matching, and ranking in Python",
    description:
      "Parses resumes, extracts candidate details and skills, matches them against a job description with keyword matching, and ranks candidates automatically.",
    status: "completed",
    technologies: ["Python"],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Approach", items: ["Resume parsing", "Keyword matching", "Ranking"] },
    ],
    features: [
      "Resume parsing and text extraction",
      "Candidate information and skill extraction",
      "Keyword-based job-description matching",
      "Candidate ranking and automated evaluation",
    ],
    architecture: [
      { label: "Resume", detail: "Input document" },
      { label: "Parsing", detail: "Text extraction" },
      { label: "Extraction", detail: "Candidate details and skills" },
      { label: "JD Matching", detail: "Keyword comparison" },
      { label: "Ranking", detail: "Automated evaluation" },
    ],
    caseStudy: {
      problem:
        "Screening resumes against a job description by hand is slow and inconsistent once applicant volume grows.",
      approach:
        "A Python pipeline that parses resume text, extracts candidate information and skills, and compares them against a target job description with keyword matching.",
      implementation:
        "Stages run in sequence — parse, extract, match, rank — producing an automated first-pass evaluation and an ordered candidate list for a given job description.",
    },
    github: GITHUB_PROFILE,
    githubIsProfile: true,
  },
  {
    slug: "gmail-whatsapp-automation",
    title: "Gmail → WhatsApp Automation",
    subtitle: "Email monitoring and alerting across two external APIs",
    description:
      "Watches a Gmail inbox, classifies incoming mail with AI, and forwards the important messages to WhatsApp through Twilio.",
    status: "completed",
    technologies: ["Python", "Gmail API", "Twilio WhatsApp API"],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Integrations", items: ["Gmail API", "Twilio WhatsApp API"] },
      { label: "Logic", items: ["AI-based email classification"] },
    ],
    features: [
      "Inbox monitoring through the Gmail API",
      "Email processing and normalization",
      "AI-based importance classification",
      "Conditional routing — only important mail is forwarded",
      "WhatsApp delivery via the Twilio API",
    ],
    architecture: [
      { label: "Gmail Inbox", detail: "Source mailbox" },
      { label: "Gmail API", detail: "Message retrieval" },
      { label: "Processing", detail: "Parse and normalize" },
      { label: "AI Classifier", detail: "Important or not?" },
      { label: "Twilio API", detail: "WhatsApp delivery" },
      { label: "WhatsApp", detail: "Notification received" },
    ],
    caseStudy: {
      problem:
        "Time-sensitive emails get buried, and polling an inbox all day isn't practical — but missing them is costly.",
      approach:
        "Pull new messages through the Gmail API, classify each one for importance using AI-based classification, and route only the important ones to WhatsApp through Twilio's API.",
      implementation:
        "Two external APIs are integrated end to end — Gmail for retrieval, Twilio for delivery — with the classification step in between acting as the gate on what gets forwarded.",
    },
    github: GITHUB_PROFILE,
    githubIsProfile: true,
  },
];
