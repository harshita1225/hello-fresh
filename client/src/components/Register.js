import axios from "axios";
import Header from "./homepage/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LargeFooter from "./homepage/LargeFooter";
import Footer from "./homepage/Footer";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import Appstore from "../components/images/registerpage.png";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log("Register Response", response);

    if (response.data.success) navigate("/");
  };

  return (
    <div>
      <header className="shadow-md">
        <Header />
      </header>
      <div className="bg-[#F8F8F8] flex justify-center items-center gap-[60px] px-[20px] py-[60px] mt-1 h-[612px]">
        <div className="bg-[#FFFFFF] border-[1px] border-grey w-[456px] px-[24px] py-[32px]">
          <h2 className="mb-[20px] text-[32px]">Create a HelloFresh account</h2>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="border-[1px] border-black rounded w-[406px] h-[48px] p-[12px] mb-[20px]"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Choose a password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border-[1px] border-black rounded w-[406px] h-[48px] p-[12px] "
            />
            <div className="absolute top-[13px] right-[20px]">
              <AiOutlineEyeInvisible size={20} />
            </div>
          </div>
          <p className="text-[12px] ml-[-150px] mt-[3px] mb-[25px]">
            Password should be a minimum of 5 characters
          </p>
          <div className="flex gap-[10px]">
            <input className="h-[20px] w-[20px] bg-[#067A46]" type="checkbox" />
            <p>Keep me signed in</p>
          </div>
          <button
            onClick={handleRegister}
            className="border-[1px] border-[#367B47] rounded h-[48px] w-[406px] mt-[25px] bg-[#067A46] text-[white] hover:bg-[#2E6936] hover:border-2  mb-[15px]"
          >
            Continue
          </button>
          <Link to="/login" className="text-[#067A46] underline">
            Go back
          </Link>
        </div>
        <div>
          <img src={Appstore} alt="" />
        </div>
      </div>
      <footer className="border-y-[1px] border-grey">
        <LargeFooter />
        <Footer />
      </footer>
    </div>
  );
};
export default Register;
