import React from "react";
import iphone14 from "../../../public/assets/iPhone 14.png";
import appstore from "../../../public/assets/appstore.png";
import playstore from "../../../public/assets/googleplay.png";
import bazzar from "../../../public/assets/bazzar.png";
import iphone13 from "../../../public/assets/iPhone 13.png";
import Image from "next/image";
function SamaneSection() {
  return (
    <div className=" hidden lg:flex pl-60  mt-20 w-[95%] h-[377px] bg-[#B0DAFF] shadow-xl rounded-l-full">
      <div className=" px-24 w-3/4 flex flex-col justify-center gap-10">
        <h2 className=" w-full text-[#034FAE] text-[32px]">
          معرفی اپلیکیشن دکتر رزرو
        </h2>
        <p className=" w-[742px] text-[20px]">
          اپلیکیشن رزرو دکتر ما یک راه حل هوشمند و کارآمد برای رزرو وقت و ملاقات
          با پزشکان است. با این اپلیکیشن، شما می‌توانید به راحتی و با سرعت وقت
          ملاقات با دکتر مورد نظر خود را رزرو کنید، بدون نیاز به تماس تلفنی
          طولانی یا حضور حضوری در مطب.
        </p>
        <div className=" flex gap-5 items-center justify-center">
          <Image alt="bazar-icon" width={168} src={bazzar} />
          <Image alt="playstore-icon" width={168} src={playstore} />
          <Image alt="appstore-icon" width={168} src={appstore} />
        </div>
      </div>
      <div className=" flex items-end w-1/3">
        <Image alt="iphone13" width={205} src={iphone13} />
        <Image alt="iphone14" className=" -mr-10" width={205} src={iphone14} />
      </div>
    </div>
  );
}

export default SamaneSection;
