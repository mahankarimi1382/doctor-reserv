import React, { useState } from "react";

import PhoneNumModal from "./PhoneNumModal";
import ValidateModal from "./ValidateModal";

function LoginModals({ setIsLoginModal }) {
  const [modal2, setModal2] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");

  const closeModal = () => {
    setIsLoginModal(false);
  };

  return (
    <div
      onClick={closeModal}
      className=" z-50 fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    >
      {modal2 ? (
        <ValidateModal
          setModal2={setModal2}
          phoneNum={phoneNum}
          closeModal={closeModal}
        />
      ) : (
        <PhoneNumModal
          setPhoneNum={setPhoneNum}
          phoneNum={phoneNum}
          setModal2={setModal2}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default LoginModals;
