import React, { PropsWithChildren } from "react";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className=" p-5 pt-20">{children}</section>;
};

export default PageLayout;
