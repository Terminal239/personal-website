import {
  ESLintIcon,
  ExpressIcon,
  FirebaseIcon,
  JavaIcon,
  MongoDBIcon,
  MySQLIcon,
  NextIcon,
  NodeJSIcon,
  ProjectCardIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  UserIcon,
} from "@/components/Reusable/Icons";

const skills = [
  {
    name: "Java",
    icon: JavaIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
  },
  {
    name: "Node.js",
    icon: NodeJSIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "SASS",
    icon: SassIcon,
  },
  {
    name: "ES Lint",
    icon: ESLintIcon,
  },
];

const projects = [
  {
    id: 1,
    image: "/projects/kanban-task-management.png",
    alt: "Project 1",
    title: "Kanban Task Management System",
    description:
      "Provides a user-friendly interface for organizing projects and tasks. Key features include a drag-and-drop Kanban board, task and subtask management, user authentication with email validation, and even two-factor authentication for enhanced security. ",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/Terminal239/Kanban-Task-Management",
    liveSiteLink: "https://kanban-task-management-application.netlify.app/",
  },
  {
    id: 2,
    image: "/projects/ecommerce-website.png",
    alt: "Project 2",
    title: "Full Stack E-Commerce Website",
    description:
      "E-commerce project with features such as product browsing and searching, detailed product pages with customer reviews, a streamlined shopping cart and checkout process, and secure user authentication and login. ",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Terminal239/ecommerce-website",
    liveSiteLink: "https://ecommerce-website-06qf.onrender.com/",
  },
  {
    id: 3,
    image: "/projects/planets-fact-site.png",
    alt: "Project 3",
    title: "Planets Fact Site",
    description:
      "Responsive web application showcasing information about different planets. It features a dynamic layout that adapts to various screen sizes, interactive elements with hover states, and detailed planet pages with togglable content sections.",
    techStack: ["Next.js", "SASS"],
    githubLink: "https://github.com/Terminal239/planets-fact-site",
    liveSiteLink: "https://planets-fact-site-website.netlify.app",
  },
  {
    id: 4,
    image: "/projects/frontend-mentor.png",
    alt: "Project 4",
    title: "Frontend Mentor Challenges",
    description: "This repository contains the solutions to the challenges I attempted at the website.",
    githubLink: "https://github.com/Terminal239/planets-fact-site",
  },
];

const navigation = [
  {
    icon: UserIcon,
    label: "About",
    link: "/",
  },
  {
    icon: ProjectCardIcon,
    label: "Projects",
    link: "/projects",
  },
];

export { navigation, projects, skills };
