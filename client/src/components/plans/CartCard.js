import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import ProgressBar from "../plans/ProgressBar";
import { useNavigate } from "react-router-dom";

import paymenticons from "../images/paymenticons.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { BiEdit } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Context } from "../../Context";
import { ListItem } from "@mui/material";

function CartCard({ plan, handleDelete }) {
  return (
    <div className=" w-full border-2 flex m-5 mx-auto py-9 text-[#242424]">
      <AiFillCloseCircle
        onClick={() => handleDelete(plan._id)}
        className=" cursor-pointer text-[22px] text-red-600 relative bottom-7 left-[940px]"
      />
      <div className="w-[150px]">
        <img
          className="w-[100px] h-[100px] "
          src="https://img.hellofresh.com/w_96,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/funnel-fragment/icons/BoxSavings.png"
          alt="icon"
        />
      </div>
      <div className="w-[300px] text-left border-2 border-dashed border-slate-300 mr-[20px] p-1">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-[#067A46]">Plan Summary</p>
          <Link to={"/editplan/" + plan._id}>
            <BiEdit className="text-[#067A46]  text-[22px] cursor-pointer" />
          </Link>
        </div>
        <p className="font-semibold text-[#242424]">
          {plan.planname.join(", ")}
        </p>
        <p>
          <span className="font-semibold">{plan.numberpeople}</span> recipes per
          week for <span className="font-semibold">{plan.recipeweek}</span>{" "}
          people
        </p>
        <p>
          (
          <span className="font-semibold">
            {Number(plan.recipeweek) * Number(plan.numberpeople)}
          </span>{" "}
          servings total)
        </p>
      </div>

      <div className="w-[300px] text-left border-2 border-slate-300 border-dashed mr-[20px] p-1">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold">Address</p>
          <Link to={"/editplan/" + plan._id}>
            <BiEdit className="text-[#067A46]  text-[22px] cursor-pointer" />
          </Link>
        </div>
        <p>
          {plan.firstname} {plan.lastname}
        </p>
        <p>
          {plan.address}-{plan.floor},{plan.city},{plan.state}
        </p>
        <p>{plan.phonenumber}</p>
      </div>

      <div className="w-[150px] b  border-slate-300 border-dashed text-left p-1">
        <div className="mb-3">
          <p className="font-semibold">Total</p>
        </div>
        <p className="flex justify-between">
          Box Price:
          <span className="font-semibold">{plan.price}</span>{" "}
        </p>
        <p className="flex justify-between">
          Delivery:
          <span className="font-semibold">9.86</span>{" "}
        </p>
        <p className="flex justify-between">
          Total:
          <span className="font-semibold">
            {Number(plan.price) + 9.86}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CartCard;
