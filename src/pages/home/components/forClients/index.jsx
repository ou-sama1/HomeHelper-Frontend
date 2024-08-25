import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../components/icons";

const ForClientsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 bg-secondary px-2 py-24 text-center text-white md:px-10 lg:h-144">
      <h2 className="text-5xl font-bold lg:text-6xl">
        Prêt à mettre votre maison en parfait état ?
      </h2>
      <p className="text-2xl font-medium lg:text-3xl">
        Découvrez nos différents services et réservez dès maintenant
      </p>
      <Link
        to="/services"
        className="mt-10 flex items-center justify-between rounded-lg border bg-primary px-5 py-5 text-2xl font-bold transition hover:bg-secondary md:px-10 lg:text-3xl"
      >
        Nos services
        <ArrowIcon color={"#FFF"} dimensions={"40px"} direction={"right"} />
      </Link>
    </section>
  );
};

export default ForClientsSection;
