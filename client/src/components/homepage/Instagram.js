import React from "react";

const Instagram = () => {
  return (
    <div className="box-border border-b divide-[#EEEEEE] pb-[40px] bg-[#FFFFFF] text-[#242424]">
      <h2 className="text-center text-[32px] font-normal leading-[38px] pt-[40px] pb-[30px] px-[10px]">
        Cook it. Love it. Tag it #HelloFreshPics
      </h2>
      <p className="w-3/5 leading-[20px] m-auto pb-[30px]">
        Follow us on Instagram @hellofresh
      </p>

      <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col max-w-[1140px] m-auto gap-7 basis-0 justify-self-center content-between align-middle">
        <div className="flex flex-col items-center text-center">
          <div className="mt-[30px] mb-[5px] max-w-[262.5px] bg-no-repeat bg-center w-full h-[361px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/contentful/InstagramPeople.jpeg"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[32px] mb-[5px] -tracking-[0.3px]">
            bdanielle1285
          </h3>
          <p className="leading-[24px] px-[30px]">
            My little chef helping me make dinner tonight and trying out some of
            his new kitchen utensils I got him!
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mt-[30px] mb-[5px] max-w-[262.5px] bg-no-repeat bg-center w-full object-contain h-[361px]">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/dog.jpeg"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[32px] mb-[5px] -tracking-[0.3px]">
            lilpepthekelpie
          </h3>
          <p className="leading-[24px] px-[30px]">
            I’m helping out 🧑🏽‍🍳 #masterchef #bestboy
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mt-[30px] mb-[5px] max-w-[262.5px] bg-no-repeat bg-center h-[361px] object-fill">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/IgramFamilyDinner.jpeg"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[32px] mb-[5px] -tracking-[0.3px]">
            mandi14eid
          </h3>
          <p className="leading-[24px] px-[30px]">
            Drew and the kids made mom dinner tonight! Drew and I had our doubts
            but WOW was it tasty!
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mt-[30px] mb-[15px] max-w-[262.5px] bg-no-repeat bg-center h-[328px] w-full">
            <img
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/au/cms/homepage/Instagram/kidscookingedited.jpg"
              alt=""
            />
          </div>
          <h3 className="font-semibold leading-[32px] mb-[5px] -tracking-[0.3px]">
            our_lovely_stride
          </h3>
          <p className="leading-[24px] px-[30px]">
            We had a cooking class yesterday and we had such an amazing time. 😁
            They had such a great time working as a team and I can’t wait for
            our weekly cooking class 🙌🏻😁
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
