// hook
import useHideClickOutside from "@/Hooks/useHideClickOutside";
import { supabase } from "@/utils/initSupabase";
// react
import React, { useState, useRef } from "react";
// icon
import { FaUserCog, FaWalking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountBtn: React.FC = () => {
  // toggle show & hidden modal
  const [modalAccount, setModalAccount] = useState(false);
  const toggleModal = () => {
    setModalAccount((prevModalAccount) => !prevModalAccount);
  };
  const navigate = useNavigate();

  // Create a ref for the modal element
  const modalRef = useRef(null);

  // Call the useHideClickOutside hook and provide the modalRef
  useHideClickOutside(modalRef, () => {
    setModalAccount(false);
  });

  // handle LogOut
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error.message);
      } else {
        navigate("/auth/logIn");
      }
    } catch (error: any) {
      console.error("Logout error:", error.message);
    }
  };

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
          className="absolute right-5 top-16 h-max w-40 flex-col rounded-md border-[1px] border-indigo-600 bg-blue-200 p-2 text-center font-Montserrat font-bold  text-black"
        >
          <p className="flex w-32 items-center gap-2 overflow-hidden truncate py-2 pl-5">
            Ali Seyedi
          </p>
          <hr className="my-2 h-[1.5px] rounded-full bg-indigo-600" />
          <button className="flex items-center justify-start gap-3 py-2 pl-4 pr-10 hover:rounded-md hover:bg-blue-400">
            <FaUserCog /> Profile
          </button>
          <hr className="my-2 h-[2px] rounded-full bg-indigo-600" />
          <button
            onClick={handleLogout}
            className="flex items-center justify-start gap-3 py-2 pl-3 pr-9 hover:rounded-md hover:bg-blue-400"
          >
            <FaWalking className="scale-x-[-1]" />
            LogOut
          </button>
        </div>
      )}
    </>
  );
};

export default AccountBtn;
