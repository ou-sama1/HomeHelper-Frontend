import {
  ForClientsSection,
  Header,
  TestimonialsSection,
  ExploreSection,
} from "./components";

const HomePage = () => {
  return (
    <>
      <Header />
      <ExploreSection />
      {/* WhyusSection */}
      <TestimonialsSection />
      <ForClientsSection />
      <ForProvidersSection />
    </>
  );
};

export default HomePage;
