import Reviews from "./Reviews";

const data = [
    {
        id : 0,
        reviewerImage : "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        reviewerName : "Salma ALAMI",
        reviewText : "Je suis très satisfait du service de nettoyage. L'équipe a fait un travail impeccable, ma maison est propre et bien ordonnée. Je recommande vivement leurs services !",
    },
    {
        id : 1,
        reviewerImage : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        reviewerName : "Mohammed FAHIM",
        reviewText : "Excellente expérience avec ce plombier ! Professionnel, ponctuel et très efficace, il a résolu mon problème de fuite en un rien de temps. De plus, il a pris le temps de m'expliquer les travaux réalisés, ce que j'ai beaucoup apprécié. Je recommande vivement ses services pour leur qualité et leur sérieux.",
    },
    {
        id : 2,
        reviewerImage : "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        reviewerName : "Wissal FIKRI",
        reviewText : "Service de peinture impeccable ! Travail soigné, équipe professionnelle et résultat parfait. Je recommande vivement.",
    },
    {
        id : 3,
        reviewerImage : "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        reviewerName : "Oussama TALIBI",
        reviewText : "Excellent service d'électricien ! Travail rapide, propre et professionnel. Je recommande fortement.",
    },
];

const TestimonialsSection = () => {
    return(
        <section className="flex w-full flex-col px-10 py-16 items-center">
            <h1 className="font-bold text-6xl my-14">Découvrez ce que nos clients disent sur nous</h1>
            <Reviews data={data} />
        </section>
    )
}

export default TestimonialsSection;