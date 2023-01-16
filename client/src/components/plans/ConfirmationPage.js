import React from "react";
import { MdDoneOutline } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import promo from "../images/promo.png";
import adds from "../images/adds.png";

const ConfirmationPage = () => {
  return (
    <div className="w-screen h-screen ">
      <ProgressBar />

      <div className="border-2 w-[1112px] flex-col mx-auto  p-10">
        <div className="flex items-center">
          <div>
            <img src={promo} alt="promo" />
          </div>
          <div>
            <div className="w-[500px]  text-center">
              <p className="flex text-[1.5rem] font-light items-center justify-center gap-2 mb-2">
                <MdDoneOutline className="text-green-600" />
                Thank you for placing your order!!
              </p>
              <p className="text-green-600">
                Please check your email for confirmation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <img src={adds} alt="adds" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
