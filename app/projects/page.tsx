import Container from "@/components/Reusable/Container";
import ProjectElement from "@/components/Reusable/ProjectElement";
import { projects } from "@/lib/constants";

export default function Home() {
  return (
    <Container>
      <h2 className="mb-4 text-center">My Projects</h2>
      <p className="mx-auto mb-8 text-center text-[.875rem] text-gray-700 sm:mb-16 sm:text-[1.2rem] md:w-3/4 md:text-[1.34rem] lg:text-[1.44rem]">
        Welcome to my collection of fun projects! Here, I showcase a variety of creative and experimental endeavors that highlight my passion for software engineering.
      </p>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <ProjectElement project={project} key={index} index={index} />
        ))}
      </div>
    </Container>
  );
}
