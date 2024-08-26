import { Link } from "react-router-dom";
import WorkerGuyImage from "../../../../assets/worker-guy.png";

const Header = () => {
  return (
    <section
      id="header-section"
      className="flex h-auto w-full flex-col items-center justify-between gap-10 px-5 pt-10 sm:px-10 lg:h-[calc(100vh-50px)] lg:flex-row lg:gap-0 lg:pt-0"
    >
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 text-center lg:w-3/4 lg:items-start lg:text-left">
        <span className="flex flex-col gap-2 xl:gap-10">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl xl:leading-28">
            La meilleure solution pour chaque problème de maison.
          </h1>
          <p className="text-lg leading-10 text-quaternary md:text-2xl lg:w-4/5 xl:text-3xl">
            Nous vous connectons avec les meilleurs professionnels pour tous vos
            besoins domestiques.
          </p>
        </span>
        <span className="flex w-full flex-col gap-5 text-xl font-bold sm:w-3/5 md:text-2xl lg:w-auto lg:flex-row">
          <Link
            to="/services"
            className="rounded-lg border bg-primary px-5 py-7 text-center text-white transition hover:border-primary hover:bg-transparent hover:text-primary xl:px-12"
          >
            Reserve maintenant
          </Link>
          <a
            href="#explore-section"
            className="rounded-lg border bg-white px-5 py-7 text-center hover:underline xl:px-12"
          >
            Voir plus
          </a>
        </span>
      </div>
      <img src={WorkerGuyImage} alt="worker image" className="w-80 lg:w-120" />
    </section>
  );
};

export default Header;
