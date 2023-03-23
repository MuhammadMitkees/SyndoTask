import "./App.css";
import Home from "./Pages/Home/Home";
import CompanyDetails from "./Pages/CompanyDetails/CompanyDetails";
import "./Fonts/Roboto-Regular.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact index element={<Home />} />
        <Route exact path="/CompanyDetails" element={<CompanyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
