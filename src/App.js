import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Business } from "./business";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { Work } from "./Work";
import { Footer } from "./Footer";
function App() {
  return (
    <div className="  flex flex-col items-center">
      <Header />
      <Hero />
      <Business />
      <Features />
      <Testimonials />
      <Pricing />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
