import {
  CheckIcon,
  ThumbsupIcon,
  StarsIcon,
  PipesIcon,
  ToolsIcon,
  PainterIcon,
  ThunderIcon,
  SawIcon,
  VacuumIcon,
} from "../../../../components/icons";

const servicesShowcaseData = [
  {
    id: 0,
    name: "Plomberie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <PipesIcon color={"white"} dimensions={"70px"} />,
  },
  {
    id: 1,
    name: "Rénovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <ToolsIcon color={"white"} dimensions={"70px"} />,
  },
  {
    id: 2,
    name: "Peinture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <PainterIcon color={"white"} dimensions={"70px"} />,
  },
  {
    id: 3,
    name: "Travaux électriques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <ThunderIcon color={"white"} dimensions={"70px"} />,
  },
  {
    id: 4,
    name: "Charpenterie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <SawIcon color={"white"} dimensions={"70px"} />,
  },
  {
    id: 5,
    name: "Ménage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe fuga debitis.",
    icon: <VacuumIcon color={"white"} dimensions={"70px"} />,
  },
];

const cards = [
  {
    id: 0,
    icon: <CheckIcon color={"#fff"} dimensions={"35px"} />,
    text: "Expertise pro",
  },
  {
    id: 1,
    icon: <ThumbsupIcon color={"#fff"} dimensions={"35px"} />,
    text: "Services Fiables",
  },
  {
    id: 2,
    icon: <StarsIcon color={"#fff"} dimensions={"35px"} />,
    text: "Tarifs adorables",
  },
];

const ExploreSection = () => {
  return (
    <section
      id="explore-section"
      className="relative flex w-full flex-col items-center justify-center gap-24 bg-secondary px-2 pb-24 pt-48 text-center text-white md:px-10"
    >
      <ul className="absolute -top-0 flex w-full -translate-y-1/2 flex-row justify-between px-1 sm:px-5 md:px-10 lg:-top-7 lg:translate-y-0">
        {cards.map(({ id, icon, text }) => (
          <li
            className="flex h-28 w-28 flex-col items-center justify-center gap-4 rounded-full bg-tertiary px-5 py-4 shadow-lg sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-28 lg:w-1/4 lg:rounded-lg"
            key={id}
          >
            {icon}
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl">
              {text}
            </span>
          </li>
        ))}
      </ul>
      <h2 className="w-auto text-4xl font-bold md:text-5xl lg:text-6xl xl:w-4/5">
        Explorer notre gamme complète de services professionnels
      </h2>
      <ul className="grid-col-1 m-0 grid gap-20 px-2 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-20 xl:gap-28">
        {servicesShowcaseData.map(({ id, name, description, icon }) => (
          <li
            key={id}
            className="flex w-full flex-col items-center gap-5 text-center sm:w-72 xl:w-80"
          >
            {icon}
            <h5 className="text-lg font-bold sm:text-xl md:text-2xl">{name}</h5>
            <p className="text-sm sm:text-lg md:text-xl">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExploreSection;
