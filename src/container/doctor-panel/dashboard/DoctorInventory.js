import Image from "next/image";
import React from "react";
import doctorWalletBg from "../../../../public/Pics/doctorPanel/doctorWalletBg.png";
import cardCover from "../../../../public/Pics/doctorPanel/cardcover.png";
function DoctorInventory() {
  return (
    <div className=" shadow-md w-[30%] min-h-[192px] max-h-[192px] p-4 gap-3 bg-white rounded-3xl flex flex-col">
      <h5 className=" font-semibold">موجودی حساب شما</h5>
      <div className=" w-full relative flex flex-col justify-center items-center">
        <Image src={doctorWalletBg} alt="bgImg" width={190} />
        <Image src={cardCover} width={180} alt="image" className="  absolute" />
        <div className=" text-white absolute flex flex-col justify-center items-center gap-3">
          <h4>145,500,000 تومان</h4>
          <h5 className=" text-sm">دکتر طاهر ثابتیان</h5>
        </div>
      </div>
    </div>
  );
}

export default DoctorInventory;
