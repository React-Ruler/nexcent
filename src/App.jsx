import React from "react";
import {
  Navbar,
  Hero,
  Clients,
  Community,
  Unlock,
  Achievements,
  Unlocker,
  Faq,
  Testimonials,
  Footer,
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Unlocker />
      <Testimonials />
      <Faq />
      <Footer />
    </React.Fragment>
  );
};

export default App;
