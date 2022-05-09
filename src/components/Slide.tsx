import { FC } from "react";
import Section from "./Section";
import { SlideProps } from "./types";

const Slide:FC<SlideProps> = ({ year, heading }) => {
  const primaryStyle:string = "flex-center flex-1 h-100 bg-dark p-10";
  const yellowBackground:string = " bg-yellow";
  const transparentBackground:string = " bg-transparent";

  const getClasses = (overwrite:string) => {
    return heading
      ? { className: primaryStyle }
      : { className: primaryStyle + overwrite };
  };
  
  return (
    <Section className="sticky">
      <div {...getClasses(transparentBackground)}>
        {heading && <h1 className="heading f-40">Deep Dive into our Annual Reports</h1>}
      </div>
      <div {...getClasses(yellowBackground)}>
        <div className="flex-center h-full flex-col">
          <h1 className="heading f-48">{year}</h1>
          <button className="btn-primary">Download Report</button>
        </div>
      </div>
    </Section>
  );
};

export default Slide;
