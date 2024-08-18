import WorkerGuyImage from "../../../../assets/worker-guy.png";

const Header = () => {
  return (
    <section
      id="header-section"
      className="flex w-full flex-row justify-between px-10"
    >
      <div className="z-10 flex w-3/4 flex-col justify-evenly">
        <span className="flex flex-col gap-10">
          <h1 className="text-8xl font-bold leading-28">
            La meilleure solution pour chaque problème de maison.
          </h1>
          <p className="w-4/5 text-2xl leading-10 text-quaternary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            tincidunt vivamus felis elementum eget enim elementum nisl.
          </p>
        </span>
        <span className="flex gap-5 text-2xl font-bold">
          <a
            href="/services"
            className="rounded-lg border bg-primary px-12 py-7 text-white transition hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Reserve maintenant
          </a>
          <a
            href="#"
            className="rounded-lg border bg-white px-12 py-7 hover:underline"
          >
            Voir plus
          </a>
        </span>
      </div>
      <img src={WorkerGuyImage} alt="worker image" className="w-120" />
    </section>
  );
};

export default Header;
