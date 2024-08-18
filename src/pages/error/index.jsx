import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-center text-7xl text-gray-700">Page non trouvée</p>
        <Link to="/" className="mt-4 text-xl text-blue-500 hover:text-blue-700">
            Retour à l'accueil
        </Link>
    </div>
    );
};

export default ErrorPage;
