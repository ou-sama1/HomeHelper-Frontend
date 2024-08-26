import { BroomIcon, GroupIcon, SmileIcon } from "../../../../components/icons";

const cards = [
  {
    id: 0,
    icon: <BroomIcon color={"white"} dimensions={"35px"} />,
    name: "+200 Services",
    description:
      "Une large gamme de services pour répondre à tous vos besoins domestiques.",
  },
  {
    id: 1,
    icon: <GroupIcon color={"white"} dimensions={"35px"} />,
    name: "+1,500 Fournisseurs de services",
    description:
      "Professionnels expérimentés et qualifiés, à votre disposition.",
  },
  {
    id: 2,
    icon: <SmileIcon color={"white"} dimensions={"35px"} />,
    name: "+10K Clients satisfaits",
    description:
      "Des milliers de clients satisfaits qui nous font confiance.",
  },
];

const WhyusSection = () => {
  return (
    <section
      id="whyus-section"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-28 bg-gray-100 px-1 py-24 text-center md:px-10"
    >
      <div className="flex flex-col items-center gap-5">
        <h2 className="px-1 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Pourquoi Nous ?
        </h2>
        <p className="text-xl font-bold leading-normal md:text-2xl md:leading-10 lg:w-4/5">
          Notre plateforme vous connecte à des professionnels vérifiés pour une
          expérience simple et fiable, avec une garantie de satisfaction.
        </p>
      </div>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-10">
        {cards.map(({ id, icon, name, description }) => (
          <li
            key={id}
            className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-white px-10 py-5 sm:h-72 sm:w-4/5 lg:w-2/5 xl:w-120"
          >
            <span className="rounded-full bg-tertiary p-2">{icon}</span>
            <span className="h-10 text-lg font-bold sm:text-xl md:text-2xl">
              {name}
            </span>
            <p className="text-sm text-gray-600 sm:text-lg md:text-xl">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyusSection;
