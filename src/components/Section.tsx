import { FC } from "react";
import { SectionProps } from "./types";

const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`flex-center full-height f-48 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
