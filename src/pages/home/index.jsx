import {
  ForClientsSection,
  ForProvidersSection,
  Header,
  TestimonialsSection,
  ExploreSection,
  WhyusSection,
} from "./components";

const HomePage = () => {
  return (
    <>
      <Header />
      <ExploreSection />
      <WhyusSection />
      <TestimonialsSection />
      <ForClientsSection />
      <ForProvidersSection />
    </>
  );
};

export default HomePage;
