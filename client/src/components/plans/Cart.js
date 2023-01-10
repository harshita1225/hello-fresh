import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ProgressBar from "../plans/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import paymenticons from "../images/paymenticons.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import flexplan from "../images/flexplan.png";
import { BiEdit } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProgressBar />
      <div className="w-screen h-screen flex-col ">
        <div className="">
          <div className=" h-[850px] bg-white rounded-2xl py-3">
            <div className="w-[1112px]  flex-col  font-sans mx-auto">
              <h3 className=" text-[20px] mb-4">Cart Summary</h3>
              <div className=" px-10 ">
                <div className=" px-5 border-2 border-[#067A46]">
                  <div className="w-full flex justify-between">
                    <div className="flex items-center gap-3">
                      <BsFillCheckCircleFill className="text-[#067A46]" />
                      Add credit or debit card{" "}
                    </div>
                    <div>
                      <img src={paymenticons} alt="paymenticons" />
                    </div>
                  </div>

                  {/* below div needs to be repeted in map loop */}
                  <div className=" w-full border-2 flex m-5 mx-auto py-9 text-[#242424]">
                    <AiFillCloseCircle className=" cursor-pointer text-[22px] text-red-600 relative bottom-7 left-[940px]" />
                    <div className="w-[150px]">
                      <img
                        className="w-[100px] h-[100px] "
                        src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/BoxSavings.png"
                        alt="icon"
                      />
                    </div>
                    <div className="w-[300px] text-left border-2 border-dashed border-slate-300 mr-[20px] p-1">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold text-[#067A46]">
                          Plan Summary
                        </p>
                        <BiEdit className="text-[#067A46]  text-[22px] cursor-pointer" />
                      </div>
                      <p className="font-semibold text-[#242424]">
                        Meat and Veggie
                      </p>
                      <p>
                        <span className="font-semibold">3</span> recipes per
                        week for <span className="font-semibold">4</span> people
                      </p>
                      <p>
                        (<span className="font-semibold">12</span> servings
                        total)
                      </p>
                    </div>

                    <div className="w-[300px] text-left border-2 border-slate-300 border-dashed mr-[20px] p-1">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold">Address</p>
                        <BiEdit className="text-[#067A46]  text-[22px] cursor-pointer" />
                      </div>
                      <p>Name</p>
                      <p>Address</p>
                      <p>Phone number</p>
                    </div>

                    <div className="w-[150px] b  border-slate-300 border-dashed text-left p-1">
                      <div className="mb-3">
                        <p className="font-semibold">Total</p>
                      </div>
                      <p className="flex justify-between">
                        Box Price:
                        <span className="font-semibold">123</span>{" "}
                      </p>
                      <p className="flex justify-between">
                        Delivery:<span className="font-semibold">10</span>{" "}
                      </p>
                      <p className="flex justify-between">
                        Total:<span className="font-semibold">130</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full px-6 border-2 mt-3">
                  <div className="flex justify-between py-5">
                    <div className="w-[280px] justify-center items-center text-left">
                      <img
                        className="w-[65px] mr-2"
                        src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/ContactlessDelivery.png"
                        alt="img1"
                      />
                      <div>
                        <p className="font-semibold text-[16px]">Save time</p>
                        <p className="text-[14px]">
                          We'll shop and deliver the ingredients straight to
                          your door{" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-[280px] justify-center items-center text-left">
                      <img
                        className="w-[65px] mr-2"
                        src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_fit,fl_lossy/hellofresh_website/MojitoSaveMoneyIcon.svg"
                        alt="img1"
                      />
                      <div>
                        <p className="font-semibold text-[16px]">Save Money</p>
                        <p className="text-[14px]">
                          Perfect portions mean no excess food waste and no
                          extra dollars spent
                        </p>
                      </div>
                    </div>
                    <div className="w-[280px] justify-center items-center text-left">
                      <img
                        className="w-[65px] mr-2"
                        src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/BoxSavings.png"
                        alt="flexplan"
                      />
                      <div>
                        <p className="font-semibold text-[16px]">
                          Flexible For You
                        </p>
                        <p className="text-[14px]">
                          Swap proteins and sides for endless variety with 30+
                          weekly recipes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#067A46] mt-5 flex items-center gap-3">
                    <BsFillCheckCircleFill className="text-[#067A46]" /> Receive
                    offers and promotions via text message and calls
                  </p>
                  <p className="text-[14px] font-light text-gray-400 mt-3 text-left mb-10">
                    By checking the box above, I agree to HelloFresh's Terms and
                    Conditions & Privacy Policy and agree to receive recurring
                    calls/texts via automated technology, including for
                    promotions, subscriptions, etc., by or on behalf of
                    HelloFresh, including after any subscription deactivation. I
                    understand that consent is not a condition of any purchase,
                    that message & data rates may apply, and that I may opt out
                    at any time by texting STOP.{" "}
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#067A46",
                      width: "980px",
                    }}
                    variant="contained"
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
                  What if I’m not home to receive my shipment?
                </p>
              </div>
              <div className="w-[340px] ">
                <p lassName="text-[16px] text-[#242424]">
                  {" "}
                  We know our customers are busy, so you do not need to be home
                  to receive your box. Our custom delivery boxes are designed to
                  keep your ingredients fresh for 24 hours or longer after
                  delivery.
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[232px] px-[16px] text-center">
              <div className="w-[340px] h-[56px] my-[20px]">
                <p className="text-[20px] text-[#242424] ">
                  Can I change the time, date, or location of my delivery?
                </p>
              </div>
              <div className="w-[340px] ">
                <p lassName="text-[16px] text-[#242424]">
                  {" "}
                  Yes, you can adjust the date and location of every delivery,
                  and as a reminder, you do not need to be home to receive your
                  box.
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[232px] px-[16px] text-center">
              <div className="w-[340px] h-[56px] my-[20px]">
                <p className="text-[20px] text-[#242424] ">
                  How often will I be charged?
                </p>
              </div>
              <div className="w-[340px] ">
                <p lassName="text-[16px] text-[#242424]">
                  {" "}
                  Your plan is weekly, but you can easily skip a week, pause, or
                  cancel your account at any time. Just make sure you do so
                  before your weekly cutoff to stop your next order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
