import Image from "next/image";
import Container from "./Reusable/Container";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className="mb-24 grid gap-8 sm:mb-32 xl:grid-cols-2">
      <div className="relative order-1 self-end">
        <div className="absolute left-1/2 top-0 size-[256px] -translate-x-1/2 rotate-0 bg-orange-400 sm:size-[356px] md:size-[512px]"></div>
        <div className="absolute left-1/2 top-0 size-[256px] -translate-x-1/2 -rotate-2 bg-blue-400 sm:size-[356px] md:size-[512px]"></div>
        <Image className="mx-auto size-[256px] rotate-2 rounded shadow-lg sm:size-[356px] md:size-[512px]" src="/landscape.jpg" alt="a starry night" width={512} height={512} />
      </div>
      <div className="self-center">
        <h1 className="relative mb-6 text-center sm:mb-8 xl:mr-8 xl:text-left">
          Hi, I&apos;m <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text font-bold text-transparent">Affan</span>,<br className="md:hidden" /> Crafting
          Digital{" "}
          <span className="relative">
            Experiences!{" "}
            <span className="absolute bottom-1 left-0 -z-10 h-1 w-full rounded bg-gradient-to-r from-orange-500 to-yellow-500 opacity-70 md:bottom-2 md:h-1.5 lg:bottom-3"></span>
          </span>
        </h1>
        <div className="xl:mr-8">
          <p className="mx-auto mb-6 text-center text-[0.875rem] text-gray-700 sm:mb-12 sm:text-[1.1rem] md:w-3/4 md:text-[1.2rem] lg:text-[1.25rem] xl:w-full xl:text-left">
            Driven by a passion for building seamless and engaging user experiences, I&apos;m an aspiring full-stack developer eager to contribute to innovative projects. I thrive
            in collaborative environments and am constantly seeking opportunities to learn and grow alongside fellow developers.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
