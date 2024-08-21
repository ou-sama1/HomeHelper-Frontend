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
      {/* Homepage sections components go here */}
    </>
  );
};

export default HomePage;
