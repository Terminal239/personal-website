import { skills } from "@/lib/constants";
import Container from "./Reusable/Container";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Container>
      <h2 className="mb-4 text-center">Skills & Technologies</h2>
      <p className="mx-auto mb-8 text-center text-[.875rem] text-gray-700 sm:mb-16 sm:text-[1.2rem] md:w-2/3 md:text-[1.44rem] lg:text-[1.563rem]">
        I&apos;m proficient in a variety of technologies and tools, constantly expanding my skillset to deliver the best solutions.
      </p>
      <div className="mx-auto grid grid-cols-3 justify-items-center gap-y-4 sm:gap-y-8 lg:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center sm:gap-2">
            <div className="flex size-[96px] scale-75 items-center justify-center rounded bg-orange-200 sm:scale-100">
              <skill.icon width={64} height={64} />
            </div>
            <p className="text-[.875rem] font-bold md:text-[1.2rem] lg:text-[1.25rem]">{skill.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
