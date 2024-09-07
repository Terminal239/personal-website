import Container from "@/components/Reusable/Container";
import { GithubIcon, SiteIcon } from "@/components/Reusable/Icons";
import { projects, skills } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h2 className="mb-4 text-center">My Projects</h2>
      <p className="mx-auto mb-8 text-center text-[.875rem] text-gray-700 sm:mb-16 sm:text-[1.2rem] md:w-3/4 md:text-[1.34rem] lg:text-[1.44rem]">
        Welcome to my collection of fun projects! Here, I showcase a variety of creative and experimental endeavors that highlight my passion for software engineering.
      </p>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div key={project.id} className={`mx-auto flex flex-col gap-6 overflow-hidden md:w-[740px] lg:w-full lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <Image src={project.image} alt={project.alt} width={1200} height={900} className="w-full rounded object-contain lg:flex-[4]" />
            <div className="lg:flex-[3]">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="flex flex-col justify-between sm:flex-row sm:items-center lg:flex-col lg:items-start">
                {project.techStack && (
                  <div className="mt-4 flex gap-4">
                    {project.techStack?.map((element, index) => {
                      const skill = skills.find((skill) => skill.name === element)!;
                      return <skill.icon width={32} height={32} key={index} />;
                    })}
                  </div>
                )}
                <div className="mt-4 flex gap-4">
                  {project.liveSiteLink && (
                    <Link href={project.liveSiteLink} className="project" prefetch={false}>
                      <SiteIcon />
                      Live Site
                    </Link>
                  )}
                  <Link href={project.githubLink} className="project" prefetch={false}>
                    <GithubIcon />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
