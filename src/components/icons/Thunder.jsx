const ThunderIcon = ({ color, dimensions }) => {
  return (
    <svg
      width={dimensions}
      height={dimensions}
      viewBox="0 0 50 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8333 58.4998H0L29.1667 0.166504V33.4998H50L20.8333 91.8332V58.4998Z"
        fill={color}
      />
    </svg>
  );
};

export default ThunderIcon;
