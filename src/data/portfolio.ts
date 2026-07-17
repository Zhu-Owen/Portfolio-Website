import resumeAsset from "@/assets/owen-zhu-resume.pdf.asset.json";
import amazonLogo from "@/assets/amazon.png.asset.json";
import faireLogo from "@/assets/faire.png.asset.json";
import intuitLogo from "@/assets/intuit.png.asset.json";
import thescoreLogo from "@/assets/thescore.png.asset.json";
import canadapostLogo from "@/assets/canadapost.png.asset.json";

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  link?: string;
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: {
    school: string;
    degree: string;
    location: string;
    duration: string;
    honors: string;
    scholarship?: string;
    courses?: string[];
  };
}

export const portfolio: PortfolioData = {
  name: "Owen Zhu",
  title: "Software Engineer",
  location: "Toronto, ON",
  email: "owen.zhu2012@gmail.com",
  phone: "(647) 832-7166",
  linkedin: "https://www.linkedin.com/in/Zhu-Owen",
  github: "https://github.com/Zhu-Owen",
  resumeUrl: resumeAsset.url,
  summary:
    "Software engineer with experience across robotics, fintech, e-commerce, and sports media. I specialize in building reliable mobile and backend systems, leading cross-functional initiatives, and driving operational excellence at scale. Currently at Amazon Robotics, I design event-driven microservices and manage the full SDLC for global fleet services.",
  experience: [
    {
      company: "Amazon Robotics",
      role: "Software Development Engineer",
      location: "Toronto, ON",
      duration: "July 2025 – Present",
      bullets: [
        "Acted as Technical Lead for global initiatives, owning the full SDLC from development to Change Management execution during code freezes; received VP-level recognition for flawless global rollouts.",
        "Spearheaded the strategic deprecation of a legacy data model service, dismantling obsolete pipelines and NLBs while collaborating with client teams to migrate critical S3/DynamoDB data with zero downtime.",
        "Drove Operational Excellence during bi-monthly on-call rotations, leading the resolution of critical production incidents and minimizing operational toil to maintain 99.99% availability for fleet services.",
        "Designed event-driven microservices for robotic fleet management using Kotlin and AWS Lambda, processing high-throughput telemetry via SQS/SNS with idempotent consumers.",
      ],
      link: "https://www.aboutamazon.com/news/tag/robotics",
      logo: amazonLogo.url,
    },
    {
      company: "Faire",
      role: "Android Engineer Intern",
      location: "Toronto, ON",
      duration: "Sep 2024 – Dec 2024",
      bullets: [
        "Led the migration to type-safe Compose Navigation, designing a custom routing system to pass complex arguments with optimized serialization, reducing navigation latency by 200ms.",
        "Authored a comprehensive Engineering Design Document to standardize navigation patterns, researching and implementing type-safe arguments to ensure scalability and developer velocity.",
        "Engineered the Android frontend for experimental AI features, transforming design concepts into functional implementations to introduce multimodal capabilities for the retailer app.",
        "Enhanced the custom MVVM architecture using RxJava to streamline reactive data flows, significantly improving code maintainability for complex retailer workflows.",
      ],
      link: "https://www.faire.com",
      logo: faireLogo.url,
    },
    {
      company: "Intuit",
      role: "Software Engineer Intern",
      location: "Toronto, ON",
      duration: "Sep 2023 – Dec 2023, May 2024 – Aug 2024",
      bullets: [
        "Built the ‘Document Checklist’ widget in Native Android, replacing a legacy WebView to reduce load times from 6.0s to 1.5s, streamlining the document upload flow for 3M+ monthly users.",
        "Designed and deployed exclusive features (swipe-to-delete, bulk uploads, cloud integration) that increased user conversion rates, validated through production A/B testing.",
        "Reduced manual testing time by implementing automated UI tests using Appium, leveraging XCUITest (iOS) and UIAutomator2 (Android) to ensure cross-platform stability.",
      ],
      link: "https://www.intuit.com",
      logo: intuitLogo.url,
    },
    {
      company: "theScore",
      role: "Software Developer Intern",
      location: "Toronto, ON",
      duration: "Jan 2023 – Apr 2023",
      bullets: [
        "Delivered enhancements to 10+ screens including the new ‘Teasers’ bet type, leveraging Kotlin and Apollo GraphQL to drive user engagement.",
        "Refactored legacy code to remove 5000+ unused lines, reducing module compile times by 10% and improving developer velocity.",
      ],
      link: "https://www.thescore.com",
      logo: thescoreLogo.url,
    },
    {
      company: "Innovapost",
      role: "Android Developer Intern",
      location: "Ottawa, ON",
      duration: "Apr 2022 – Aug 2022",
      bullets: [
        "Developed a proof-of-concept NFC-based SSO login system, reducing authentication time by 70% and streamlining access for thousands of logistics employees.",
        "Strengthened security by implementing AES-256 encryption for credential storage and integrating Android’s Keystore system.",
      ],
      link: "https://www.innovapost.com",
      logo: canadapostLogo.url,
    },
  ],
  projects: [
    {
      title: "Java Compiler",
      description:
        "A compiler written from scratch that translates a subset of Java into MIPS assembly. Implements lexical analysis, parsing, semantic checks, and code generation.",
      tags: ["Compilers", "Java", "MIPS", "Parsing", "Code Generation"],
      github: "https://github.com/Zhu-Owen",
    },
    {
      title: "Portfolio Website",
      description:
        "This site — a clean, responsive personal portfolio showcasing my engineering experience, projects, and skills.",
      tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Start"],
      github: "https://github.com/Zhu-Owen",
    },
    {
      title: "Arclight",
      description:
        "An Android password manager that generates secure customizable passwords, stores existing credentials, and protects them behind user authentication.",
      tags: ["Android", "Password Manager", "Authentication", "Security"],
      github: "https://github.com/Zhu-Owen/Arclight",
    },
    {
      title: "RecipeIO",
      description:
        "A full-stack web app that lets users enter ingredients and discover matching recipes via the Spoonacular API. Built with React.js, Node.js, and Express.js.",
      tags: ["React.js", "Node.js", "Express.js", "Spoonacular API", "Full-Stack"],
      github: "https://github.com/Zhu-Owen/RecipeIO",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Kotlin", "Java", "Python", "TypeScript", "SQL", "C/C++", "Go", "Rust", "Swift"],
    },
    {
      category: "AWS / Cloud",
      items: ["Lambda", "DynamoDB", "AppConfig", "ECR", "CDK (IaC)", "CloudFormation", "SQS/SNS", "IAM", "CloudWatch"],
    },
    {
      category: "Practices & Ops",
      items: ["System Design", "Microservices", "Operational Excellence", "Distributed Systems", "CI/CD", "Agile"],
    },
    {
      category: "Frameworks & Tools",
      items: ["Spring Boot", "React", "Node.js", "Jetpack Compose", "Apollo GraphQL", "Docker", "Git", "Postman"],
    },
  ],
  education: {
    school: "University of Waterloo",
    degree: "Bachelor of Computer Science, Honours Co-op",
    location: "Waterloo, ON",
    duration: "Sep 2020 – Apr 2025",
    honors: "GPA: 3.7/4.0 — Graduating with Distinction",
    scholarship: "University of Waterloo President’s Scholarship of Distinction (Entrance Scholarship)",
    courses: [
      "Concurrent and Parallel Programming",
      "Data-Intensive Distributed Computing",
      "Data Structures & Algorithms",
      "Compilers Construction",
      "Operating Systems",
      "Database Management Systems",
      "Programming for Performance",
    ],
  },
};
