// React
import React from "react";
// component
import { PageLayout, SaleQuantity, GeneralStats } from "@/Components";

const Dashboard: React.FC = () => {
  return (
    <PageLayout>
      <GeneralStats />
      <SaleQuantity />
    </PageLayout>
  );
};

export default Dashboard;
