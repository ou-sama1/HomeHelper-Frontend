import GroupOfWorkers from "../../../../assets/group-of-workers.png";
import { Link } from "react-router-dom";
const ForProvidersSection = () => {
  return (
    <>
      <section
        id="for-providers-section"
        className="flex h-auto w-full flex-col items-center justify-between gap-10 px-5 pt-10 sm:px-10 lg:h-[calc(100vh-50px)] lg:flex-row lg:gap-0 lg:pt-0"
      >
        <div className="z-10 flex w-full flex-col items-center justify-center gap-10 text-center lg:w-3/4 lg:items-start lg:text-left">
          <span className="flex flex-col gap-2 xl:gap-10">
            <h1 className="text-6xl font-bold sm:text-7xl xl:text-8xl xl:leading-28">
              Devenez un prestataire de services
            </h1>
            <p className="text-xl leading-10 text-quaternary sm:text-2xl lg:w-4/5">
              inscrivez-vous en tant que prestataire et commencez à travailler !
            </p>
          </span>
          <span className="flex w-full flex-col gap-5 text-2xl font-bold sm:w-3/5 lg:w-auto lg:flex-row">
            <Link
              to="/SignUp"
              className="hover:text- rounded-lg border border-primary px-5 py-7 text-center text-primary transition hover:border-primary hover:bg-primary xl:px-12"
            >
              S'inscrire
            </Link>
          </span>
        </div>
        <img className="w-120" src={GroupOfWorkers} alt="group-of-workers" />
      </section>
    </>
  );
};

export default ForProvidersSection;
