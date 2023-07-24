import {
  Blog,
  Dashboard,
  NotFound,
  ProductMaker,
  ProductSingle,
  Products,
  User,
  UserMaker,
  UserSingle,
} from "@/Pages";

import { Route, Routes } from "react-router-dom";
import { Header } from "..";
import BlogSingle from "@/Pages/Blog/BlogSingle";
import BlogMaker from "@/Pages/Blog/BlogMaker";

function MainSection() {
  return (
    <main className="h-screen w-full overflow-y-hidden">
      <Header />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        {/* Product */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:ProductId" element={<ProductSingle />} />
        <Route path="/product/newproduct" element={<ProductMaker />} />
        {/* user */}
        <Route path="users" element={<User />} />
        <Route path="/user/:userId" element={<UserSingle />} />
        <Route path="/user/newuser" element={<UserMaker />} />
        {/* Blog */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogSingle />} />
        <Route path="/blog/newblog" element={<BlogMaker />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default MainSection;
