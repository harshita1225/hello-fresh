import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ProgressBar from "./plans/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    floor: "",
    city: "",
    zipcode: "",
    state: "",
    phonenumber: "",
  });
  const statename = [
    {
      value: "Berlin",
      label: "Berlin",
    },
    {
      value: "Brandenburg",
      label: "Brandenburg",
    },
    {
      value: "Bayern",
      label: "Bayern",
    },
    {
      value: "Hamburg",
      label: "Hamburg",
    },
    {
      value: "Nordrhein-Westfalen",
      label: "Nordrhein-Westfalen",
    },
  ];

  const handleNext = async () => {
    const response = await axios.post("/user/register", data);
    console.log("registration response", response);

    navigate("/payment");
  };
  return (
    <>
      <ProgressBar />
      <div className="w-screen h-screen flex justify-center ">
        <div className=" h-[800px] bg-gray-100 rounded-2xl py-10 ">
          <div className="w-[1112px]  flex-col justify-center font-sans">
            <h3 className=" text-[20px] mb-3">Shipping Information</h3>
            <div>
              <h4 className=" text-[16px] mb-10 font-semibold">
                Delivery Address
              </h4>
              <div className="mb-10">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "1112px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="flex gap-10 justify-center">
                    <TextField
                      required
                      style={{ width: "30rem" }}
                      id="outlined-required"
                      label="First name"
                      onChange={(e) =>
                        setData({ ...data, firstname: e.target.value })
                      }
                    />
                    <TextField
                      required
                      style={{ width: "30rem" }}
                      id="outlined-required"
                      label="Last name"
                      onChange={(e) =>
                        setData({ ...data, firstname: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex gap-10 justify-center">
                    {" "}
                    <TextField
                      style={{ width: "30rem" }}
                      id="outlined-basic"
                      label="Street Address"
                      variant="outlined"
                    />
                    <TextField
                      style={{ width: "30rem" }}
                      id="outlined-basic"
                      label="Apt,Suite,Foor"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex gap-10 justify-center">
                    {" "}
                    <TextField
                      style={{ width: "30rem" }}
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                    />
                    <TextField
                      style={{ width: "30rem" }}
                      id="outlined-basic"
                      label="Zip Code"
                      variant="outlined"
                    />
                  </div>

                  <div className="flex gap-10 justify-center">
                    {" "}
                    <TextField
                      style={{ width: "30rem" }}
                      id="select-state"
                      select
                      label="Select"
                    >
                      {statename.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      style={{ width: "30rem" }}
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                    />
                  </div>
                </Box>
              </div>
            </div>

            <FormGroup>
              <FormControlLabel
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#067A46",
                }}
                control={<Checkbox />}
                label="Receive offers and promotions via text message and calls"
              />
            </FormGroup>
            <div className="text-[14px] text-slate-400 w-[1000px] mx-auto my-4">
              <p>
                By checking the box above, I agree to HelloFresh's Terms and
                Conditions & Privacy Policy and agree to receive recurring
                calls/texts via automated technology, including for promotions,
                subscriptions, etc., by or on behalf of HelloFresh, including
                after any subscription deactivation. I understand that consent
                is not a condition of any purchase,that message & data rates may
                apply, and that I may opt out at any time by texting STOP.
              </p>
            </div>
            <div className="w-[1000px] flex justify-around mx-auto py-5">
              <div className="flex justify-center items-center">
                <img
                  className="w-[65px] mr-2"
                  src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/BoxSavings.png"
                  alt="img1"
                />
                <div>
                  <p className="font-semibold text-[16px]">
                    Fresher than grocers
                  </p>
                  <p className="text-[14px]">
                    We ship direcly from the supplier
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[65px] mr-2"
                  src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/PiggyBank.png"
                  alt="img2"
                />
                <div>
                  <p className="font-semibold text-[16px]">
                    Enviromentally friendly
                  </p>
                  <p className="text-[14px]">
                    25% less food waste than grocers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-5">
              <Button
                onClick={handleNext}
                style={{
                  backgroundColor: "#067A46",
                }}
                variant="contained"
              >
                Next Step
              </Button>
            </div>
          </div>
          <div>
            <p>© HelloFresh 2023</p>
          </div>

          <div className="w-[1112px] p-[16px]">
            <div className="w-full h-[32px] text-[#242424] text-[24px] text-center mt-[90px] mb-[30px]">
              FAQs
            </div>
            <div className="flex">
              <div className="w-[360px] h-[232px] px-[16px] text-left">
                <div className="w-[340px] h-[56px] my-[20px]">
                  <p className="text-[20px] text-[#242424] ">
                    What if I’m not home to receive my shipment?
                  </p>
                </div>
                <div className="w-[340px] ">
                  <p lassName="text-[16px] text-[#242424]">
                    {" "}
                    We know our customers are busy, so you do not need to be
                    home to receive your box. Our custom delivery boxes are
                    designed to keep your ingredients fresh for 24 hours or
                    longer after delivery.
                  </p>
                </div>
              </div>

              <div className="w-[360px] h-[232px] px-[16px] text-left">
                <div className="w-[340px] h-[56px] my-[20px]">
                  <p className="text-[20px] text-[#242424] ">
                    Can I change the time, date, or location of my delivery?
                  </p>
                </div>
                <div className="w-[340px] ">
                  <p lassName="text-[16px] text-[#242424]">
                    {" "}
                    Yes, you can adjust the date and location of every delivery,
                    and as a reminder, you do not need to be home to receive
                    your box.
                  </p>
                </div>
              </div>

              <div className="w-[360px] h-[232px] px-[16px] text-left">
                <div className="w-[340px] h-[56px] my-[20px]">
                  <p className="text-[20px] text-[#242424] ">
                    How often will I be charged?
                  </p>
                </div>
                <div className="w-[340px] ">
                  <p lassName="text-[16px] text-[#242424]">
                    {" "}
                    Your plan is weekly, but you can easily skip a week, pause,
                    or cancel your account at any time. Just make sure you do so
                    before your weekly cutoff to stop your next order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
