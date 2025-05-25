import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./pages/Navbar";
import FirstPage from "./pages/firstPage"
import Features from "./pages/features";
import Demo from "./pages/demo";
import Testimonials from "./pages/testimonials"
import PricingSection from "./pages/pricing"
import FAQSection from "./pages/faq"
import Footer from "./pages/footer";
import Signup from "./components/signup";
import Login from "./components/login";


function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/signup" || location.pathname === "/login";
  return (
    <>
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstPage />
              <Features />
              <Demo />
              <Testimonials />
              <PricingSection />
              <FAQSection />
              {!hideNavAndFooter && <Footer />}
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;