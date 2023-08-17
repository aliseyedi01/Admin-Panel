// react
import React from "react";
import { Route, Routes } from "react-router-dom";
// components
import { LogIn, SignUp } from "@/Pages";

const AuthRoute: React.FC = () => {
  return (
    <div className="surface h-screen w-full">
      <Routes>
        <Route path="*" element={<LogIn />} />
        <Route path="/auth/logIn" element={<LogIn />} />
        <Route path="/auth/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;
