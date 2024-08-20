import {
  ForClientsSection,
  Header,
  TestimonialsSection,
  Explore,
} from "./components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Explore />
      {/* WhyusSection */}
      <TestimonialsSection />
      <ForClientsSection />
    </>
  );
};

export default HomePage;
