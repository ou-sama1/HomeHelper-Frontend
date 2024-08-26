import GroupOfWorkers from "../../../../assets/group-of-workers.png";
import { Link } from "react-router-dom";
const ForProvidersSection = () => {
  return (
    <section
      id="for-providers-section"
      className="lg:h-150 flex w-full flex-col items-center justify-between gap-10 px-5 pt-24 sm:px-10 md:px-10 lg:flex-row lg:gap-0 lg:pt-0"
    >
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 text-center lg:w-3/4 lg:items-start lg:text-left">
        <span className="flex flex-col gap-2 xl:gap-10">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Devenez un prestataire de services
          </h2>
          <p className="text-xl font-medium text-quaternary md:text-2xl lg:w-4/5 lg:text-3xl">
            inscrivez-vous en tant que prestataire et commencez à travailler !
          </p>
        </span>

        <Link
          to="/SignUp"
          className="rounded-lg border border-primary px-14 py-6 text-center text-2xl font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-white lg:text-3xl"
        >
          S'inscrire
        </Link>
      </div>
      <img className="w-120" src={GroupOfWorkers} alt="group-of-workers" />
    </section>
  );
};

export default ForProvidersSection;
