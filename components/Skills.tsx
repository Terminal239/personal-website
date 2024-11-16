import { skills } from "@/lib/constants";
import Container from "./Reusable/Container";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Container>
      <h2 className="mb-4 text-center">Skills & Technologies</h2>
      <p className="main-text mx-auto mb-8 text-center text-gray-700 sm:mb-16 md:w-2/3">
        I&apos;m proficient in a variety of technologies and tools, constantly expanding my skillset to deliver the best solutions.
      </p>
      <div className="mx-auto grid grid-cols-3 justify-items-center gap-y-4 sm:gap-y-8 lg:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center sm:gap-2">
            <div className="flex size-[96px] scale-75 items-center justify-center rounded bg-orange-200 sm:scale-100">
              <skill.icon className="size-12" />
            </div>
            <p className="font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
