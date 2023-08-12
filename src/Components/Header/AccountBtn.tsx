// hook
import useHideClickOutside from "@/Hooks/useHideClickOutside";
// react
import React, { useState, useRef } from "react";

const AccountBtn: React.FC = () => {
  // toggle show & hidden modal
  const [modalAccount, setModalAccount] = useState(false);
  const toggleModal = () => {
    setModalAccount((prevModalAccount) => !prevModalAccount);
  };

  // Create a ref for the modal element
  const modalRef = useRef(null);

  // Call the useHideClickOutside hook and provide the modalRef
  useHideClickOutside(modalRef, () => {
    setModalAccount(false);
  });

  return (
    <>
      <img
        src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg"
        alt="account"
        className="relative h-10 w-10 cursor-pointer rounded-full"
        onClick={toggleModal}
      />
      {modalAccount && (
        <div
          ref={modalRef}
          className="absolute right-5 top-16 h-max w-40 flex-col rounded-md bg-blue-200 p-2 text-center font-Montserrat font-bold text-black"
        >
          <p className="py-2">Ali Seyedi</p>
          <hr className="my-2 h-[2px] rounded-full bg-indigo-600" />
          <button className="px-9 py-2 hover:rounded-md hover:bg-blue-400">Profile</button>
          <hr className="my-2 h-[3px] rounded-full bg-indigo-600" />
          <button className="px-8 py-2 hover:rounded-md hover:bg-blue-400">Log Out</button>
        </div>
      )}
    </>
  );
};

export default AccountBtn;
