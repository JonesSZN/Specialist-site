import { Header, Hero, CardsSection, Features, Testimonials, Pricing, Work, Footer } from "./sections/";

function App() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Hero />
            <CardsSection />
            <Features />
            <Testimonials />
            <Pricing />
            <Work />
            <Footer />
        </div>
    );
}

export default App;
