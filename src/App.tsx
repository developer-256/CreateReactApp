import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/NavbarAndFooter/Footer";
import Navbar from "./components/NavbarAndFooter/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="relative flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
