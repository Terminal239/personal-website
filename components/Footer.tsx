import Container from "./Reusable/Container";
import { GithubFilledIcon, LeetcodeIcon, LinkedInIcon } from "./Reusable/Icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="text-gray-700">
      <Container className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <div className="flex items-center justify-between gap-6 text-[0.875rem] md:text-[1rem]">
          <p>&copy; 2024 Designed & Developed by Affan</p>
        </div>
        <div className="socials flex items-center gap-4">
          <a href="https://github.com/Terminal239">
            <GithubFilledIcon height={24} width={24} />
          </a>
          <a href="https://www.linkedin.com/in/affan-shaikh-0ab391268">
            <LinkedInIcon height={24} width={24} />
          </a>
          <a href="https://leetcode.com/u/Terminal239/">
            <LeetcodeIcon height={24} width={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
