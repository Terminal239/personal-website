import {
  ESLintIcon,
  ExpressIcon,
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
      "Efficient Kanban task management app built with React, Redux Toolkit, and Tailwind CSS. Drag-and-drop tasks, subtasks, and project organization for seamless productivity.",
    githubLink: "https://github.com/Terminal239/Kanban-Task-Management",
    liveSiteLink: "https://kanban-task-management-application.netlify.app/",
  },
  {
    id: 2,
    image: "/projects/ecommerce-website.png",
    alt: "Project 2",
    title: "Full Stack E-Commerce Website",
    description: "A basic e-commerce website built with React, Redux Toolkit, Tailwind. Features product display, shopping cart functionality, and a checkout process.",
    githubLink: "https://github.com/Terminal239/ecommerce-website",
    liveSiteLink: "https://ecommerce-website-06qf.onrender.com/",
  },
  {
    id: 3,
    image: "/projects/planets-fact-site.png",
    alt: "Project 3",
    title: "Planets Fact Site",
    description: "A responsive, multi-page Planets Fact Site solution built with React, Next.js, and SASS.",
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
