import Container from "@/components/Reusable/Container";
import { GithubIcon, SiteIcon } from "@/components/Reusable/Icons";
import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h2 className="mb-4 text-center">My Projects</h2>
      <p className="mx-auto mb-8 text-center text-[.875rem] text-gray-700 sm:mb-16 sm:text-[1.2rem] md:w-2/3 md:text-[1.44rem] lg:text-[1.563rem]">
        Check out some of the projects I&apos;ve worked on. Each one showcases my skills and creativity.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-b-lg">
            <Image src={project.image} alt={project.alt} width={600} height={400} className="h-60 w-full object-contain bg-orange-200 p-1" />
            <div className="bg-orange-200 p-4 ">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-4 flex items-center gap-4">
                {project.liveSiteLink && (
                  <Link
                    href={project.liveSiteLink}
                    className="inline-flex items-center gap-1 rounded bg-black px-2 py-1 pr-3 font-semibold leading-none text-white hover:bg-white hover:text-black"
                    prefetch={false}
                  >
                    <SiteIcon />
                    Live Site
                  </Link>
                )}
                <Link
                  href={project.githubLink}
                  className="inline-flex items-center gap-1 rounded  bg-white px-2 py-1 pr-3 font-semibold leading-none hover:bg-orange-400 hover:text-white"
                  prefetch={false}
                >
                  <GithubIcon />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
