import React from "react";
import Apple from "../images/appstore-badge-en.png";
import Play from "../images/playstore-badge-en.png";

const LargeFooter = () => {
  return (
    <div className="h-[300px]">
      <div className="flex justify-center ml-[-50px]  pt-[50px]">
        <div className="flex flex-col items-start">
          <p className="mb-[15px] font-[700]">HelloFresh</p>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/pages/unidays"
          >
            Students
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://blog.hellofresh.com/"
          >
            Blog
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/recipes"
          >
            Recipes
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/pages/hero-discounts"
          >
            Hero Discounts
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/pages/sitemap"
          >
            Recipe Directory
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/california-transparen"
          >
            California Supply Chains Act
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/eat/hub"
          >
            Delivery Options
          </a>
        </div>
        <div className="flex flex-col items-start ml-[35px]">
          <p className="mb-[15px] font-[700]">Our company</p>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofreshgroup.com/en/"
          >
            HelloFresh Group
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/sustainability"
          >
            Sustainability
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://careers.hellofresh.com/global/en"
          >
            Careers
          </a>
          <a
            className="text-[14px] text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/press"
          >
            Press
          </a>
        </div>
        <div className="flex flex-col items-start ml-[100px]">
          <p className="mb-[15px] font-[700]">Work with us</p>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSegFXQvBaRmwPIt25zhFW07Ytzj6bygniGjor-UPMmTzXczoA/viewform"
          >
            Partner
          </a>
          <a
            className="text-[14px] text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf4wkhWL0R-hxj1Co905XWPxe-1O2ByGQbnyRooRLgHxASCnQ/viewform"
          >
            Influencers
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/affiliates"
          >
            Affiliates
          </a>
        </div>
        <div className="flex flex-col items-start ml-[113px] w-[200px]">
          <p className="mb-[15px] font-[700]">Contact us</p>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/faq"
          >
            Help Center & FAQ
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://www.hellofresh.com/about/partnerships"
          >
            Partnership Inquiries
          </a>
          <a
            className="text-[14px]  text-[#067A46] underline underline-offset-2 mb-[3px]"
            href="https://hb.hellofresh.com/corporate-sales"
          >
            Corporate Sales
          </a>
          <a
            className="text-[14px] text-[#067A46] underline underline-offset-2 mb-[3px] mr-[47px]"
            href="https://www.hellofresh.com/about/ccpa"
          >
            Do Not Sell My Personal Information
          </a>
        </div>
        <div className="flex flex-col items-start mr-[5px]">
          <p className="mb-[15px] font-[700] text-[#056835]">
            Download our app
          </p>
          <p>Manage your deliveries from anywhere, anytime.</p>
          <div className="flex gap-[10px]">
            <img className="w-[126px] h-[42px] mt-[15px]" src={Apple} alt="" />
            <img className="w-[126px] h-[42px] mt-[15px]" src={Play} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeFooter;
