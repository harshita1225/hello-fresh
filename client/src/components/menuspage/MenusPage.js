import React from "react";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import LargeFooter from "../homepage/LargeFooter";
import RecipeCard from "../menuspage/RecipeCard";

const MenusPage = () => {
  return (
    <div>
      <div className="shadow-md sticky">
        <Header />
      </div>

      <div className="max-w-[1144px] mx-auto ">
        <h1 className=" border-box py-[2px] text-[32px] leading-[38px] text-[#242424] my-5">
          Menu for Jan 14 - 20
        </h1>

        {/* Weekly navigation */}

        <div className="flex flex-row justify-center mx-auto w-[407px] pointer text-[14px] mb-[32px] items-center">
          <button className="block border-y border-l border-[#067A46] rounded-tl rounded-bl  none-l text-[#067A46] px-4 py-2 hover:bg-[#d0ee98]">
            <div>Jan</div>
            <div>14-20</div>
          </button>
          <button className="border border-[#067A46] text-[#067A46] px-4 py-2 hover:bg-[#d0ee98]">
            <div>Jan</div>
            <div>21-27</div>
          </button>
          <button className="border-y border-[#067A46] text-[#067A46] px-2 py-2 hover:bg-[#d0ee98]">
            <div className="w-[70px]">Jan-Feb</div>
            <div>28-03</div>
          </button>
          <button className="border border-[#067A46] text-[#067A46] px-4 py-2 hover:bg-[#d0ee98]">
            <div>Feb</div>
            <div>04-10</div>
          </button>
          <button className="border-y border-[#067A46] text-[#067A46] px-4 py-2 hover:bg-[#d0ee98]">
            <div>Feb</div>
            <div>11-17</div>
          </button>
          <button className="border border-[#067A46] rounded-tr rounded-br  none-l text-[#067A46] px-4 py-2 hover:bg-[#d0ee98]">
            <div>Feb</div>
            <div>18-24</div>
          </button>
        </div>
      </div>

      {/* Recipe Grid Section */}

      <div className="flex flex-row px-[16px] mx-auto max-w-[1140px] gap-[16px] mb-[20px]">
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/638f7b103a3d01b427029aa9-41907f01.jpg"
          title="Chicken Sausage Rigatoni"
          subtitle="in a Creamy Pink Sauce with Bell Pepper & Parmesan"
          time="20"
          tags="Spicy • Easy Prep • Quick"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/638fa1ca7951f82cff0e8cb9-bb7f87a1.jpg"
          title="Mushroom & Chive Risotto"
          subtitle="with Garlic Herb Butter"
          time="50"
          tags="Veggie • Calorie Smart"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/6390c1ad5156c75e9108165a-6b5f2177.jpg"
          title="Silky Sicilian Chicken Penne"
          subtitle="tossed with Mushrooms, Zucchini & Tomatoes"
          time="30"
          tags="Protein Smart"
        />
      </div>

      <div className="flex flex-row px-[16px] mx-auto max-w-[1140px] gap-[16px] mb-[20px]">
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/6390cc682debaed0900342ca-bb7f87a1.jpg"
          title="Chicken Sausage & Mushroom Risotto"
          subtitle="swirled with Chives & Garlic Herb Butter"
          time="50"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/638f742984e3958d740999cf-5fcc421f.jpg"
          title="Italian Chicken over Lemony Spaghetti"
          subtitle="with Zucchini & Chili Flakes"
          time="30"
          tags="Protein Smart"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/meatloaves-with-creamy-mushroom-sauce-c475e3cb.jpg"
          title="Meatloaves with Creamy Thyme Sauce"
          subtitle="plus Garlic Mashed Potatoes, Roasted Brussels Sprouts"
          time="35"
          tags="Seasonal"
          className="-pt-[5p"
        />
      </div>

      <div className="flex flex-row px-[16px] mx-auto max-w-[1140px] gap-[16px] mb-[20px]">
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/6390cc682debaed0900342ca-bb7f87a1.jpg"
          title="Chicken Sausage & Mushroom Risotto"
          subtitle="swirled with Chives & Garlic Herb Butter"
          time="50"
          className="h-[730px] w-[695px]"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/638f742984e3958d740999cf-5fcc421f.jpg"
          title="Italian Chicken over Lemony Spaghetti"
          subtitle="with Zucchini & Chili Flakes"
          time="30"
          tags="Protein Smart"
        />
        <RecipeCard
          image="https://img.hellofresh.com/w_1920,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/meatloaves-with-creamy-mushroom-sauce-c475e3cb.jpg"
          title="Meatloaves with Creamy Thyme Sauce"
          subtitle="plus Garlic Mashed Potatoes, Roasted Brussel Sprouts"
          time="35"
          tags="Seasonal"
          className="-pt-[5p"
        />
      </div>

      {/* Sticky button */}

      <div className="items-center p-[16px] m-auto sticky text-center top-0">
        <button className="rounded text-[16px] bg-[#067a46] text-[#ffffff] pointer py-3 px-6 font-normal hover:bg-[#056835]">
          Get cooking
        </button>
      </div>

      {/* Footers */}

      <div className=" border-t divide-[#EEEEEE] ">
        <LargeFooter />
      </div>

      <div className="max-h-[8rem] ">
        <Footer />
      </div>
    </div>
  );
};

export default MenusPage;
