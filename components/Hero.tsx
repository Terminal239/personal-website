import Image from "next/image";
import Container from "./Reusable/Container";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className="mb-16 grid gap-8 sm:mb-32 sm:gap-12 xl:grid-cols-2">
      <div className="relative order-1 mx-auto flex size-[296px] self-end sm:size-[356px] md:size-[512px]">
        <div className="absolute left-1/2 top-0 size-full -translate-x-1/2 rotate-0 bg-orange-400"></div>
        <div className="absolute left-1/2 top-0 size-full -translate-x-1/2 -rotate-2 bg-blue-400"></div>
        <Image className="mx-auto size-full rotate-2 rounded shadow-lg" src="/landscape.jpg" alt="a starry night" width={512} height={512} />
      </div>
      <div className="self-center">
        <h1 className="relative mb-6 text-center sm:mb-8 xl:text-left">
          Hi, I&apos;m <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text font-bold text-transparent">Affan</span>,<br className="md:hidden" /> Crafting
          Digital{" "}
          <span className="relative">
            Experiences! <span className="absolute bottom-0 left-0 -z-10 h-1 w-full rounded bg-gradient-to-r from-orange-500 to-yellow-500 opacity-70 md:h-2"></span>
          </span>
        </h1>
        <div className="mx-auto flex flex-col gap-2 text-center text-gray-700 sm:w-3/4 lg:gap-4 xl:w-full xl:text-left">
          <p className="main-text">
            Driven by a passion for building seamless and engaging user experiences, I&apos;m an aspiring full-stack developer eager to contribute to innovative projects.
          </p>
          <p className="main-text">I thrive in collaborative environments and am constantly seeking opportunities to learn and grow alongside fellow developers.</p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
