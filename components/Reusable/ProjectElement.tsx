"use client";

import { skills } from "@/lib/constants";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GithubIcon, SiteIcon } from "./Icons";
import Skeleton from "./Skeleton";

type Props = {
  project: Project;
  index: number;
};

const ProjectElement = ({ project, index }: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div key={project.id} className={`mx-auto flex flex-col items-start gap-6 overflow-hidden md:w-[740px] lg:w-full lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
      <div className="size-full h-full min-h-[256px] sm:h-[296px] md:h-[416px] lg:h-[396px] lg:flex-[4]">
        {loading ? <Skeleton /> : <Image src={project.image} alt={project.alt} width={1200} height={400} className="size-full object-contain object-top" />}
      </div>
      <div className="flex flex-col gap-2 lg:flex-[3]">
        <h3 className="font-bold">{project.title}</h3>
        <p className="project-text text-gray-700">{project.description}</p>
        <div className="flex flex-col justify-between sm:flex-row sm:items-center lg:flex-col lg:items-start">
          {project.techStack && (
            <div className="flex gap-4">
              {project.techStack?.map((element, index) => {
                const skill = skills.find((skill) => skill.name === element)!;
                return <skill.icon width={32} height={32} key={index} />;
              })}
            </div>
          )}
          <div className="mt-6 flex gap-4">
            {project.liveSiteLink && (
              <Link href={project.liveSiteLink} className="project hover:bg-black hover:text-white" prefetch={false}>
                <SiteIcon />
                Live Site
              </Link>
            )}
            <Link href={project.githubLink} className="project hover:bg-orange-400 hover:text-white" prefetch={false}>
              <GithubIcon />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
