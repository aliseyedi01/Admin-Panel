// react
import React from "react";
import { Route, Routes } from "react-router-dom";
// component
import {
  Blog,
  BlogMaker,
  BlogSingle,
  Dashboard,
  NotFound,
  ProductMaker,
  ProductSingle,
  Products,
  User,
  UserMaker,
  UserSingle,
} from "@/Pages";
import { Header, Sidebar } from "@/Components";

const AdminRoute: React.FC = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="background h-full w-full">
        <Header />
        <Routes>
          <Route>
            <Route path="*" element={<NotFound />} />
            {/* Product */}
            <Route path="/products" element={<Products />} />
            <Route path="/product/:ProductId" element={<ProductSingle />} />
            <Route path="/product/newproduct" element={<ProductMaker />} />
            {/* User */}
            <Route path="/users" element={<User />} />
            <Route path="/user/:userId" element={<UserSingle />} />
            <Route path="/user/newuser" element={<UserMaker />} />
            {/* Blog */}
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogSingle />} />
            <Route path="/blog/newblog" element={<BlogMaker />} />
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoute;
