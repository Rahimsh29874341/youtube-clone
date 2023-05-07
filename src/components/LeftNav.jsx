import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constant";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);

  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className={`md:block md:w-[95px] w-[260px] overflow-auto h-full py-4 bg-black/[0.97] absolute md:relative z-10 translate-x-[-260px] md:translate-x-0 transition-all ${mobileMenu ? 'translate-x-0' : ''}`}>
      <div className="flex px-5 flex-col">
        {categories?.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate('/')
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="md:hidden my-5 border-white/[0.2]" />
        <div className="md:hidden text-white/[0.5] text-[15px]">
          Clone by: Rahim Shaikh
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
