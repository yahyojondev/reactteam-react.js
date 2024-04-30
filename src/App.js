import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Wishlist from "./pages/wishlist/Wishlist";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
