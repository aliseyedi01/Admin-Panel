import { Blog, Dashboard, Home, NotFound, User } from "@/Pages";

import { Route, Routes } from "react-router-dom";

function MainSection() {
  return (
    <div className="  h-full w-[80%] ">
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default MainSection;
