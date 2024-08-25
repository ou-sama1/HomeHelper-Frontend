const SmileIcon = ({ color, dimensions }) => {
  return (
    <svg
      fill={color}
      width={dimensions}
      height={dimensions}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.874 9A4.005 4.005 0 0 1 8 12a4.005 4.005 0 0 1-3.874-3h7.748zM0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm2 0c0 3.307 2.686 6 6 6 3.307 0 6-2.686 6-6 0-3.307-2.686-6-6-6-3.307 0-6 2.686-6 6zm3-3h2v2H5V5zm4 0h2v2H9V5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SmileIcon;