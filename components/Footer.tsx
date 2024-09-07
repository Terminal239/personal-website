import Container from "./Reusable/Container";
import { GithubFilledIcon, LeetcodeIcon, LinkedInIcon } from "./Reusable/Icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-orange-200 text-gray-700">
      <Container className="flex flex-col items-center justify-center gap-4 py-4 md:flex-row">
        <div className="socials flex items-center gap-8">
          <a href="https://github.com/Terminal239">
            <GithubFilledIcon height={32} width={32} />
          </a>
          <a href="https://www.linkedin.com/in/affan-shaikh-0ab391268">
            <LinkedInIcon height={32} width={32} />
          </a>
          <a href="https://leetcode.com/u/Terminal239/">
            <LeetcodeIcon height={32} width={32} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
