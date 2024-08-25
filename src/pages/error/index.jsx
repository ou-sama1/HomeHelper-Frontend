import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="flex min-h-screen flex-col items-center justify-center gap-5"
    >
      <h1 className="text-8xl font-bold text-secondary sm:text-9xl">404</h1>
      <p className="text-center text-4xl text-secondary sm:text-5xl md:text-6xl lg:text-7xl">
        Page non trouvée
      </p>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-primary px-5 py-2 text-lg font-bold text-white shadow-xl hover:bg-tertiary md:px-10 md:py-5 md:text-xl"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
