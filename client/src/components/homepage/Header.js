import Logo from "../images/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="h-[56px] flex items-center p-[20px] cursor-pointer justify-between">
      <div className=" flex gap-[25px] items-center">
        <img className="h-[30px]" src={Logo} alt="logo" />
        <ul className="flex gap-[10px] items-center">
          <li className="hover:bg-[#E3F5BF] w-[90px] h-[52px] flex items-center justify-center">
            Our Plans
          </li>
          <li className="hover:bg-[#E3F5BF] w-[114px] h-[52px] flex items-center justify-center">
            How It Works
          </li>
          <li className="flex gap-[3px] hover:bg-[#E3F5BF] w-[109px] h-[52px] items-center justify-center">
            Our Menus <BiChevronDown />
          </li>
          <li className="hover:bg-[#E3F5BF] w-[90px] h-[52px] flex items-center justify-center">
            Gift Cards
          </li>
          <li className="flex gap-[3px] hover:bg-[#E3F5BF] w-[130px] h-[52px] items-center justify-center">
            Sustainability <BiChevronDown />
          </li>
        </ul>
      </div>

      <div className="flex gap-[30px] items-center">
        <div className="flex items-center justify-center hover:bg-[#E3F5BF] w-[49px] h-[52px]">
          <BsCart3 size="20px" />
        </div>
        <button className="border-[1px] border-[#367B47] rounded py-[8px] px-[24px] text-[#367B47]  hover:bg-[#E3F5BF] hover:border-2">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
