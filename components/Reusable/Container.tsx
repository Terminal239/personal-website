import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return <div className={`${props.className || ""} mx-auto max-w-7xl px-4`}>{props.children}</div>;
};

export default Container;
