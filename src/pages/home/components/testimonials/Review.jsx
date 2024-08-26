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
      className={`relative flex h-96 w-full shrink-0 flex-col bg-white items-center justify-between rounded-lg border-2 p-6 lg:w-4/5 xl:h-104 xl:w-3/5 ${animation} ${!isCenter ? "blur-[2px]" : ""}`}
    >
      <QuotesIcon color={"#FD8200"} dimensions={"60px"} />
      <p className="line-clamp-5 text-center text-2xl lg:text-3xl italic font-light">
        {reviewText}
      </p>
      <span className="flex flex-row items-center gap-3">
        <img
          src={reviewerImage}
          alt="profile picture"
          className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
        />
        <span className="text-xl font-bold lg:text-2xl">{reviewerName}</span>
      </span>
    </div>
  );
};

export default Review;
