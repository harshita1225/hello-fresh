// import axios from "axios";
import Header from "./homepage/Header";
import axios from "axios";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import LargeFooter from "./homepage/LargeFooter";
import Footer from "./homepage/Footer";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Appstore from "../components/images/registerpage.png";
import Or from "../components/images/login-or.png";
import { GoMail } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Context);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("/users/login", data);
    console.log("~ handleLogin ~ response", response);

    if (response.data.success) {
      dispatch({
        type: "login",
        payload: response.data.user,
      });

      navigate("/");
    } else {
      if (response.data.errorId === 1) alert("Wrong email or password");
    }
  };

  console.log("~ Login ~ state", state);

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
            onClick={handleLogin}
            className="border-[1px] border-[#367B47] rounded h-[48px] w-[406px] mt-[25px] bg-[#067A46] text-[white] hover:bg-[#2E6936] hover:border-2  mb-[15px]"
          >
            Log in
          </button>

          <img src={Or} className="mt-[20px]" />

          <div className="relative">
            <div className="absolute top-[33px] left-[10px]">
              <GoMail size={23} color="#067A46" />
            </div>
            <button className="border-[1px] border-[#367B47] rounded h-[48px] w-[406px] text-[#067A46] hover:bg-[#E3F5BF] hover:border-2 mt-[22px]">
              Log in without password
            </button>
          </div>
          <div>
            <div className="relative">
              <div className="absolute top-[23px] left-[10px]">
                <AiFillFacebook
                  style={{ fill: "rgb(255, 255, 255)", fontSize: "2rem" }}
                />
              </div>
            </div>{" "}
            <button className="h-[48px] w-[406px] rounded text-[14px] bg-[#176FE5] text-white mt-[15px]">
              Log in with Facebook
            </button>
          </div>
          <div>
            <div className="relative">
              <div className="absolute top-[23px] left-[10px]">
                <FcGoogle
                  style={{ fill: "rgb(255, 255, 255)", fontSize: "2rem" }}
                />
              </div>
            </div>{" "}
            <button className="h-[48px] w-[406px] rounded text-[14px] bg-[#4185F4] text-white mt-[15px]">
              Log in with Google
            </button>
          </div>
          <div>
            <div className="relative">
              <div className="absolute top-[23px] left-[10px]">
                <RiAppleLine
                  style={{ fill: "rgb(255, 255, 255)", fontSize: "2rem" }}
                />
              </div>
            </div>{" "}
            <button className="h-[48px] w-[406px] rounded text-[14px] bg-[#000000] text-white mt-[15px]">
              Log in with Apple
            </button>
          </div>
          <div className="flex justify-center gap-[20px] mt-[30px]">
            <p>Don't have an account?</p>
            <Link to="/register">
              <p className="text-[#067A46] underline underline-offset-2">
                Sign up
              </p>
            </Link>
          </div>
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
