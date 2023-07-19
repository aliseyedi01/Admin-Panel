import { useAppSelector } from "@/interface/utils";
import React, { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");

  const users = useAppSelector((state) => state.users);
  const products = useAppSelector((state) => state.product);

  let pageTitle = "";

  switch (pathSegments[1]) {
    case "dashboard":
      pageTitle = "DashBoard";
      break;
    case "users":
      pageTitle = "Users";
      break;
    case "newuser":
      pageTitle = "Make User";
      break;
    case "products":
      pageTitle = "Products";
      break;
    case "product":
      pageTitle = "Make Products";
      break;
    case "blog":
      pageTitle = "Blog";
      break;
    default:
      pageTitle = "Page Not Found";
      break;
  }

  // Handling dynamic segments in the URL
  if (pathSegments[1] === "user" && pathSegments.length === 3 && pathSegments[2] !== "newuser") {
    const keyUser = pathSegments[2];
    const currentUser = users.find((users) => users.key === keyUser);
    pageTitle = String(currentUser?.name);
  }
  if (pathSegments[1] === "user" && pathSegments.length === 3 && pathSegments[2] === "newuser") {
    pageTitle = "Make User";
  }
  if (
    pathSegments[1] === "product" &&
    pathSegments.length === 3 &&
    pathSegments[2] !== "newproduct"
  ) {
    const keyProduct = pathSegments[2];
    const currentProduct = products.find((product) => product.key === keyProduct);
    pageTitle = String(currentProduct?.name);
  }
  if (
    pathSegments[1] === "product" &&
    pathSegments.length === 3 &&
    pathSegments[2] === "newproduct"
  ) {
    pageTitle = "Make Product";
  }

  useEffect(() => {
    document.title = pageTitle;
  }, [pathSegments]);

  return <section className=" p-5 pt-20">{children}</section>;
};

export default PageLayout;
