import Navigation from "./Navigation";
import Container from "./Reusable/Container";
import { MoonIcon, SunIcon } from "./Reusable/Icons";

type Props = {};

const Toggle = () => {
  const theme = "light";

  return theme === "light" ? <MoonIcon /> : <SunIcon />;
};

const Header = (props: Props) => {
  return (
    <header className="mb-16">
      <Container className="flex justify-center py-4">
        {/* <div></div> */}
        <Navigation />
        {/* <div>
          <button className="flex items-center justify-center rounded-full bg-orange-200 p-2 hover:bg-orange-400 hover:text-white">
            <Toggle />
          </button>
        </div> */}
      </Container>
    </header>
  );
};

export default Header;
