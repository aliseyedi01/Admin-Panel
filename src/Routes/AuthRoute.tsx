import React from "react";
import { LogIn, SignUp } from "@/Pages";
import { Route, Routes } from "react-router-dom";

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
