import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Address from "./components/plans/Address";
import PaymentPage from "./components/plans/PaymentPage";
import Homepage from "./components/homepage/Homepage";
import PlansPage from "./components/plans/PlansPage";
import Testtoggle from "./components/plans/Testtoggle";
import MenusPage from "./components/menuspage/MenusPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/test" element={<Testtoggle />} />
          <Route path="/menus" element={<MenusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
