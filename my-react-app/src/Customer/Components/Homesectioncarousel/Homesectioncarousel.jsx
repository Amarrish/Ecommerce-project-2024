import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Homesecion from "../Homesection/Homesecion";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import PropTypes from 'prop-types';

const Homesectioncarousel = ({data,Sectioname}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 5.5 },
  };
  const Slidenext = () => setActiveIndex(activeIndex+1);
  const Slideprev = () =>  setActiveIndex(activeIndex-1);
  const syncActiveIndex = ({ items }) => setActiveIndex(items);

  const items = data.map((item, index) => <Homesecion product={item}  key={index} />);
 console.log(items,'items');
  return (
    <div className="relative px-4 lg:px-8">
      <h2>{Sectioname}</h2>
      <div className="relative p-5 m-2 border">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
{activeIndex !== items.length-6 &&
  <Button
        style={{backgroundColor:'white', color:'black'}}
          onClick={Slidenext}
          className="z-50"
          sx={{
            position: "absolute",
            top: "12rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg) ",
          }}
          variant="contained"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
}
        

       {activeIndex !==0 && 
        <Button
        style={{backgroundColor:'white', color:'black'}}
          onClick={Slideprev}
          className="z-50"
          sx={{
            position: "absolute",
            top: "12rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg) ",
          }}
          variant="contained"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)"}} />
        </Button>
       }
      </div>
    </div>
  );
};
Homesectioncarousel.propTypes = {
  data: PropTypes.array.isRequired,
  Sectioname: PropTypes.string.isRequired,
}
export default Homesectioncarousel;
