import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./component/home/Home";
import EmptyCart from "./component/emptyCart/EmptyCart1";
import Navbars from "./component/navbar/Navbars";
import ContactUs from "./component/contact/ContactUs";
import Footer from "./component/footer/Footer";
import NotFound from "./component/not_found/NotFound";

function App() {

  return (

    <Router>

      <Navbars />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<EmptyCart />} />

        <Route path="/*" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

      <ContactUs />

      <Footer />

    </Router>
    
  );
}

export default App;
