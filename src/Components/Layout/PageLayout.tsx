import { useAppSelector } from "@/interface/utils";
import React, { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");

  const users = useAppSelector((state) => state.users);
  const products = useAppSelector((state) => state.product);
  const blogs = useAppSelector((state) => state.blog);

  const getPageTitle = () => {
    let pageTitle = "Admin Panel";

    const segment1 = pathSegments[1];
    const segment2 = pathSegments[2];

    switch (segment1) {
      case "dashboard":
        pageTitle = "DashBoard";
        break;
      case "users":
        pageTitle = "Users";
        break;
      case "user":
        pageTitle = segment2 === "newuser" ? "Make User" : getUserPageTitle();
        break;
      case "products":
        pageTitle = "Products";
        break;
      case "product":
        pageTitle = segment2 === "newproduct" ? "Make Product" : getProductPageTitle();
        break;
      case "blogs":
        pageTitle = "Blog";
        break;
      case "blog":
        pageTitle = segment2 === "newblog" ? "Make Blog" : getBlogPageTitle();
        break;
      default:
        break;
    }
    return pageTitle;
  };

  // get the user page title
  const getUserPageTitle = () => {
    const currentUser = users.find((user) => user.key === pathSegments[2]);
    return currentUser?.name || "User Not Found";
  };

  // get the product page title
  const getProductPageTitle = () => {
    const currentProduct = products.find((product) => product.key === pathSegments[2]);
    return currentProduct?.name || "Product Not Found";
  };
  // get the blog page title
  const getBlogPageTitle = () => {
    const currentBlog = blogs.find((blog) => blog.key === pathSegments[2]);
    return currentBlog?.name || "Blogs Not Found";
  };

  useEffect(() => {
    const pageTitle = getPageTitle();
    document.title = pageTitle;
  }, [pathSegments]);

  return <section className="min-h-screen w-full p-5 pt-20">{children}</section>;
};

export default PageLayout;
