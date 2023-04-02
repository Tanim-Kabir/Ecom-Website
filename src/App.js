import About from './components/Overview';
import AllInOne from './components/Customers';
import Footer from './components/Footer';
import Hero from './components/Home';
import Navbar from './components/Navbar'
import Pricing from './components/Products';
import Support from './components/Cart'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
