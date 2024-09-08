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
    <div key={project.id} className={`mx-auto flex flex-col gap-6 overflow-hidden md:w-[740px] lg:w-full lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
      {loading ? <Skeleton /> : <Image src={project.image} alt={project.alt} width={1200} height={900} className="w-0 rounded object-contain lg:flex-[4]" />}
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
