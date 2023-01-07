import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import PaymentPage from "./components/plans/PaymentPage";
import Homepage from "./components/homepage/Homepage";
import PlansPage from "./components/plans/PlansPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
