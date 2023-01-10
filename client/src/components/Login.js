// import axios from "axios";
import Header from "./homepage/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LargeFooter from "./homepage/LargeFooter";
import Footer from "./homepage/Footer";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Appstore from "../components/images/registerpage.png";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <header className="shadow-md">
        <Header />
      </header>
      <div className="bg-[#F8F8F8] flex justify-center items-center gap-[60px] px-[20px] py-[60px] h-[851px] mt-1">
        <div className="bg-[#FFFFFF] border-[1px] border-grey w-[456px] h-[731px] px-[24px] py-[32px]">
          <h2 className="mb-[20px] text-[32px]">Log in</h2>
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

          <div className="flex gap-[10px] mt-[10px]">
            <input className="h-[20px] w-[20px] bg-[#067A46]" type="checkbox" />
            <div className="flex gap-[110px]">
              <p>Keep me signed in</p>
              <p className="text-[#067A46] underline underline-offset-2">
                Forgot Password?
              </p>
            </div>
          </div>
          <button
            // onClick={handleRegister}
            className="border-[1px] border-[#367B47] rounded h-[48px] w-[406px] mt-[25px] bg-[#067A46] text-[white] hover:bg-[#2E6936] hover:border-2  mb-[15px]"
          >
            Log in
          </button>
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

export default Login;
