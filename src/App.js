import "./App.css";
import Home from "./Pages/Home/Home";
import CompanyDetails from "./Pages/CompanyDetails/CompanyDetails";
import "./Fonts/Roboto-Regular.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompanyDetails />}>
          <Route index element={<CompanyDetails />} />
          <Route path="/CompanyDetails" element={<CompanyDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
