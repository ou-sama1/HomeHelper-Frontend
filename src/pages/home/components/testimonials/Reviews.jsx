import { useState } from "react";
import Review from "./Review";
import { ArrowIcon } from "../../../../components/icons";

const Reviews = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [deactivateButtons, setDeactivateButtons] = useState(false);

  const swipeReviewsHandler = (arrow) => {
    setDeactivateButtons(true)
    setTimeout(() => {
      setDeactivateButtons(false)
    }, 500);
    switch (arrow) {
      case "r":
        setCurrentIndex(prev => (prev + 1) % data.length);
        setDirection(prev => prev === 'r' ? 'r2' : 'r');
        break;
      case "l":
        setCurrentIndex(prev => prev >= 1 ? prev - 1 : (data.length - 1));
        setDirection(prev => prev === 'l' ? 'l2' : 'l');
        break;
    
      default:
        break;
    } 
  }
  
  return (
    <div className="flex flex-row items-center justify-center gap-20 overflow-x-hidden w-full my-10 relative">
      <Review isCenter={false} direction={direction} reviewData={data[currentIndex >= 1 ? currentIndex - 1 : (data.length - 1)]} />
      <Review isCenter={true} direction={direction} swipeReviewsHandler={swipeReviewsHandler} reviewData={data[currentIndex]} />
      <Review isCenter={false} direction={direction} reviewData={data[(currentIndex + 1) % data.length]} />
      <button disabled={deactivateButtons} onClick={()=>swipeReviewsHandler("l")} className={`absolute left-[20%] top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-primary ${deactivateButtons ? "opacity-50" : ""}`}>
        <ArrowIcon color={"#FFF"} dimensions={"50px"} />
      </button>
      <button disabled={deactivateButtons} onClick={()=>swipeReviewsHandler("r")} className={`absolute right-[20%] top-1/2 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 scale-x-[-1] items-center justify-center rounded-lg bg-primary ${deactivateButtons ? "opacity-50" : ""}`}>
        <ArrowIcon color={"#FFF"} dimensions={"50px"} />
      </button>
    </div>
  );
};

export default Reviews;
