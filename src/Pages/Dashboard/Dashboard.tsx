// React
import React from "react";
// component
import { PageLayout, SaleQuantity, GeneralStats, ProductSale, CityViews } from "@/Components";

const Dashboard: React.FC = () => {
  return (
    <div className="hide-scrollbar h-full overflow-y-scroll">
      <PageLayout>
        <GeneralStats />
        <SaleQuantity />
        <ProductSale />
        <CityViews />
      </PageLayout>
    </div>
  );
};

export default Dashboard;
