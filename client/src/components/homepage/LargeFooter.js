import React from "react";

const LargeFooter = () => {
  return (
    <div className="h-[300px] bg-pink-100 ">
      <div className="flex justify-center ml-[-50px]">
        <div className="flex flex-col items-start ">
          <p>HelloFresh</p>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/pages/unidays"
          >
            Students
          </a>
          <a className="text-[14px]" href="https://blog.hellofresh.com/">
            Blog
          </a>
          <a className="text-[14px]" href="https://www.hellofresh.com/recipes">
            Recipes
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/pages/hero-discounts"
          >
            Hero Discounts
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/pages/sitemap"
          >
            Recipe Directory
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/california-transparen"
          >
            California Supply Chains Act
          </a>
          <a className="text-[14px]" href="https://www.hellofresh.com/eat/hub">
            Delivery Options
          </a>
        </div>
        <div className="flex flex-col items-start ml-[25px]">
          <p>Our company</p>
          <a className="text-[14px]" href="https://www.hellofreshgroup.com/en/">
            HelloFresh Group
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/sustainability"
          >
            Sustainability
          </a>
          <a
            className="text-[14px]"
            href="https://careers.hellofresh.com/global/en"
          >
            Careers
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/press"
          >
            Press
          </a>
        </div>
        <div className="flex flex-col items-start ml-[100px]">
          <p>Work with us</p>
          <a
            className="text-[14px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSegFXQvBaRmwPIt25zhFW07Ytzj6bygniGjor-UPMmTzXczoA/viewform"
          >
            Partner
          </a>
          <a
            className="text-[14px]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf4wkhWL0R-hxj1Co905XWPxe-1O2ByGQbnyRooRLgHxASCnQ/viewform"
          >
            Influencers
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/affiliates"
          >
            Affiliates
          </a>
        </div>
        <div className="flex flex-col items-start ml-[113px]">
          <p>Contact us</p>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/faq"
          >
            Help Center & FAQ
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/partnerships"
          >
            Partnership Inquiries
          </a>
          <a
            className="text-[14px]"
            href="https://hb.hellofresh.com/corporate-sales"
          >
            Corporate Sales
          </a>
          <a
            className="text-[14px]"
            href="https://www.hellofresh.com/about/ccpa"
          >
            Do Not Sell My Personal Information
          </a>
        </div>
        <div className="flex flex-col items-start ml-[-25px]">
          <p>Download our app</p>
          <p>Manage your deliveries from anywhere, anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default LargeFooter;
