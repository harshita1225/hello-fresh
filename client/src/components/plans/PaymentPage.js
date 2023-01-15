import React from "react";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import ProgressBar from "../plans/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import paymenticons from "../images/paymenticons.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import flexplan from "../images/flexplan.png";
import { Context } from "../../Context";
import { useContext } from "react";
import axios from "axios";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { planData, setPlanData, dispatch } = useContext(Context);
  const [data, setData] = useState({
    creditcard: 0,
    expdate: "",
    cvv: 0,
  });

  const handleNext = async () => {
    if (!data.creditcard || !data.expdate || !data.cvv) {
      alert("Please make the necessary selection");
      return;
    } else {
      setPlanData({
        ...planData,
        creditcard: data.creditcard,
        expdate: data.expdate,
        cvv: data.cvv,
      });

      const response = await axios.post("/plans/add", planData);
      console.log("req body", response);
      if (response.data.success) {
        dispatch({
          type: "addPlan",
          payload: response.data.plan,
        });
      }
      navigate("/cart");
    }
  };
  return (
    <>
      <ProgressBar
        selectPlan={false}
        selectMeals={false}
        address={false}
        checkout={true}
      />
      <div className="w-screen h-screen flex-col ">
        <div className="">
          <div className=" h-[850px] bg-white rounded-2xl py-10">
            <div className="w-[1112px]  flex-col  font-sans mx-auto">
              <h3 className=" text-[20px] mb-4">Payment Information</h3>
              <div className=" px-10 ">
                <div className=" px-5 border-2 border-[#067A46]">
                  <div className="w-full flex justify-between mb-20 ">
                    <div className="flex items-center gap-3 mt-3">
                      <BsFillCheckCircleFill className="text-[#067A46]" />
                      Add credit or debit card{" "}
                    </div>
                    <div className="mt-3">
                      <img src={paymenticons} alt="paymenticons" />
                    </div>
                  </div>
                  <p className="text-[16px] text-left font-light mb-5">
                    Please do not add a prepaid / gift cards as we don't accept
                    them
                  </p>
                  <div>
                    <div className="flex gap-5 justify-center mb-5">
                      {" "}
                      <TextField
                        style={{
                          width: "30rem",
                          outlineColor: "gray",
                        }}
                        id="outlined-basic"
                        label="Credit Card Number"
                        variant="outlined"
                        onChange={(e) =>
                          setData({ ...data, creditcard: e.target.value })
                        }
                      />
                      <TextField
                        style={{ width: "30rem" }}
                        id="outlined-basic"
                        label="Exp Date"
                        variant="outlined"
                        onChange={(e) =>
                          setData({ ...data, expdate: e.target.value })
                        }
                      />
                      <TextField
                        style={{
                          width: "30rem",
                        }}
                        id="outlined-basic"
                        label="CVV"
                        variant="outlined"
                        onChange={(e) =>
                          setData({ ...data, cvv: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[69px] flex items-center justify-between px-5 border-2 mt-5">
                  <div className="flex items-center gap-5 text-[14px] font-light">
                    <BsFillCheckCircleFill className="text-[#067A46]" />
                    Use PayPal Account
                  </div>
                  <img
                    className="w-[70px] h-[70px] object-contain i"
                    src="https://cdn-icons-png.flaticon.com/512/196/196566.png?w=360"
                    alt="paypal"
                  />
                </div>
                <div className="w-full px-5 border-2 mt-3">
                  <p className="text-[14px] text-[#067A46] text-left mb-5">
                    Do you have a promo code?
                  </p>
                  <div className="flex justify-between py-5">
                    <div className="flex justify-center items-center text-left">
                      <img
                        className="w-[65px] mr-2"
                        src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_fit,fl_lossy/hellofresh_website/MojitoSaveMoneyIcon.svg"
                        alt="img1"
                      />
                      <div>
                        <p className="font-semibold text-[16px]">Save Money</p>
                        <p className="text-[14px]">save 30% on groceries.</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-left">
                      <img
                        className="w-[65px] mr-2"
                        src={flexplan}
                        alt="flexplan"
                      />
                      <div>
                        <p className="font-semibold text-[16px]">
                          Flexible For You
                        </p>
                        <p className="text-[14px]">
                          Easily cancel your subscription through
                        </p>
                        <p className="text-[14px]">
                          your account 5 days prior to delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] font-semibold m-10">
                    By clicking “Place order & select meals”, I agree to the{" "}
                    <a className="text-blue-700 underline" href="/">
                      Terms and Conditions
                    </a>
                    , the{" "}
                    <a className="text-blue-700 underline" href="/">
                      Privacy Policy
                    </a>{" "}
                    and, unless I cancel, the weekly auto-renewal price of
                    $124.87 after my discount period ends.
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#067A46",
                      width: "980px",
                    }}
                    variant="contained"
                    onClick={handleNext}
                  >
                    Place order & select meals
                  </Button>

                  <div className="text-light mt-10 text-slate-500">
                    <p>© HelloFresh 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[32px] text-[#242424] text-[24px] text-center mt-[100px] mb-[15px]">
            FAQs
          </div>
          <div className="flex justify-center">
            <div className="w-[360px] h-[232px] px-[16px] text-center">
              <div className="w-[340px] h-[56px] my-[20px]">
                <p className="text-[20px] text-[#242424] ">
                  What do I do if I have an issue with my shipment?
                </p>
              </div>
              <div className="w-[340px] ">
                <p className="text-[16px] text-[#242424]">
                  {" "}
                  It rarely happens, but if you ever have an issue with your
                  delivery or meals, our award-winning customer support team is
                  available around the clock to assist you.
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[232px] px-[16px] text-center">
              <div className="w-[340px] h-[56px] my-[20px]">
                <p className="text-[20px] text-[#242424] ">
                  Is my data and privacy safe?
                </p>
              </div>
              <div className="w-[340px] ">
                <p className="text-[16px] text-[#242424]">
                  {" "}
                  Your data and privacy is safe and secure with us. Online
                  payments are encoded with industry leading encryption and we
                  never sell or distribute your personal information.
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[232px] px-[16px] text-center">
              <div className="w-[340px] h-[56px] my-[20px]">
                <p className="text-[20px] text-[#242424] ">
                  When will I be charged for my box?
                </p>
              </div>
              <div className="w-[340px] ">
                <p className="text-[16px] text-[#242424]">
                  {" "}
                  You will be charged the day after your cutoff deadline. You
                  can see your cutoff date under “My Menu” after you have
                  registered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
