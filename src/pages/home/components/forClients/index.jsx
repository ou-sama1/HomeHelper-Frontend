import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../components/icons";

const ForClientsSection = () => {
    return(
        <section className="flex w-full flex-col px-10 py-24 items-center bg-secondary text-white gap-5 text-center h-144 justify-center">
            <h1 className="text-6xl font-bold">Prêt à mettre votre maison en parfait état ?</h1>
            <p className="text-3xl font-medium">Découvrez nos différents services et réservez dès maintenant</p>
            <Link to="/services" className="bg-primary text-3xl mt-10 px-10 py-5 rounded-lg font-bold flex items-center justify-between border transition hover:bg-secondary">
                Nos services
                <ArrowIcon  color={"#FFF"} dimensions={"50px"} direction={"right"} />
            </Link>
        </section>
    )
}

export default ForClientsSection;