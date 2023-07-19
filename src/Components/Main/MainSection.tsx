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

function MainSection() {
  return (
    <main className="h-screen w-full overflow-y-hidden">
      <Header />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:ProductId" element={<ProductSingle />} />
        <Route path="/product/newproduct" element={<ProductMaker />} />
        <Route path="users" element={<User />} />
        <Route path="/user/:userId" element={<UserSingle />} />
        <Route path="/user/newuser" element={<UserMaker />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default MainSection;
