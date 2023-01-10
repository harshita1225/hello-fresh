import React from "react";

const Footer = () => {
  return (
    <div className="p-[24px] border-t divide-[#EEEEEE] divide-x border-solid flex justify-around text-[14px]">
      <div className="box-border w-full flex flex-row align-baseline max-w-[1150px]">
        <div className="box-border flex flex-row align-baseline max-w-[1150px] -ml-12">
          <div className="flex pl-[4px] flex-row pr-10"> © HelloFresh 2023</div>
          <div className="flex flex-row w- text-[#067A46] underline underline-offset-2">
            <a
              href="https://www.hellofresh.com/about/termsandconditions"
              className="pl-3"
            >
              Terms and Conditions
            </a>

            <a href="https://www.hellofresh.com/about/privacy" className="pl-3">
              Privacy
            </a>

            <a
              href="https://www.hellofresh.com/about/accessibility"
              className="pl-3"
            >
              Accessibility
            </a>
          </div>
        </div>

        <div className="flex ml-auto pl-10">
          <div className="flex flex-row gap-6 m-auto">
            <a href="https://www.facebook.com/HelloFresh.de/?brand_redir=320774061283785">
              <svg
                width="25"
                height="25"
                viewBox="0 0 48 48"
                fill="#1877F2"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="facebook"
              >
                <title id="facebook">facebook</title>
                <path d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.98 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.626 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.748V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.98 48 24"></path>
                <path
                  fill="#fff"
                  d="M33.342 30.938L34.406 24H27.75v-4.502c0-1.898.93-3.748 3.911-3.748h3.026V9.844s-2.746-.469-5.372-.469c-5.482 0-9.065 3.322-9.065 9.337V24h-6.094v6.938h6.094v16.77a24.174 24.174 0 007.5 0v-16.77h5.592z"
                  class="facebook"
                ></path>
              </svg>
            </a>

            <a href="https://twitter.com/HelloFresh">
              <svg
                width="25"
                height="25"
                viewBox="0 0 48 48"
                fill="#1DA1F2"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="twitter"
              >
                <title id="twitter">twitter</title>
                <path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0"></path>
                <path
                  fill="#fff"
                  d="M19.608 36.66c10.644 0 16.464-8.82 16.464-16.464 0-.252 0-.504-.012-.744a11.855 11.855 0 002.892-3 11.745 11.745 0 01-3.324.912 5.783 5.783 0 002.544-3.204 11.718 11.718 0 01-3.672 1.404 5.758 5.758 0 00-4.224-1.824 5.787 5.787 0 00-5.784 5.784c0 .456.048.9.156 1.32-4.812-.24-9.072-2.544-11.928-6.048a5.805 5.805 0 00-.78 2.904 5.76 5.76 0 002.58 4.812 5.684 5.684 0 01-2.616-.72v.072a5.793 5.793 0 004.644 5.676c-.48.132-.996.204-1.524.204-.372 0-.732-.036-1.092-.108a5.778 5.778 0 005.4 4.02 11.632 11.632 0 01-7.188 2.472c-.468 0-.924-.024-1.38-.084a16.122 16.122 0 008.844 2.616"
                  class="twitter"
                ></path>
              </svg>
            </a>

            <a href="https://www.instagram.com/hellofresh/">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="#E1306C"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="instagram"
              >
                <title id="instagram">instagram</title>
                <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0"></path>
                <g class="instagram">
                  <path
                    fill="#fff"
                    d="M12.242 5.25c-1.9 0-2.137.008-2.883.042-.744.034-1.252.152-1.697.325-.46.179-.85.418-1.238.807a3.426 3.426 0 00-.807 1.238c-.173.445-.291.953-.325 1.697-.034.746-.042.984-.042 2.883s.008 2.137.042 2.882c.034.745.152 1.253.325 1.698.179.46.418.85.807 1.238.388.389.778.628 1.238.806.445.173.953.291 1.697.325.746.034.984.042 2.883.042s2.137-.008 2.882-.042c.745-.034 1.253-.152 1.698-.325a3.43 3.43 0 001.238-.806c.389-.389.628-.779.806-1.238.173-.445.291-.953.325-1.698.034-.745.042-.983.042-2.882 0-1.9-.008-2.137-.042-2.883-.034-.744-.152-1.252-.325-1.697a3.428 3.428 0 00-.806-1.238 3.428 3.428 0 00-1.238-.807c-.445-.173-.953-.291-1.698-.325-.745-.034-.983-.042-2.882-.042m0 1.26c1.867 0 2.088.007 2.825.04.682.032 1.052.146 1.298.241.327.127.56.279.804.523.245.245.396.478.523.804.096.247.21.617.241 1.298.034.738.04.959.04 2.826s-.006 2.088-.04 2.825c-.031.682-.145 1.052-.24 1.298-.128.327-.28.56-.524.804a2.168 2.168 0 01-.804.523c-.246.096-.616.21-1.298.24-.737.035-.958.042-2.825.042-1.867 0-2.088-.007-2.825-.041-.682-.031-1.052-.145-1.299-.24a2.167 2.167 0 01-.804-.524 2.167 2.167 0 01-.523-.804c-.095-.246-.21-.616-.24-1.298-.034-.737-.041-.958-.041-2.825 0-1.867.007-2.088.04-2.826.032-.681.146-1.051.241-1.298.127-.326.279-.56.523-.804.245-.244.478-.396.804-.523.247-.095.617-.21 1.299-.24.737-.034.958-.041 2.825-.041"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.242 14.572a2.33 2.33 0 110-4.66 2.33 2.33 0 010 4.66m0-5.92a3.59 3.59 0 100 7.18 3.59 3.59 0 000-7.18M16.813 8.51a.839.839 0 11-1.678 0 .839.839 0 011.678 0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="instagram">
                    <path
                      fill="#fff"
                      transform="translate(.69)"
                      d="M0 0h48v48H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
