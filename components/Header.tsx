import Navigation from "./Navigation";
import Container from "./Reusable/Container";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mb-16">
      <Container className="flex justify-center py-4">
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
