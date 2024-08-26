import Reviews from "./Reviews";

const data = [
  {
    id: 0,
    reviewerImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reviewerName: "Salma ALAMI",
    reviewText:
      "Je suis très satisfait du service de nettoyage. L'équipe a fait un travail impeccable, ma maison est propre et bien ordonnée. Je recommande vivement leurs services !",
  },
  {
    id: 1,
    reviewerImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reviewerName: "Mohammed FAHIM",
    reviewText:
      "Excellente expérience avec ce plombier ! Professionnel, ponctuel et très efficace, il a résolu mon problème de fuite en un rien de temps. De plus, il a pris le temps de m'expliquer les travaux réalisés, ce que j'ai beaucoup apprécié. Je recommande vivement ses services pour leur qualité et leur sérieux.",
  },
  {
    id: 2,
    reviewerImage:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reviewerName: "Wissal FIKRI",
    reviewText:
      "Service de peinture impeccable ! Travail soigné, équipe professionnelle et résultat parfait. Je recommande vivement.",
  },
  {
    id: 3,
    reviewerImage:
      "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reviewerName: "Oussama TALIBI",
    reviewText:
      "Excellent service d'électricien ! Travail rapide, propre et professionnel. Je recommande fortement.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="flex h-screen w-full flex-col items-center justify-center gap-10 px-0 py-16 lg:gap-24 lg:px-10">
      <h2 className="px-1 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
        Découvrez ce que nos clients disent sur nous
      </h2>
      <Reviews data={data} />
    </section>
  );
};

export default TestimonialsSection;
