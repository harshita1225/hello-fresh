import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import plan11 from "../images/plan11.png";
import plan2 from "../images/plan2.png";
import plan3 from "../images/plan3.png";
import plan4 from "../images/plan4.png";
import plan5 from "../images/plan5.png";
import plan6 from "../images/plan6.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import CarouselMenu from "../homepage/CarouselMenu";
import { BsArrowRepeat } from "react-icons/bs";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { AiOutlineTag } from "react-icons/ai";
import trustpilot from "../images/trustpilot.png";
import QuestionPart from "../homepage/QuestionPart";

const PlansPage = () => {
  const [selectplan, setSelectPlan] = useState(false);

  const [plan, setPlan] = useState({
    planname: "",
    numberPeople: 0,
    RecipeWeek: 0,
  });

  const handlePlanSelection = (val) => {
    setPlan({ ...plan, planname: val });
    setSelectPlan(!selectplan);
  };
  console.log(plan);
  return (
    <div>
      <div>
        <ProgressBar />
        <div className="w-screen">
          <div className="w-[1200px] py-[32px] px-[40px] border-2 bg-white mx-auto">
            <div className="w-[1064px] h-[773px] mx-auto">
              <div className="text-[32px] text-[#242424] mb-5">
                Personalize your plan
              </div>
              <div className="flex">
                <div className="w-[531px] border-2 border-dashed">
                  <div className="w-[467px] h-[589px] mx-auto mt-8">
                    <p className="text-[20px] mb-[16px]">
                      1. Choose your preferences
                    </p>
                    <p className="text-[14px] text-[#676767] mb-[16px]">
                      Your preferences will help us show you the most relevant
                      recipes first. You'll still have access to all recipes
                      each week.
                    </p>
                    <div className="w-[467px]">
                      <div className="flex justify-between ">
                        <button
                          value="Meat and veggies"
                          className="w-[228px] h-[115px] border-2 border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                          onClick={(e) => handlePlanSelection(e.target.value)}
                        >
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}

                          <img src={plan11} alt="plan11" />
                        </button>
                        <button
                          onClick={() => setSelectPlan(!selectplan)}
                          className="w-[228px] h-[115px] border-2  border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                        >
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}

                          <img src={plan2} alt="plan2" />
                        </button>
                      </div>
                      <div className="flex justify-between mt-2">
                        <button
                          onClick={() => setSelectPlan(!selectplan)}
                          className="w-[228px] h-[115px] border-2 border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                        >
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}
                          <img src={plan3} alt="plan3" />
                        </button>
                        <button
                          onClick={() => setSelectPlan(!selectplan)}
                          className="w-[228px] h-[115px] border-2  border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                        >
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}
                          <img src={plan4} alt="plan4" />
                        </button>
                      </div>
                      <div className="flex justify-between mt-2">
                        <button
                          onClick={() => setSelectPlan(!selectplan)}
                          className="w-[228px] h-[115px] border-2 border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                        >
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}
                          <img src={plan5} alt="plan5" />
                        </button>
                        <button
                          onClick={() => setSelectPlan(!selectplan)}
                          className="w-[228px] h-[115px] border-2  border-gray-300 rounded-sm flex justify-center items-center bg-gray-100"
                        >
                          {" "}
                          {selectplan && (
                            <BsFillCheckCircleFill className="relative bottom-[2rem] left-[-2rem] text-[-2rem] text-[#067A46]" />
                          )}
                          <img src={plan6} alt="plan6" />
                        </button>
                      </div>
                    </div>
                    <p className="text-[16px] text-[#242424] mt-8">
                      Swap proteins and sides if they aren’t a perfect match.
                      Learn more below.
                    </p>
                  </div>
                </div>

                <div className="w-[531px] border-2 border-dashed">
                  <div className="w-[467px] h-[589px] mx-auto mt-8">
                    <p className="text-[20px] mb-[16px]">
                      2. Customize your plan size
                    </p>
                    <div className=" w-[444px] h-[56px] flex justify-between items-center text-[16px]">
                      <p>Number of people</p>
                      <div>
                        <button className="w-[135px] h-[40px] border-2 border-[#067A46] rounded-l-md text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          2
                        </button>
                        <button className="w-[135px] h-[40px] ml-[-15px] border-[#067A46] border-y-2 border-r-2   text-[#067A46] text-[16px] hover:bg-[#d0ee98] rounded-r-md">
                          4
                        </button>
                      </div>
                    </div>
                    <div className=" w-[444px] h-[56px] flex justify-between items-center text-[16px]">
                      <p>Recipes per week</p>
                      <div>
                        <button className="w-[53px] h-[40px] border-2 border-[#067A46] rounded-l-md  text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          2
                        </button>
                        <button className="w-[53px] h-[40px] border-y-2 border-[#067A46]    text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          3
                        </button>
                        <button className="w-[53px] h-[40px] border-2 border-[#067A46]   text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          4
                        </button>
                        <button className="w-[53px] h-[40px] border-y-2 border-[#067A46]    text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          5
                        </button>
                        <button className="w-[53px] h-[40px]  bg-[#067A46] border-2 border-[#067A46] rounded-r-md  text-[#067A46] text-[16px] hover:bg-[#d0ee98]">
                          6
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="w-[444px] h-[234px] border-2 mt-10 rounded-md text-left px-5 pt-3 text-[16px]">
                        <div className="pb-5 border-b-2">
                          <p className="font-semibold leading-6">
                            Meat & Veggies
                          </p>
                          <p className="leading-6">
                            3 meals for 4 people per week
                          </p>
                          <p className="leading-6">12 total servings</p>
                        </div>
                        <div className="text-[16px]">
                          <div className="flex items-center justify-between h-[32px]">
                            <p>Box price</p>
                            <p>$113.86</p>
                          </div>
                          <div className="flex items-center justify-between h-[32px]">
                            <p>Price per serving</p>
                            <p>$8.86</p>
                          </div>
                          <div className="flex items-center justify-between bg-gray-200 h-[48px] font-semibold px-2">
                            <p>Total</p>
                            <p>$140.86</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[319px] h-[48px] py-[12px] px-[24px] bg-[#067A46] rounded text-white text-[16px] hover:bg-[#056835] my-5">
                Select this plan
              </button>
            </div>
          </div>

          <div className="mt-[2rem]">
            <div className="my-[100px]">
              <p className="text-[32px]">Enjoy 100+ options each week</p>
              <p className="text-[16px] mb-10">
                for breakfast, lunch, dinner and more. Simply select recipes
                after checkout or{" "}
                <a href="#" className="text-[#067A46]">
                  view our weekly menus YUM!
                </a>
              </p>
              <CarouselMenu />
            </div>
          </div>

          <div className="mt-[2rem]">
            <div className="my-[100px]">
              <p className="bg-red-700 text-white font-bold w-[50px] rounded-md mx-auto">
                NEW!
              </p>
              <p className="text-[32px]">Make it your own with HelloCustom</p>
              <p className=" text-[16px]">
                Now included in all plans. Change, swap, or upgrade 12+ sides
                and proteins each week. Your flavors, your choice, your recipes.
              </p>
              <p className="text-[16px] mb-10">
                Dig into a few HelloCustom examples below.
              </p>
              <div className="flex justify-center gap-3">
                <div className="w-[292px] h-[315px] ">
                  <img
                    className="w-[292px] h-[315px] rounded-xl"
                    src="https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Chicken-Tabbouleh-with-Quinoa-Tomatoes-and-Cucumber-683x1024.webp"
                    alt="dish1"
                  />
                  <p className="text-white bg-[#067a46] relative bottom-20 font-bold text-[20px]">
                    Mediterranean Couscous Bowls
                  </p>
                  <p className="text-white bg-[#067a46] rounded-b-xl relative bottom-20 font-bold text-[14px]">
                    {" "}
                    hummus & couscous power bowls
                  </p>
                  <div className="w-[3rem] rounded-full relative bottom-[380px] left-[220px] text-[3rem] font-bold bg-[#067A46] text-white animate-pulse">
                    {" "}
                    <BsArrowRepeat />
                  </div>
                </div>

                <div className="w-[292px] h-[315px]">
                  <img
                    className="w-[292px] h-[315px] rounded-xl"
                    src="https://www.thespruceeats.com/thmb/KNqfHZiCEGAvD1A6mfOr4yXzHh4=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Hello-Fresh-Creamy-Chive-Chicken-5-05a1959f03a44112a423997547b098dd.jpg"
                    alt="dish1"
                  />
                  <p className="text-white bg-[#067a46]  relative bottom-20 font-bold text-[20px]">
                    Roasted Veggie Kale and pepper
                  </p>
                  <p className="text-white bg-[#067a46] rounded-b-xl relative bottom-20 font-bold text-[14px]">
                    sides with rice & beans
                  </p>
                  <div className="w-[3rem] rounded-full relative bottom-[380px] left-[220px] text-[3rem] font-bold bg-[#067A46] text-white animate-pulse">
                    {" "}
                    <BsArrowRepeat />
                  </div>
                </div>

                <div className="w-[292px] h-[315px] rounded-xl">
                  <img
                    className="w-[292px] h-[315px] rounded-xl"
                    src="https://cdn.hellofresh.com/us/landing-pages/meal-kit-delivery/Ginger-Lime-Salmon.jpg"
                    alt="dish3"
                  />
                  <p className="text-white bg-[#067a46] relative bottom-20 font-bold text-[20px]">
                    {" "}
                    Cheesy Onion Crunch Chicken with Rice
                  </p>
                  <p className="text-white bg-[#067a46] relative bottom-20 font-bold text-[14px] rounded-b-xl">
                    {" "}
                    sides with steamed broccoli
                  </p>
                  <div className="w-[3rem] rounded-full relative bottom-[380px] left-[220px] text-[3rem] font-bold bg-[#067A46] text-white animate-pulse">
                    {" "}
                    <BsArrowRepeat />
                  </div>
                </div>
              </div>
              <div className="w-[800px] mt-20 mx-auto ">
                <div className=" w-full flex gap-10 justify-center mb-10">
                  <TextField
                    style={{ width: "450px" }}
                    id="outlined-basic"
                    label="Enter Promo Code"
                    variant="outlined"
                  />
                  <Button
                    style={{ color: "#067A46", borderColor: "#067A46" }}
                    variant="outlined"
                  >
                    Apply
                  </Button>
                </div>
                <div className="tracking-widest  py-1 flex justify-center items-center rounded-2xl ">
                  <div className="bg-[#d0ee98] flex rounded-xl px-5 py-1">
                    <span className="mr-3">
                      <AiOutlineTag className="text-[1.5rem] " />
                    </span>
                    <p>Special discount for heroes! Get the offer</p>
                  </div>
                </div>
              </div>
              <QuestionPart />
              <div className="w-[800px] mt-20 mx-auto ">
                <p className="text-[32px] mb-2">Stay updated</p>
                <p className="text-[16px] mb-8">
                  Receive the latest recipes by subscribing now!
                </p>
                <div className=" w-full flex gap-10 justify-center mb-10">
                  <TextField
                    style={{ width: "450px" }}
                    id="outlined-basic"
                    label="Enter Email address"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#067A46" }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img className="mx-auto" src={trustpilot} alt="trustpilot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
