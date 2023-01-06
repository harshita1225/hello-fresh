import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
  return (
    <div className="w-[735px] h-[658px] border-2">
      <div className="w-[1080px] text-left font-sans">
        <h3 className=" text-[20px] mb-3">Shipping Information</h3>
        <div>
          <h4 className=" text-[16px] mb-5 font-semibold">Delivery Address</h4>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex gap-10">
                <TextField
                  required
                  style={{ width: "20rem" }}
                  id="outlined-required"
                  label="First name"
                />
                <TextField
                  required
                  style={{ width: "20rem" }}
                  id="outlined-required"
                  label="Last name"
                />
              </div>
              <div className="flex gap-10">
                {" "}
                <TextField
                  style={{ width: "20rem" }}
                  id="outlined-basic"
                  label="Street Address"
                  variant="outlined"
                />
                <TextField
                  style={{ width: "20rem" }}
                  id="outlined-basic"
                  label="Apt,Suite,Foor"
                  variant="outlined"
                />
              </div>
              <div className="flex gap-10">
                {" "}
                <TextField
                  style={{ width: "20rem" }}
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  style={{ width: "20rem" }}
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                />
              </div>

              <div className="flex gap-10">
                {" "}
                <TextField
                  style={{ width: "20rem" }}
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
                  style={{ width: "20rem" }}
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
            control={<Checkbox defaultChecked />}
            label="Receive offers and promotions via text message and calls"
          />
        </FormGroup>
        <div className="text-[14px] text-slate-500 w-[730px]">
          <p>
            By checking the box above, I agree to HelloFresh's Terms and
            Conditions & Privacy Policy and agree to receive recurring
            calls/texts via automated technology, including for promotions,
            subscriptions, etc.,by or on behalf of HelloFresh, including after
            any subscription deactivation. I understand that consent is not a
            condition of any purchase,that message & data rates may apply, and
            that I may opt out at any time by texting STOP.
          </p>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Fresher than grocers</p>
              <p>We ship direcly from the supplier</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Enviromentally friendly</p>
              <p>25% less food waste than grocers.</p>
            </div>
          </div>
        </div>

        <Button
          style={{ backgroundColor: "teal" }}
          onClick={() => navigate("/payment")}
          variant="contained"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Register;
