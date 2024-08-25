import GroupOfWorkers from "../../../../assets/group-of-workers.png";
import { Link } from "react-router-dom";
const ForProvidersSection = () => {
  return (
    <section
      id="for-providers-section"
      className="flex w-full flex-col items-center justify-evenly px-10 pt-4 text-center lg:flex-row lg:pt-0 lg:text-left"
    >
      <div className="flex flex-col gap-9">
        <h2 className="text-center text-6xl font-bold lg:text-left">
          Devenez un prestataire de services
        </h2>
        <p className="text-2xl leading-10 text-quaternary lg:w-4/5">
          inscrivez-vous en tant que prestataire et commencez à travailler !
        </p>
        <span>
          <Link
            to="/SignUp"
            className="w-full rounded-lg border border-primary px-12 py-7 text-2xl font-bold text-primary lg:w-auto"
          >
            S'inscrire
          </Link>
        </span>
      </div>
      <img className="w-120" src={GroupOfWorkers} alt="group-of-workers" />
    </section>
  );
};

export default ForProvidersSection;
