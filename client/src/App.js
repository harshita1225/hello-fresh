import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Address from "./components/plans/Address";
import PaymentPage from "./components/plans/PaymentPage";
import Homepage from "./components/homepage/Homepage";
import PlansPage from "./components/plans/PlansPage";
import EditPlan from "./components/plans/EditPlan";
import Register from "./components/Register";
import Login from "./components/Login";
import MenusPage from "./components/menuspage/MenusPage";
import Cart from "./components/plans/Cart";
import ConfirmationPage from "./components/plans/ConfirmationPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/edit/:id" element={<EditPlan />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
