import Header from "./features/header";
import Hero from "./features/hero";
import Features from "./features/features";
import Menu from "./features/menu";
import Contact from "./features/contact";
import Footer from "./features/footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
