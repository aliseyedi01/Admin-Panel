import { Button, Tooltip } from "antd";
import React from "react";
// icon
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title="Back">
      <Button
        className="mb-5 bg-blue-500"
        type="primary"
        icon={<IoChevronBack />}
        onClick={() => navigate(-1)}
      />
    </Tooltip>
  );
};

export default BackPage;
