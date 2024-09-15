import React from "react";
import banner1 from "../../../public/assets/banner.png";
import banner2 from "../../../public/assets/baannerr2.png";
import Baner from "../helpers/Baner";

function BannersSection() {
  let text2 = "زیبایی حق شماست پس این حق و از خودت نگیر";
  let text1 = "اگه سلامتی حیوون خونگیت برات مهمه پس بیا اینجا تا بهت چیکار کنی";

  return (
    <div className=" no-scrollbar -mt-10 overflow-x-auto p-10 gap-5 lg:gap-10 lg:mt-20 flex justify-center items-center">
      <Baner text={text2} pic={banner2} />

      <Baner text={text1} pic={banner1} />
    </div>
  );
}

export default BannersSection;