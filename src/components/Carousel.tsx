import Slide from "./Slide";

const Carousel = () => {
  return (
    <div>
      <Slide year="2022" heading={true}/>
      <Slide year="2021" />
    </div>
  );
};

export default Carousel;
