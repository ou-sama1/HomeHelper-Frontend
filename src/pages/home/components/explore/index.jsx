import Verified from "../../../../components/icons/Verified";
import Like from "../../../../components/icons/Like";
import Stars from "../../../../components/icons/Stars";
import Plombier from "../../../../components/icons/Plombier";
import Renovation from "../../../../components/icons/Renovation";
import Peinture from "../../../../components/icons/Peinture";
import Electrique from "../../../../components/icons/Electrique";
import Charpenterie from "../../../../components/icons/Charpenterie";
import Menage from "../../../../components/icons/Menage";

const Explore = () => {
  return (
    <section
      id="explore-section"
      className="relative flex w-full flex-col items-center gap-24 bg-[#042134] px-10 pb-24 text-white"
    >
      <div className="absolute -top-14 left-[50%] grid w-full translate-x-[-50%] grid-cols-3 gap-8 px-10">
        <div className="flex flex-col items-center gap-4 rounded-[20px] bg-tertiary p-4 text-white">
          <div className="w-10">
            <Verified color={"#fff"} />
          </div>
          <span className="text-2xl">Expertise professionnelle</span>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-[20px] bg-tertiary p-4 text-white">
          <div className="w-10">
            <Like color={"#fff"} />
          </div>
          <span className="text-2xl">Services Fiables</span>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-[20px] bg-tertiary p-4 text-white">
          <div className="w-10">
            <Stars color={"#fff"} />
          </div>
          <span className="text-2xl">Tarifs adorables</span>
        </div>
      </div>
      <div className="mt-40 w-3/4 text-center text-6xl font-bold">
        Explorer notre gamme complète de services professionnels
      </div>
      <div className="grid w-full grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Plombier />
            <span className="text-2xl font-bold">Plomberie</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Renovation />
            <span className="text-2xl font-bold">Rénovation</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Peinture />
            <span className="text-2xl font-bold">Peinture</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Electrique />
            <span className="text-2xl font-bold">Travaux électriques</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Charpenterie />
            <span className="text-2xl font-bold">Charpenterie</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Menage />
            <span className="text-2xl font-bold">Ménage</span>
          </div>
          <div className="w-1/2 text-center font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            saepe fuga debitis.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
