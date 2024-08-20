import { QuotesIcon } from "../../../../components/icons";

const Review = ({
  isCenter,
  direction,
  reviewData: { reviewerImage, reviewerName, reviewText },
}) => {

  let animation = "";
  switch (direction) {
    case "r":
      animation = "animate-fadeLeft";
      break;
    case "r2":
      animation = "animate-fadeLeft2";
      break;
    case "l":
      animation = "animate-fadeRight";
      break;
    case "l2":
      animation = "animate-fadeRight2";
      break;
  
    default:
      break;
  }

  return (
    <div
      className={`relative flex h-104 w-3/5 shrink-0 flex-col items-center justify-between rounded-lg border-2 p-6 ${animation} ${!isCenter ? "blur-[2px]" : ""}`}
    >
      <QuotesIcon color={"#FD8200"} dimensions={"60px"} />
      <p className="line-clamp-5 text-center text-3xl">{reviewText}</p>
      <span className="flex flex-row items-center gap-3">
        <img
          src={reviewerImage}
          alt="profile picture"
          className="h-20 w-20 rounded-full object-cover"
        />
        <span className="text-2xl font-bold">{reviewerName}</span>
      </span>
    </div>
  );
};

export default Review;
