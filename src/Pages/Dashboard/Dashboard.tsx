// React
import React from "react";
// component
import { PageLayout, SaleQuantity, GeneralStats, ProductSale } from "@/Components";

const Dashboard: React.FC = () => {
  return (
    <div className="hide-scrollbar h-full overflow-y-scroll">
      <PageLayout>
        <GeneralStats />
        <SaleQuantity />
        <ProductSale />
      </PageLayout>
    </div>
  );
};

export default Dashboard;
