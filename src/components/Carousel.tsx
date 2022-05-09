import Slide from "./Slide";
import { SlideProps } from "./types";


const array:SlideProps[] = [
  {
    id:"1",
    year: "2022",
    heading: true
  },
  {
    id:"2",
    year: "2021",
    bgColor:"bg-yellow",
  },
  {
    id:"3",
    year: "2020",
    bgColor:"bg-light-blue",
  }
];

const Carousel = () => {
  return (
    <div>
      {array.map(item => <Slide key={item.id} {...item} />)}
    </div>
  );
};

export default Carousel;
