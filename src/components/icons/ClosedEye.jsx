import "../../index.css";

const ClosedEye = ({ color, dimensions }) => {
  return (
    <svg
      fill={color}
      width={dimensions}
      height={dimensions}
      viewBox="0 -5 16 16"
      id="eye-close-16px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Path_111"
        data-name="Path 111"
        d="M34,11a9.326,9.326,0,0,1-7.94-5.263.5.5,0,0,1,.88-.474A8.333,8.333,0,0,0,34,10a8.333,8.333,0,0,0,7.06-4.737.5.5,0,1,1,.88.474A9.326,9.326,0,0,1,34,11Z"
        transform="translate(-26 -5)"
      />
    </svg>
  );
};

export default ClosedEye;
