import { Link, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="md:p-12 p-4">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-bold underline">My App</h1>
          <nav className="flex gap-2">
            <Link className="text-blue-500 hover:underline" to="/">
              Home
            </Link>
            <Link className="text-blue-500 hover:underline" to="/contact">
              Contact
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
