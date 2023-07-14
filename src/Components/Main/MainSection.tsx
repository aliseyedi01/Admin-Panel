import { Blog, Dashboard, NotFound, Products, User, UserMaker, UserSingle } from "@/Pages";

import { Route, Routes } from "react-router-dom";
import { Header } from "..";

function MainSection() {
  return (
    <div className="  h-full w-full ">
      <Header />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="user" element={<User />} />
        <Route path="/user/:userId" element={<UserSingle />} />
        <Route path="/user/newuser" element={<UserMaker />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default MainSection;
